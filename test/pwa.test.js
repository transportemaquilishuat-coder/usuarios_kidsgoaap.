const test = require('node:test');
const assert = require('node:assert/strict');
const { spawn } = require('child_process');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const port = 3101;
let child;

function waitForServer(timeoutMs = 5000) {
    return new Promise((resolve, reject) => {
        const startedAt = Date.now();
        const tick = () => {
            const req = require('http').get({ hostname: '127.0.0.1', port, path: '/api/health' }, (res) => {
                res.resume();
                resolve();
            });
            req.on('error', () => {
                if (Date.now() - startedAt > timeoutMs) {
                    reject(new Error('Server did not start in time'));
                    return;
                }
                setTimeout(tick, 100);
            });
        };
        tick();
    });
}

function request(pathname, options = {}) {
    return new Promise((resolve, reject) => {
        const req = require('http').request({
            hostname: '127.0.0.1',
            port,
            path: pathname,
            method: options.method || 'GET',
            headers: options.headers || {}
        }, (res) => {
            let body = '';
            res.setEncoding('utf8');
            res.on('data', (chunk) => {
                body += chunk;
            });
            res.on('end', () => {
                resolve({ statusCode: res.statusCode, body });
            });
        });
        req.on('error', reject);
        if (options.body) {
            req.write(options.body);
        }
        req.end();
    });
}

function unsignedJwt(payload) {
    const encode = (value) => Buffer.from(JSON.stringify(value))
        .toString('base64url');

    return `${encode({ alg: 'none', typ: 'JWT' })}.${encode(payload)}.`;
}

test('serves the PWA assets and the new mobile flows', async (t) => {
    child = spawn(process.execPath, ['server.js'], {
        cwd: rootDir,
        env: { ...process.env, PORT: String(port) }
    });

    t.after(() => {
        if (child) {
            child.kill('SIGTERM');
        }
    });

    child.stdout.on('data', (chunk) => {
        process.stdout.write(chunk);
    });

    child.stderr.on('data', (chunk) => {
        process.stderr.write(chunk);
    });

    await waitForServer();

    const manifest = await request('/manifest.json');
    assert.equal(manifest.statusCode, 200);
    assert.match(manifest.body, /KidsGo App/i);

    const sw = await request('/sw.js');
    assert.equal(sw.statusCode, 200);
    assert.match(sw.body, /install/i);

    const parent = await request('/parent.html');
    assert.equal(parent.statusCode, 200);
    assert.match(parent.body, /Seguimiento del viaje/i);

    const driver = await request('/driver.html');
    assert.equal(driver.statusCode, 200);
    assert.match(driver.body, /Ruta actual/i);

    const unauthorizedApi = await request('/api/students');
    assert.equal(unauthorizedApi.statusCode, 401);
    assert.match(unauthorizedApi.body, /Autenticaci/);

    const mismatchedUserApi = await request('/api/students', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${unsignedJwt({ sub: 'user-1' })}`
        },
        body: JSON.stringify({ userId: 'user-2', name: 'Ana' })
    });
    assert.equal(mismatchedUserApi.statusCode, 403);
    assert.match(mismatchedUserApi.body, /no coincide/i);
});
