const params = new URLSearchParams(window.location.search);
const role = params.get('role');

const translations = {
    es: {
        page: { title: 'Transporte Escolar | Portal Web' },
        nav: { services: 'Servicios', benefits: 'Beneficios', contact: 'Contacto' },
        hero: {
            eyebrow: 'Plataforma de transporte escolar',
            title: 'Más control, menos incertidumbre en cada viaje.',
            description: 'Una solución digital pensada para colegios, operadores y familias que buscan organización, trazabilidad y tranquilidad diaria.',
            ctaPrimary: 'Entrar al panel',
            ctaSecondary: 'Ver servicios',
            highlight1: 'Monitoreo en tiempo real',
            highlight2: 'Comunicación centralizada',
            highlight3: 'Alertas y reportes',
            mediaLabel: 'Contenido flexible',
            mediaText: 'Actualiza fotografías, videos y textos desde el panel de administración.'
        },
        stats: {
            monitoring: 'Monitoreo continuo',
            visibility: 'Visibilidad operativa',
            alerts: 'Alertas críticas'
        },
        services: {
            eyebrow: 'Servicios y funciones',
            title: 'Todo lo que la plataforma hace posible',
            routeTitle: 'Gestión de rutas',
            routeText: 'Organiza recorridos, define paradas y mantiene el servicio alineado con la operación diaria.',
            followTitle: 'Seguimiento operativo',
            followText: 'Monitorea conductores, estados de viaje y alertas para responder con mayor agilidad.',
            familyTitle: 'Comunicación con familias',
            familyText: 'Facilita la información clara sobre el servicio y reduce la incertidumbre en cada traslado.',
            reportsTitle: 'Reportes y control',
            reportsText: 'Recopila información útil para tomar decisiones y mejorar la calidad del servicio.'
        },
        about: {
            eyebrow: 'Diseño moderno',
            title: 'Una experiencia pensada para equipos, familias y directivos',
            listTitle: 'Lo que mejora con esta plataforma',
            list1: 'Centraliza la operación diaria en una sola vista.',
            list2: 'Aumenta la confianza con información clara y oportuna.',
            list3: 'Permite administrar contenidos sin depender de terceros.',
            videoTitle: 'Contenido multimedia',
            videoText: 'Puedes actualizar fotografías, videos y textos desde el panel administrativo para mantener la web siempre fresca.'
        },
        cta: {
            title: 'Accede al panel para ver la experiencia completa',
            description: 'Una vez que inicies sesión, podrás ver el entorno de administración y las herramientas disponibles para cada usuario.',
            button: 'Ingresar'
        },
        login: {
            title: 'Acceso al portal',
            eyebrow: 'Ingreso seguro',
            titleHeading: 'Selecciona tu perfil',
            description: 'Este portal está preparado para el rol de administrador de colegio y el rol de superadministrador, con acceso diferenciado según el perfil.',
            roleLabel: 'Tipo de acceso',
            schoolOption: 'Administrador de colegio',
            superadminOption: 'Superadministrador',
            emailLabel: 'Correo institucional',
            passwordLabel: 'Contraseña',
            submit: 'Ingresar',
            helper: 'El acceso se valida con el backend antes de abrir los paneles administrativos.',
            back: 'Volver al inicio'
        },
        admin: {
            title: 'Panel | Administrador de colegio',
            navHome: 'Inicio',
            navContent: 'Contenido',
            navRoutes: 'Rutas',
            navStudents: 'Alumnos',
            navDrivers: 'Conductores',
            navPayments: 'Pagos',
            navReports: 'Reportes',
            logout: 'Cerrar sesión',
            panelEyebrow: 'Panel operativo',
            dashboardTitle: 'Resumen del día',
            dashboardDescription: 'Gestión centralizada para contenidos, rutas, estudiantes, conductores y alertas.',
            statRoutes: 'Rutas activas',
            statStudents: 'Estudiantes',
            statDrivers: 'Conductores',
            statAlerts: 'Alertas',
            contentTitle: 'Gestión de contenido',
            contentTitleField: 'Título principal',
            contentDescriptionField: 'Descripción principal',
            contentImageField: 'URL de foto principal',
            contentVideoField: 'URL de video promocional',
            contentSave: 'Guardar cambios',
            routesTitle: 'Gestión de rutas',
            routesListTitle: 'Rutas programadas',
            routesFormTitle: 'Nueva ruta',
            studentsTitle: 'Alumnos y padres',
            studentsListTitle: 'Listado de alumnos',
            studentsFormTitle: 'Agregar alumno',
            driversTitle: 'Conductores',
            driversListTitle: 'Conductores activos',
            driversFormTitle: 'Agregar conductor',
            paymentsTitle: 'Pagos',
            paymentsSummaryTitle: 'Estado de cuotas',
            paymentsSummary1: '65 al día',
            paymentsSummary2: '12 pendientes',
            paymentsSummary3: '7 morosos',
            paymentsRecentTitle: 'Pagos recientes',
            paymentsRecent1: 'Transferencia confirmada',
            paymentsRecent2: 'Pago parcial recibido',
            paymentsRecent3: 'Pago atrasado',
            reportsTitle: 'Reportes',
            reportsSummaryTitle: 'Resumen diario',
            reportsSummary1: 'Rutas completadas',
            reportsSummary2: 'Alertas cerradas',
            reportsSummary3: 'Indicadores del turno',
            reportsAdminTitle: 'Administración',
            reportsAdmin1: 'Configuración del sistema',
            reportsAdmin2: 'Auditoría',
            reportsAdmin3: 'Permisos',
            saveButton: 'Guardar'
        },
        superadmin: {
            title: 'Panel | Superadministrador',
            dashboardTitle: 'Resumen global del sistema',
            dashboardDescription: 'Vista centralizada para instituciones, rutas, conductores, pagos y reportes.',
            statSchools: 'Colegios',
            statStudents: 'Estudiantes',
            statDrivers: 'Conductores',
            statAlerts: 'Alertas críticas'
        }
    },
    en: {
        page: { title: 'School Transportation | Web Portal' },
        nav: { services: 'Services', benefits: 'Benefits', contact: 'Contact' },
        hero: {
            eyebrow: 'School transportation platform',
            title: 'More control, less uncertainty on every trip.',
            description: 'A digital solution designed for schools, operators and families that need organization, traceability and daily peace of mind.',
            ctaPrimary: 'Enter the panel',
            ctaSecondary: 'View services',
            highlight1: 'Real-time monitoring',
            highlight2: 'Centralized communication',
            highlight3: 'Alerts and reports',
            mediaLabel: 'Flexible content',
            mediaText: 'Update photos, videos and texts from the administration panel.'
        },
        stats: {
            monitoring: 'Continuous monitoring',
            visibility: 'Operational visibility',
            alerts: 'Critical alerts'
        },
        services: {
            eyebrow: 'Services and features',
            title: 'Everything the platform makes possible',
            routeTitle: 'Route management',
            routeText: 'Organize routes, define stops and keep the service aligned with daily operations.',
            followTitle: 'Operational tracking',
            followText: 'Monitor drivers, trip states and alerts to respond more quickly.',
            familyTitle: 'Communication with families',
            familyText: 'Facilitates clear service updates and reduces uncertainty on every trip.',
            reportsTitle: 'Reports and control',
            reportsText: 'Collects useful information for decision-making and improving service quality.'
        },
        about: {
            eyebrow: 'Modern design',
            title: 'An experience designed for teams, families and managers',
            listTitle: 'What improves with this platform',
            list1: 'Centralizes daily operations in a single view.',
            list2: 'Increases trust with clear and timely information.',
            list3: 'Allows content management without relying on third parties.',
            videoTitle: 'Multimedia content',
            videoText: 'You can update photos, videos and texts from the admin panel to keep the website fresh.'
        },
        cta: {
            title: 'Access the panel to see the full experience',
            description: 'Once you log in, you can view the administration environment and the tools available to each user.',
            button: 'Log in'
        },
        login: {
            title: 'Portal access',
            eyebrow: 'Secure access',
            titleHeading: 'Select your profile',
            description: 'This portal is prepared for the school administrator role and the super administrator role, with differentiated access according to the profile.',
            roleLabel: 'Access type',
            schoolOption: 'School administrator',
            superadminOption: 'Superadministrator',
            emailLabel: 'Institutional email',
            passwordLabel: 'Password',
            submit: 'Sign in',
            helper: 'Access is verified with the backend before opening administration panels.',
            back: 'Back to home'
        },
        admin: {
            title: 'Panel | School administrator',
            navHome: 'Home',
            navContent: 'Content',
            navRoutes: 'Routes',
            navStudents: 'Students',
            navDrivers: 'Drivers',
            navPayments: 'Payments',
            navReports: 'Reports',
            logout: 'Log out',
            panelEyebrow: 'Operations panel',
            dashboardTitle: 'Today overview',
            dashboardDescription: 'Centralized management for content, routes, students, drivers and alerts.',
            statRoutes: 'Active routes',
            statStudents: 'Students',
            statDrivers: 'Drivers',
            statAlerts: 'Alerts',
            contentTitle: 'Content management',
            contentTitleField: 'Main title',
            contentDescriptionField: 'Main description',
            contentImageField: 'Main photo URL',
            contentVideoField: 'Promotional video URL',
            contentSave: 'Save changes',
            routesTitle: 'Route management',
            routesListTitle: 'Scheduled routes',
            routesFormTitle: 'New route',
            studentsTitle: 'Students and parents',
            studentsListTitle: 'Student list',
            studentsFormTitle: 'Add student',
            driversTitle: 'Drivers',
            driversListTitle: 'Active drivers',
            driversFormTitle: 'Add driver',
            paymentsTitle: 'Payments',
            paymentsSummaryTitle: 'Fee status',
            paymentsSummary1: '65 up to date',
            paymentsSummary2: '12 pending',
            paymentsSummary3: '7 overdue',
            paymentsRecentTitle: 'Recent payments',
            paymentsRecent1: 'Transfer confirmed',
            paymentsRecent2: 'Partial payment received',
            paymentsRecent3: 'Late payment',
            reportsTitle: 'Reports',
            reportsSummaryTitle: 'Daily summary',
            reportsSummary1: 'Routes completed',
            reportsSummary2: 'Alerts closed',
            reportsSummary3: 'Shift indicators',
            reportsAdminTitle: 'Administration',
            reportsAdmin1: 'System settings',
            reportsAdmin2: 'Audit',
            reportsAdmin3: 'Permissions',
            saveButton: 'Save'
        },
        superadmin: {
            title: 'Panel | Superadministrator',
            dashboardTitle: 'System-wide overview',
            dashboardDescription: 'Centralized view for schools, routes, drivers, payments and reports.',
            statSchools: 'Schools',
            statStudents: 'Students',
            statDrivers: 'Drivers',
            statAlerts: 'Critical alerts'
        }
    }
};

