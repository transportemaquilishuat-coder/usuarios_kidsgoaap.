const params = new URLSearchParams(window.location.search);
const role = params.get('role');

function setUserInfo() {
    const user = JSON.parse(localStorage.getItem('transporteEscolarUser') || '{}');
    const userName = user.nombre || user.email || 'Usuario';
    const userElement = document.getElementById('userNameLabel');
    const welcomeTitle = document.getElementById('welcomeTitle');

    if (userElement) {
        userElement.textContent = userName;
    }

    if (welcomeTitle) {
        welcomeTitle.textContent = `Bienvenido, ${userName}`;
    }
}

async function loginWithBackend(selectedRole, email, password) {
    const config = window.transporteEscolarConfig || { apiBaseUrl: 'http://127.0.0.1:8080', authEndpoint: '/api/auth/login' };
    const response = await fetch(`${config.apiBaseUrl}${config.authEndpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json().catch(() => ({}));

    if (!response.ok) {
        throw new Error(data.error || 'No se pudo iniciar sesión.');
    }

    const userRole = data?.usuario?.rol || '';
    if (selectedRole === 'superadmin' && userRole !== 'super_admin') {
        throw new Error('Este usuario no tiene permisos de superadministrador.');
    }

    localStorage.setItem('transporteEscolarToken', data.token || '');
    localStorage.setItem('transporteEscolarUser', JSON.stringify(data.usuario || {}));

    if (selectedRole === 'superadmin' || userRole === 'super_admin') {
        window.location.href = '/superadmin.html';
    } else {
        window.location.href = '/admin.html';
    }
}

if (window.location.pathname === '/login.html') {
    const select = document.getElementById('role');
    const form = document.getElementById('loginForm');

    if (select && role) {
        select.value = role;
    }

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const selectedRole = select?.value || 'school';
            const email = document.getElementById('email')?.value || '';
            const password = document.getElementById('password')?.value || '';

            if (!email || !password) {
                alert('Completa correo y contraseña para continuar.');
                return;
            }

            try {
                await loginWithBackend(selectedRole, email, password);
            } catch (error) {
                alert(error.message || 'No se pudo iniciar sesión.');
            }
        });
    }
}

if (window.location.pathname === '/admin.html' || window.location.pathname === '/superadmin.html') {
    setUserInfo();

    document.querySelectorAll('.nav-item').forEach((button) => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.nav-item').forEach((item) => item.classList.remove('active'));
            button.classList.add('active');

            const module = button.getAttribute('data-module');
            document.querySelectorAll('.module-view').forEach((view) => {
                view.classList.toggle('active', view.id === module);
            });
        });
    });
}