function readStoredUser() {
    try {
        return JSON.parse(localStorage.getItem('transporteEscolarUser') || '{}');
    } catch (error) {
        return {};
    }
}

function getCurrentRole() {
    const currentPath = window.location.pathname;
    if (currentPath.includes('superadmin')) {
        return 'superadmin';
    }
    if (currentPath.includes('admin')) {
        return 'school';
    }
    return role || 'school';
}

function getRoleLabel(roleKey) {
    return roleKey === 'superadmin' ? 'Superadministrador' : 'Administrador de colegio';
}

function getPreferredLanguage() {
    const stored = localStorage.getItem('transporteEscolarLang');
    if (stored === 'es' || stored === 'en') {
        return stored;
    }

    const browserLanguage = navigator.language || navigator.languages?.[0] || 'es';
    return browserLanguage.toLowerCase().startsWith('en') ? 'en' : 'es';
}

function setLanguage(language) {
    const normalizedLanguage = language === 'en' ? 'en' : 'es';
    localStorage.setItem('transporteEscolarLang', normalizedLanguage);
    applyTranslations(normalizedLanguage);
}

function getNestedTranslation(dictionary, path) {
    return path.split('.').reduce((result, key) => result?.[key], dictionary) || '';
}

function applyTranslations(language = getPreferredLanguage()) {
    const dictionary = translations[language] || translations.es;
    document.documentElement.lang = language;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
        const key = element.getAttribute('data-i18n');
        const value = getNestedTranslation(dictionary, key);
        if (!value) {
            return;
        }

        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA' || element.tagName === 'SELECT') {
            element.setAttribute('placeholder', value);
        } else {
            element.textContent = value;
        }
    });

    document.querySelectorAll('[data-lang-switch]').forEach((button) => {
        button.classList.toggle('active', button.getAttribute('data-lang-switch') === language);
    });

    const titleElement = document.querySelector('title');
    if (titleElement) {
        titleElement.textContent = getNestedTranslation(dictionary, 'page.title') || titleElement.textContent;
    }

    renderContentSettings(language);
}

function loadContentSettings() {
    try {
        return JSON.parse(localStorage.getItem('transporteEscolarContent') || '{}');
    } catch (error) {
        return {};
    }
}

function saveContentSettings(settings) {
    localStorage.setItem('transporteEscolarContent', JSON.stringify(settings));
}

function renderContentSettings(language = getPreferredLanguage()) {
    const settings = loadContentSettings();
    const activeValues = settings[language] || settings.es || {};

    const heroTitleElement = document.getElementById('heroTitle');
    if (heroTitleElement && activeValues.heroTitle) {
        heroTitleElement.textContent = activeValues.heroTitle;
    }

    const heroDescriptionElement = document.getElementById('heroDescription');
    if (heroDescriptionElement && activeValues.heroDescription) {
        heroDescriptionElement.textContent = activeValues.heroDescription;
    }

    const heroImageElement = document.getElementById('heroImage');
    if (heroImageElement && activeValues.heroImage) {
        heroImageElement.src = activeValues.heroImage;
        heroImageElement.alt = activeValues.heroTitle || heroImageElement.alt;
    }

    const heroVideoElement = document.getElementById('heroVideo');
    if (heroVideoElement && activeValues.heroVideo) {
        heroVideoElement.src = activeValues.heroVideo;
    }

    const contentTitleField = document.getElementById('contentTitle');
    if (contentTitleField && activeValues.heroTitle) {
        contentTitleField.value = activeValues.heroTitle;
    }

    const contentDescriptionField = document.getElementById('contentDescription');
    if (contentDescriptionField && activeValues.heroDescription) {
        contentDescriptionField.value = activeValues.heroDescription;
    }

    const contentImageField = document.getElementById('contentImage');
    if (contentImageField && activeValues.heroImage) {
        contentImageField.value = activeValues.heroImage;
    }

    const contentVideoField = document.getElementById('contentVideo');
    if (contentVideoField && activeValues.heroVideo) {
        contentVideoField.value = activeValues.heroVideo;
    }
}

function setUserInfo() {
    const user = readStoredUser();
    const userName = user.nombre || user.email || 'Usuario';
    const userElement = document.getElementById('userNameLabel');
    const welcomeTitle = document.getElementById('welcomeTitle');
    const roleBadge = document.getElementById('roleBadge');

    if (userElement) {
        userElement.textContent = userName;
    }

    if (welcomeTitle) {
        welcomeTitle.textContent = `Bienvenido, ${userName}`;
    }

    if (roleBadge) {
        const currentRole = getCurrentRole();
        roleBadge.textContent = `${getRoleLabel(currentRole)}${user.source === 'demo' ? ' · Demo' : ''}`;
    }
}

function setStatus(message, state = 'online') {
    const statusPill = document.querySelector('.status-pill');
    if (!statusPill) {
        return;
    }

    statusPill.textContent = message;
    statusPill.classList.remove('is-online', 'is-warning', 'is-offline');
    statusPill.classList.add(state === 'warning' ? 'is-warning' : state === 'offline' ? 'is-offline' : 'is-online');
}

async function checkSystemHealth() {
    try {
        const response = await fetch('/api/health', { cache: 'no-store' });
        const data = await response.json().catch(() => ({}));

        if (response.ok && (data.ok || data.status === 'ok')) {
            setStatus(`● ${data.service || 'Sistema'} conectado`, 'online');
            return true;
        }
    } catch (error) {
        // The UI can keep working in demo mode.
    }

    setStatus('● Modo demo', 'warning');
    return false;
}

function persistDemoUser(selectedRole) {
    const demoUser = {
        nombre: selectedRole === 'superadmin' ? 'Superadmin demo' : 'Administrador demo',
        email: 'demo@transporte.local',
        rol: selectedRole === 'superadmin' ? 'super_admin' : 'school',
        source: 'demo'
    };

    localStorage.setItem('transporteEscolarToken', 'demo-token');
    localStorage.setItem('transporteEscolarUser', JSON.stringify(demoUser));
}

function shouldUseDemoLogin(email, password) {
    const config = window.transporteEscolarConfig || {};
    if (!config.allowDemoLogin) {
        return false;
    }

    const normalizedEmail = (email || '').trim().toLowerCase();
    const normalizedPassword = (password || '').trim();
    return normalizedEmail === 'demo@kidsgo.app' && normalizedPassword === 'Test1234!';
}

function hasPanelAccess(expectedRole) {
    const user = readStoredUser();
    const token = localStorage.getItem('transporteEscolarToken') || '';
    const config = window.transporteEscolarConfig || {};

    if (!token || !user?.rol) {
        return false;
    }

    if (user.source === 'demo' && !config.allowDemoLogin) {
        return false;
    }

    if (expectedRole === 'superadmin') {
        return user.rol === 'super_admin' || user.rol === 'superadmin';
    }

    return user.rol === 'school' || user.rol === 'school_admin' || user.rol === 'admin';
}

function requirePanelAccess() {
    const expectedRole = getCurrentRole();
    if (hasPanelAccess(expectedRole)) {
        return true;
    }

    localStorage.removeItem('transporteEscolarToken');
    localStorage.removeItem('transporteEscolarUser');
    window.location.replace(`/login.html?role=${expectedRole}`);
    return false;
}

async function loginWithBackend(selectedRole, email, password) {
    if (shouldUseDemoLogin(email, password)) {
        persistDemoUser(selectedRole);
        window.location.href = selectedRole === 'superadmin' ? '/superadmin.html' : '/admin.html';
        return;
    }

    const config = window.transporteEscolarConfig || { apiBaseUrl: '', authEndpoint: '/api/auth/login' };
    const baseUrl = config.apiBaseUrl ? config.apiBaseUrl : window.location.origin;
    const targetUrl = `${baseUrl}${config.authEndpoint || '/api/auth/login'}`;
    const response = await fetch(targetUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
            email,
            username: email,
            password,
            identifier: email
        })
    });

    const data = await response.json().catch(() => ({}));
    const responsePayload = data?.data || data?.result || data?.payload || data?.response || data;
    const userData = responsePayload?.usuario || responsePayload?.user || responsePayload?.userData || responsePayload?.profile || responsePayload?.account || responsePayload?.data || {};
    const token = responsePayload?.token || responsePayload?.accessToken || responsePayload?.jwt || responsePayload?.access_token || data?.token || data?.accessToken || data?.jwt || '';
    const userRole = responsePayload?.rol || responsePayload?.role || userData?.rol || userData?.role || data?.role || data?.rol || '';

    if (!response.ok) {
        throw new Error(data?.error || data?.message || data?.msg || data?.detail || 'No se pudo iniciar sesión.');
    }

    if (selectedRole === 'superadmin' && userRole && userRole !== 'super_admin' && userRole !== 'superadmin') {
        throw new Error('Este usuario no tiene permisos de superadministrador.');
    }

    const persistedUser = {
        ...userData,
        email: userData?.email || email,
        nombre: userData?.nombre || userData?.name || userData?.email || email,
        rol: userRole || (selectedRole === 'superadmin' ? 'super_admin' : 'school'),
        source: 'backend'
    };

    localStorage.setItem('transporteEscolarToken', token);
    localStorage.setItem('transporteEscolarUser', JSON.stringify(persistedUser));

    if (selectedRole === 'superadmin' || userRole === 'super_admin' || userRole === 'superadmin') {
        window.location.href = '/superadmin.html';
    } else {
        window.location.href = '/admin.html';
    }
}

function setupLanguageSwitcher() {
    document.querySelectorAll('[data-lang-switch]').forEach((button) => {
        button.addEventListener('click', () => {
            setLanguage(button.getAttribute('data-lang-switch'));
        });
    });
}

function setupPwa() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js').catch(() => { });
        });
    }
}

function setupQuickActions() {
    const parentLink = document.getElementById('parentQuickLink');
    const driverLink = document.getElementById('driverQuickLink');
    if (parentLink) {
        parentLink.addEventListener('click', () => {
            window.location.href = '/parent.html';
        });
    }
    if (driverLink) {
        driverLink.addEventListener('click', () => {
            window.location.href = '/driver.html';
        });
    }
}

function setupLogout() {
    document.querySelectorAll('[data-i18n="admin.logout"]').forEach((link) => {
        link.addEventListener('click', () => {
            localStorage.removeItem('transporteEscolarToken');
            localStorage.removeItem('transporteEscolarUser');
        });
    });
}

function setupContentManager() {
    const contentForm = document.getElementById('contentForm');
    if (!contentForm) {
        return;
    }

    contentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const language = getPreferredLanguage();
        const settings = loadContentSettings();
        settings[language] = {
            heroTitle: document.getElementById('contentTitle')?.value || '',
            heroDescription: document.getElementById('contentDescription')?.value || '',
            heroImage: document.getElementById('contentImage')?.value || '',
            heroVideo: document.getElementById('contentVideo')?.value || ''
        };
        saveContentSettings(settings);
        renderContentSettings(language);
        alert(language === 'en' ? 'Content updated successfully.' : 'Contenido actualizado correctamente.');
    });
}

function getStorageKey(moduleName) {
    return `transporteEscolar${moduleName.charAt(0).toUpperCase()}${moduleName.slice(1)}`;
}

function getModuleRecords(moduleName) {
    try {
        return JSON.parse(localStorage.getItem(getStorageKey(moduleName)) || 'null') || [];
    } catch (error) {
        return [];
    }
}

function saveModuleRecords(moduleName, records) {
    localStorage.setItem(getStorageKey(moduleName), JSON.stringify(records));
}

function setupCrudModule(moduleName, formId, listId, fields, labels) {
    const form = document.getElementById(formId);
    const list = document.getElementById(listId);
    if (!form || !list) {
        return;
    }

    let editingId = null;
    let records = getModuleRecords(moduleName);

    function render() {
        records = getModuleRecords(moduleName);
        list.innerHTML = '';

        if (!records.length) {
            const emptyState = document.createElement('p');
            emptyState.className = 'helper-text';
            emptyState.textContent = 'No hay registros aun.';
            list.appendChild(emptyState);
            return;
        }

        records.forEach((item) => {
            const card = document.createElement('article');
            card.className = 'manager-item';
            const details = document.createElement('div');
            details.innerHTML = `<strong>${item.nombre || item.grado || item.vehiculo || ''}</strong>`;
            const meta = document.createElement('p');
            meta.className = 'helper-text';
            meta.textContent = fields.map((field) => `${labels[field]}: ${item[field]}`).join(' · ');
            const actions = document.createElement('div');
            actions.className = 'manager-actions';
            const editButton = document.createElement('button');
            editButton.type = 'button';
            editButton.className = 'btn btn--ghost';
            editButton.textContent = 'Editar';
            editButton.addEventListener('click', () => {
                editingId = item.id;
                fields.forEach((field) => {
                    const input = document.getElementById(`${formId.replace('Form', '')}${field.charAt(0).toUpperCase()}${field.slice(1)}`);
                    if (input) {
                        input.value = item[field] || '';
                    }
                });
            });
            const deleteButton = document.createElement('button');
            deleteButton.type = 'button';
            deleteButton.className = 'btn btn--ghost';
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => {
                records = records.filter((record) => record.id !== item.id);
                saveModuleRecords(moduleName, records);
                render();
            });
            actions.append(editButton, deleteButton);
            card.append(details, meta, actions);
            list.appendChild(card);
        });
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const payload = {
            id: editingId || `${moduleName}-${Date.now()}`,
            nombre: document.getElementById(`${formId.replace('Form', '')}Nombre`)?.value || '',
            horario: document.getElementById(`${formId.replace('Form', '')}Horario`)?.value || '',
            parada: document.getElementById(`${formId.replace('Form', '')}Parada`)?.value || '',
            grado: document.getElementById(`${formId.replace('Form', '')}Grado`)?.value || '',
            ruta: document.getElementById(`${formId.replace('Form', '')}Ruta`)?.value || '',
            estado: document.getElementById(`${formId.replace('Form', '')}Estado`)?.value || '',
            vehiculo: document.getElementById(`${formId.replace('Form', '')}Vehiculo`)?.value || ''
        };

        const nextRecords = editingId ? records.map((item) => (item.id === editingId ? { ...item, ...payload } : item)) : [...records, payload];
        saveModuleRecords(moduleName, nextRecords);
        editingId = null;
        form.reset();
        render();
    });

    render();
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
                const message = error?.message || 'No se pudo iniciar sesión.';
                alert(message);
            }
        });
    }
}

if (window.location.pathname === '/admin.html' || window.location.pathname === '/superadmin.html') {
    if (!requirePanelAccess()) {
        throw new Error('Acceso no autorizado.');
    }

    setUserInfo();
    checkSystemHealth();
    setupLanguageSwitcher();
    setupLogout();
    setupContentManager();

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

    setupCrudModule('rutas', 'rutasForm', 'rutasList', ['nombre', 'horario', 'parada', 'estado'], {
        nombre: 'Ruta',
        horario: 'Horario',
        parada: 'Parada',
        estado: 'Estado'
    });
    setupCrudModule('alumnos', 'alumnosForm', 'alumnosList', ['nombre', 'grado', 'ruta', 'estado'], {
        nombre: 'Nombre',
        grado: 'Grado',
        ruta: 'Ruta',
        estado: 'Estado'
    });
    setupCrudModule('conductores', 'conductoresForm', 'conductoresList', ['nombre', 'vehiculo', 'ruta', 'estado'], {
        nombre: 'Nombre',
        vehiculo: 'Vehículo',
        ruta: 'Ruta',
        estado: 'Estado'
    });
}

if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    setupLanguageSwitcher();
    setupPwa();
    setupQuickActions();
}

if (window.location.pathname === '/parent.html' || window.location.pathname === '/driver.html') {
    setupPwa();
    setupLanguageSwitcher();
}

applyTranslations(getPreferredLanguage());
