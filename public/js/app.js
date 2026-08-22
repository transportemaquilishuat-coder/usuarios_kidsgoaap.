const params = new URLSearchParams(window.location.search);
const role = params.get('role');

const translations = {
    es: {
        page: { title: 'KidsGo! | Smart School Mobility' },
        nav: { services: 'Servicios', benefits: 'Beneficios', how: 'Cómo funciona', community: 'Comunidad', smartband: 'SmartBand', security: 'Seguridad', contact: 'Contacto' },
        hero: {
            eyebrow: 'Smart School Mobility',
            title: 'El transporte escolar, ahora más inteligente.',
            description: 'KidsGo! conecta a familias, colegios y transporte escolar para que cada trayecto sea más seguro, organizado y tranquilo.',
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
        landing: {
            departureConfirmed: 'Salida confirmada',
            nearStop: 'Próximo a parada',
            schoolArrival: 'Llegada al colegio',
            routeActive: 'Ruta activa',
            routeNearby: 'Transporte próximo a la parada',
            safeAlert: 'Alerta segura',
            connectedFamily: 'Familia y colegio conectados',
            previewRoute: 'Ruta Maquilishuat',
            previewStatus: 'El transporte está a 5 min de la parada.',
            mediaText: 'Safe School Transport con una experiencia visual moderna, cercana y en movimiento.',
            gpsTracking: 'Seguimiento de rutas',
            familyInfo: 'Información para familias',
            iotInnovation: 'Innovación en desarrollo'
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
        page: { title: 'KidsGo! | Smart School Mobility' },
        nav: { services: 'Services', benefits: 'Benefits', how: 'How it works', community: 'Community', smartband: 'SmartBand', security: 'Safety', contact: 'Contact' },
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
        landing: {
            departureConfirmed: 'Departure confirmed',
            nearStop: 'Approaching stop',
            schoolArrival: 'Arrived at school',
            routeActive: 'Active route',
            routeNearby: 'Transportation approaching the stop',
            safeAlert: 'Safe alert',
            connectedFamily: 'Family and school connected',
            previewRoute: 'Maquilishuat Route',
            previewStatus: 'Transportation is 5 min from the stop.',
            mediaText: 'Safe School Transport with a modern, friendly and moving visual experience.',
            gpsTracking: 'Route tracking',
            familyInfo: 'Information for families',
            iotInnovation: 'Innovation in development'
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

const SITE_CONTENT_FIELDS = [
    { key: 'brandName', label: 'Marca', type: 'text' },
    { key: 'brandTagline', label: 'Lema', type: 'text' },
    { key: 'brandConcept', label: 'Concepto de marca', type: 'textarea' },
    { key: 'brandPersonality', label: 'Personalidad de marca', type: 'textarea' },
    { key: 'tone', label: 'Tono de comunicación', type: 'textarea' },
    { key: 'heroEyebrow', label: 'Etiqueta del hero', type: 'text' },
    { key: 'heroTitle', label: 'Título principal', type: 'text' },
    { key: 'heroDescription', label: 'Subtítulo', type: 'textarea' },
    { key: 'heroMessage', label: 'Mensaje emocional', type: 'textarea' },
    { key: 'heroImage', label: 'URL de foto principal', type: 'url' },
    { key: 'heroVideo', label: 'URL de video promocional', type: 'url' },
    { key: 'problemImage', label: 'Imagen: problema / rutina familiar', type: 'url' },
    { key: 'solutionImage', label: 'Imagen: alumnos subiendo al transporte', type: 'url' },
    { key: 'howImage', label: 'Imagen: ruta o seguimiento', type: 'url' },
    { key: 'featuresImage', label: 'Imagen: funciones / app', type: 'url' },
    { key: 'innovationImage', label: 'Imagen: innovacion escolar', type: 'url' },
    { key: 'smartBandImage', label: 'Imagen: SmartBand con tecnologia LoRa', type: 'url' },
    { key: 'smartCampusImage', label: 'Imagen: Smart Campus', type: 'url' },
    { key: 'audiencesImage', label: 'Imagen: carpool y comunidad escolar', type: 'url' },
    { key: 'securityImage', label: 'Imagen: seguridad y confianza', type: 'url' },
    { key: 'technologyImage', label: 'Imagen: tecnologia / IoT', type: 'url' },
    { key: 'impactImage', label: 'Imagen: impacto / ninos sonriendo', type: 'url' },
    { key: 'featuredVideoUrl', label: 'Video gratuito recomendado (Pexels, Pixabay, YouTube o MP4)', type: 'url' },
    { key: 'primaryCta', label: 'CTA principal', type: 'text' },
    { key: 'schoolCta', label: 'CTA colegios', type: 'text' },
    { key: 'transportCta', label: 'CTA transportistas', type: 'text' },
    { key: 'problemTitle', label: 'Título: problema', type: 'text' },
    { key: 'problemBody', label: 'Contenido: problema', type: 'textarea' },
    { key: 'solutionTitle', label: 'Título: solución', type: 'text' },
    { key: 'solutionBody', label: 'Contenido: solución', type: 'textarea' },
    { key: 'howTitle', label: 'Título: cómo funciona', type: 'text' },
    { key: 'howSteps', label: 'Pasos de funcionamiento', type: 'textarea' },
    { key: 'featuresTitle', label: 'Título: funciones actuales', type: 'text' },
    { key: 'features', label: 'Funciones actuales', type: 'textarea' },
    { key: 'innovationTitle', label: 'Título: innovación', type: 'text' },
    { key: 'innovationBody', label: 'Contenido: innovación', type: 'textarea' },
    { key: 'smartBandTitle', label: 'Título: SmartBand', type: 'text' },
    { key: 'smartBandBody', label: 'Contenido: SmartBand', type: 'textarea' },
    { key: 'smartCampusTitle', label: 'Título: Smart Campus', type: 'text' },
    { key: 'smartCampusBody', label: 'Contenido: Smart Campus', type: 'textarea' },
    { key: 'audiencesTitle', label: 'Título: públicos', type: 'text' },
    { key: 'audiences', label: 'Padres, colegios, transportistas y estudiantes', type: 'textarea' },
    { key: 'securityTitle', label: 'Título: seguridad', type: 'text' },
    { key: 'securityBody', label: 'Contenido: seguridad', type: 'textarea' },
    { key: 'technologyTitle', label: 'Título: tecnología', type: 'text' },
    { key: 'technologyBody', label: 'Contenido: tecnología', type: 'textarea' },
    { key: 'roadmapTitle', label: 'Título: desarrollo por etapas', type: 'text' },
    { key: 'roadmap', label: 'Etapas', type: 'textarea' },
    { key: 'impactTitle', label: 'Título: impacto', type: 'text' },
    { key: 'impactBody', label: 'Contenido: impacto', type: 'textarea' },
    { key: 'aboutTitle', label: 'Título: sobre KidsGo!', type: 'text' },
    { key: 'aboutBody', label: 'Contenido: sobre KidsGo!', type: 'textarea' },
    { key: 'mission', label: 'Misión', type: 'textarea' },
    { key: 'vision', label: 'Visión', type: 'textarea' },
    { key: 'valueProposition', label: 'Propuesta de valor', type: 'textarea' },
    { key: 'faq', label: 'Preguntas frecuentes', type: 'textarea' },
    { key: 'finalCtaTitle', label: 'Título CTA final', type: 'text' },
    { key: 'finalCtaBody', label: 'Texto CTA final', type: 'textarea' },
    { key: 'footerBody', label: 'Footer y contacto', type: 'textarea' }
];

const DEFAULT_SITE_CONTENT = {
    es: {
        brandName: 'KidsGo!',
        brandTagline: 'Smart School Mobility',
        brandConcept: 'KidsGo! representa movimiento, seguridad, conexión y tranquilidad. Cuando tus hijos se mueven, tú quieres saber que todo está bien.',
        brandPersonality: 'Cercana\nModerna\nSegura\nDinámica\nInnovadora\nFamiliar\nConfiable\nOptimista',
        tone: 'KidsGo! habla a las familias de forma humana y clara. En lugar de explicar tecnología compleja, traduce cada función en tranquilidad, organización y decisiones sencillas para padres, colegios y transportistas.',
        heroEyebrow: 'Smart School Mobility',
        heroTitle: 'El transporte escolar, ahora más inteligente.',
        heroDescription: 'KidsGo! conecta a familias, colegios y transporte escolar para que cada trayecto sea más seguro, organizado y tranquilo.',
        heroMessage: 'Tú sabes dónde están tus hijos. Nosotros ayudamos a que lleguen bien. Desde que salen de casa hasta que llegan al colegio, KidsGo! acompaña cada trayecto y mantiene conectados a quienes más importan.',
        heroImage: '/img/kidsgo-school-bus-boarding.png',
        heroVideo: 'https://www.pexels.com/video/children-boarding-school-bus-in-scenic-landscape-38750745/',
        problemImage: '/img/kidsgo-smiling-students.png',
        solutionImage: '/img/kidsgo-school-bus-boarding.png',
        howImage: '/img/kidsgo-school-bus-boarding.png',
        featuresImage: '/img/kidsgo-carpool-community.png',
        innovationImage: '/img/kidsgo-lora-smartband.png',
        smartBandImage: '/img/kidsgo-lora-smartband.png',
        smartCampusImage: '/img/kidsgo-lora-smartband.png',
        audiencesImage: '/img/kidsgo-carpool-community.png',
        securityImage: '/img/kidsgo-smiling-students.png',
        technologyImage: '/img/kidsgo-lora-smartband.png',
        impactImage: '/img/kidsgo-smiling-students.png',
        featuredVideoUrl: 'https://www.pexels.com/video/children-boarding-school-bus-in-scenic-landscape-38750745/',
        primaryCta: 'Quiero conocer KidsGo!',
        schoolCta: 'Soy un colegio',
        transportCta: 'Soy transportista',
        problemTitle: 'Sabemos que cada mañana puede ser una carrera contra el tiempo.',
        problemBody: '¿El transporte ya viene?\n¿Dónde está el bus?\n¿Ya llegó al colegio?\n¿Ya está cerca de la parada?\n¿Tenemos que llamar al conductor o avisar por WhatsApp?\n\nKidsGo! nace para hacer todo esto más sencillo: menos llamadas, menos mensajes, menos incertidumbre, más información, más organización y más tranquilidad.',
        solutionTitle: 'Todo el transporte escolar en un solo lugar.',
        solutionBody: 'KidsGo! conecta familias, estudiantes, colegios y transportistas en una misma plataforma.\n\nPara padres: consulta el recorrido de tu hijo y recibe información sin estar preguntando dónde está.\nPara colegios: visualiza y organiza el transporte escolar desde una plataforma pensada para el entorno educativo.\nPara transportistas: gestiona rutas y comunica eventos importantes de forma sencilla y segura.\nPara estudiantes: una experiencia de transporte más organizada, segura y adaptada a su vida escolar.',
        howTitle: 'Así de sencillo.',
        howSteps: '01 - El transporte inicia su recorrido: el conductor comienza la ruta y KidsGo! registra el avance.\n02 - KidsGo! calcula la proximidad: la plataforma identifica cuándo el transporte se aproxima al punto establecido.\n03 - Los padres reciben información: la familia consulta el estado desde la aplicación.\n04 - El estudiante recibe el aviso: la tecnología en desarrollo permitirá alertas mediante vibración y luz.\n05 - Todos están listos: menos esperas, menos llamadas, menos ruido y más organización.',
        featuresTitle: 'Todo lo que necesitas para un transporte escolar más conectado.',
        features: 'Seguimiento del transporte: consulta ubicación y estado de la ruta.\nAlertas para padres: recibe información cuando el transporte se aproxima o ocurre un evento importante.\nGestión de rutas: organiza recorridos de manera eficiente.\nVista para colegios: visión general del sistema de transporte y sus rutas.\nConexión con las familias: comunicación más organizada entre familias, colegios y transporte escolar.\nCarpool: coordinación de viajes compartidos entre familias de la comunidad escolar.\nSistema de puntos: incentivos para iniciativas de transporte compartido.',
        innovationTitle: 'Y esto apenas comienza.',
        innovationBody: 'KidsGo! ya resuelve necesidades de movilidad escolar y está construyendo, paso a paso, una plataforma más amplia para acompañar la experiencia escolar de los estudiantes.',
        smartBandTitle: 'Una pulsera. Muchas posibilidades.',
        smartBandBody: 'En desarrollo: KidsGo! SmartBand será una pulsera inteligente diseñada para estudiantes. Su primera misión será avisar cuando el transporte esté por llegar mediante vibración y luz.\n\nTambién se investiga tecnología LoRa para alertas locales de largo alcance y bajo consumo, sin depender necesariamente de Wi-Fi o conexión celular.',
        smartCampusTitle: 'De transporte escolar a Smart Campus.',
        smartCampusBody: 'En desarrollo: la misma pulsera que ayuda al estudiante a saber que su transporte está llegando podrá convertirse en una herramienta para su vida cotidiana dentro del colegio.\n\nPosibilidades futuras: identidad digital, registro de asistencia, control de acceso, biblioteca, cafetería, actividades y otros servicios escolares.',
        audiencesTitle: 'KidsGo! para cada comunidad escolar.',
        audiences: 'Para padres: más tranquilidad, organización, comunicación y autonomía para sus hijos.\nPara colegios: visualización de rutas, gestión de transporte, alertas, información centralizada e integración futura con Smart Campus.\nPara transportistas: rutas más organizadas, ubicación del transporte, comunicación con familias, alertas, pasajeros e historial de eventos.\nPara estudiantes: menos esperas, menos confusión, más información, más autonomía y más seguridad.',
        securityTitle: 'La tecnología tiene sentido cuando genera confianza.',
        securityBody: 'Diseñamos KidsGo! pensando en la seguridad y privacidad de los estudiantes.\n\nPrivacidad: la información debe manejarse de manera responsable.\nSeguridad: la plataforma incorpora mecanismos de protección y control de acceso.\nTransparencia: las familias deben saber qué información se recopila y para qué se utiliza.\nResponsabilidad: la tecnología apoya a familias y colegios, no reemplaza su criterio.',
        technologyTitle: 'Tecnología que trabaja detrás de escena.',
        technologyBody: 'KidsGo! combina aplicaciones móviles, servicios en la nube, geolocalización, comunicaciones inalámbricas y dispositivos inteligentes.\n\nTecnologías exploradas: GPS, geolocalización, geofencing, LoRa, NFC, BLE, IoT, cloud computing, aplicaciones móviles y sistemas de notificaciones.',
        roadmapTitle: 'Estamos construyendo KidsGo! paso a paso.',
        roadmap: 'Etapa 1 - Movilidad: disponible / MVP. Plataforma de transporte escolar.\nEtapa 2 - Alertas inteligentes: en desarrollo.\nEtapa 3 - SmartBand: en desarrollo. Pulsera inteligente con comunicación inalámbrica de bajo consumo.\nEtapa 4 - Identidad digital: en desarrollo.\nEtapa 5 - Servicios escolares: en desarrollo. Cafetería, biblioteca, asistencia y otros servicios.\nEtapa 6 - Smart Campus: visión futura.',
        impactTitle: 'Un transporte escolar mejor también significa una ciudad mejor.',
        impactBody: 'Cada vehículo escolar organizado representa una oportunidad para reducir viajes innecesarios, mejorar la coordinación y aprovechar mejor los recursos.\n\nKidsGo! busca reducir la congestión alrededor de los colegios, disminuir esperas, facilitar la comunicación, promover transporte compartido y mejorar la experiencia de las familias.',
        aboutTitle: 'Nacimos de un problema real.',
        aboutBody: 'KidsGo! nació de observar algo cotidiano: cada día miles de familias necesitan coordinar el transporte de sus hijos hacia y desde el colegio. Vimos llamadas, mensajes, esperas y procesos manuales. Entonces nos preguntamos: ¿y si pudiéramos hacer que todo esto fuera más sencillo?',
        mission: 'Hacer que cada trayecto escolar sea más seguro, conectado y sencillo.',
        vision: 'Construir la plataforma de movilidad y servicios inteligentes que conecte a las comunidades educativas.',
        valueProposition: 'Para familias: más tranquilidad.\nPara colegios: más control y organización.\nPara transportistas: más eficiencia.\nPara estudiantes: más autonomía.\nPara todos: una comunidad escolar más conectada.',
        faq: '¿Qué es KidsGo!? KidsGo! es una plataforma de tecnología educativa que conecta familias, colegios y transporte escolar.\n¿Puedo ver dónde está el transporte? Sí, la plataforma está diseñada para seguimiento de rutas y estado del transporte.\n¿La SmartBand ya está disponible? Actualmente está en fase de investigación y desarrollo.\n¿La pulsera necesita Internet? Estamos desarrollando alertas locales que puedan funcionar sin depender directamente de Wi-Fi o conexión celular.\n¿Puedo utilizar KidsGo! en mi colegio? Sí, KidsGo! está pensado para colegios, familias y proveedores de transporte escolar.',
        finalCtaTitle: 'El próximo viaje de tu hijo puede ser más inteligente.',
        finalCtaBody: 'Únete a la nueva generación de movilidad escolar.',
        footerBody: 'KidsGo! - Smart School Mobility\nEl Salvador\nCorreo: dguzman@kidsgoapp.com\nTelefono: 71966141\nSitio web: kidsgoapp.com\nLegal: Política de Privacidad, Términos y Condiciones, Política de Cookies y Protección de datos.'
    }
};

DEFAULT_SITE_CONTENT.en = {
    ...DEFAULT_SITE_CONTENT.es,
    brandConcept: 'KidsGo! represents movement, safety, connection and peace of mind. When your children are on the move, you want to know that everything is okay.',
    brandPersonality: 'Friendly\nModern\nSafe\nDynamic\nInnovative\nFamily-focused\nReliable\nOptimistic',
    tone: 'KidsGo! speaks to families in a human and clear way. Instead of explaining complex technology, it turns every feature into peace of mind, organization and simple decisions for parents, schools and transport providers.',
    heroTitle: 'School transportation, now smarter.',
    heroDescription: 'KidsGo! connects families, schools and school transportation so every trip can be safer, more organized and calmer.',
    heroMessage: 'You know where your children are. We help make sure they arrive safely. From home to school, KidsGo! supports every trip and keeps the people who matter most connected.',
    primaryCta: 'I want to learn about KidsGo!',
    schoolCta: 'I am a school',
    transportCta: 'I am a transport provider',
    problemTitle: 'We know every morning can feel like a race against time.',
    problemBody: 'Is the transportation already on its way?\nWhere is the bus?\nDid it arrive at school?\nIs it close to the stop?\nDo we need to call the driver or send another WhatsApp message?\n\nKidsGo! was created to make all of this simpler: fewer calls, fewer messages, less uncertainty, more information, more organization and more peace of mind.',
    solutionTitle: 'All school transportation in one place.',
    solutionBody: 'KidsGo! connects families, students, schools and transport providers in one platform.\n\nFor parents: check your child\'s trip and get information without asking where the bus is.\nFor schools: view and organize school transportation from a platform designed for education.\nFor transport providers: manage routes and communicate important events in a simple, safe way.\nFor students: a more organized, safe transportation experience adapted to school life.',
    howTitle: 'That simple.',
    howSteps: '01 - The route starts: the driver begins the trip and KidsGo! records the progress.\n02 - KidsGo! calculates proximity: the platform identifies when transportation is approaching the selected point.\n03 - Parents receive information: the family checks the status from the app.\n04 - The student receives the alert: technology in development will allow vibration and light alerts.\n05 - Everyone is ready: less waiting, fewer calls, less noise and more organization.',
    featuresTitle: 'Everything you need for more connected school transportation.',
    features: 'Transportation tracking: check the location and status of the route.\nParent alerts: receive information when transportation is approaching or when an important event happens.\nRoute management: organize trips efficiently.\nSchool view: get a general view of the transportation system and its routes.\nFamily connection: more organized communication between families, schools and school transportation.\nCarpool: coordinate shared rides among families in the school community.\nPoints system: incentives for shared transportation initiatives.',
    innovationTitle: 'And this is only the beginning.',
    innovationBody: 'KidsGo! already solves school mobility needs and is building, step by step, a broader platform to support the student school experience.',
    smartBandTitle: 'One smart band. Many possibilities.',
    smartBandBody: 'In development: KidsGo! SmartBand will be a smart wristband designed for students. Its first mission will be to alert them when transportation is about to arrive through vibration and light.\n\nLoRa technology is also being researched for long-range, low-power local alerts, without necessarily depending on Wi-Fi or cellular connection.',
    smartCampusTitle: 'From school transportation to Smart Campus.',
    smartCampusBody: 'In development: the same wristband that helps students know their transportation is arriving may become a tool for everyday life at school.\n\nFuture possibilities: digital identity, attendance, access control, library, cafeteria, activities and other school services.',
    audiencesTitle: 'KidsGo! for every school community.',
    audiences: 'For parents: more peace of mind, organization, communication and autonomy for their children.\nFor schools: route visibility, transportation management, alerts, centralized information and future Smart Campus integration.\nFor transport providers: more organized routes, vehicle location, family communication, alerts, passengers and event history.\nFor students: less waiting, less confusion, more information, more autonomy and more safety.',
    securityTitle: 'Technology matters when it creates trust.',
    securityBody: 'We design KidsGo! with student safety and privacy in mind.\n\nPrivacy: information must be handled responsibly.\nSafety: the platform includes protection and access control mechanisms.\nTransparency: families should know what information is collected and why it is used.\nResponsibility: technology supports families and schools, it does not replace their judgment.',
    technologyTitle: 'Technology working behind the scenes.',
    technologyBody: 'KidsGo! combines mobile apps, cloud services, geolocation, wireless communications and smart devices.\n\nTechnologies explored: GPS, geolocation, geofencing, LoRa, NFC, BLE, IoT, cloud computing, mobile apps and notification systems.',
    roadmapTitle: 'We are building KidsGo! step by step.',
    roadmap: 'Stage 1 - Mobility: available / MVP. School transportation platform.\nStage 2 - Smart alerts: in development.\nStage 3 - SmartBand: in development. Smart wristband with low-power wireless communication.\nStage 4 - Digital identity: in development.\nStage 5 - School services: in development. Cafeteria, library, attendance and other services.\nStage 6 - Smart Campus: future vision.',
    impactTitle: 'Better school transportation also means a better city.',
    impactBody: 'Every organized school vehicle is an opportunity to reduce unnecessary trips, improve coordination and use resources better.\n\nKidsGo! seeks to reduce congestion around schools, shorten waiting times, make communication easier, promote shared transportation and improve the family experience.',
    aboutTitle: 'We were born from a real problem.',
    aboutBody: 'KidsGo! was born from observing something ordinary: every day, thousands of families need to coordinate transportation for their children to and from school. We saw calls, messages, waiting and manual processes. Then we asked ourselves: what if we could make all of this simpler?',
    mission: 'Make every school trip safer, more connected and simpler.',
    vision: 'Build the mobility and smart services platform that connects educational communities.',
    valueProposition: 'For families: more peace of mind.\nFor schools: more control and organization.\nFor transport providers: more efficiency.\nFor students: more autonomy.\nFor everyone: a more connected school community.',
    faq: 'What is KidsGo!? KidsGo! is an education technology platform that connects families, schools and school transportation.\nCan I see where the transportation is? Yes, the platform is designed for route tracking and transportation status.\nIs the SmartBand available now? It is currently in research and development.\nDoes the wristband need Internet? We are developing local alerts that can work without depending directly on Wi-Fi or cellular connection.\nCan I use KidsGo! at my school? Yes, KidsGo! is designed for schools, families and school transportation providers.',
    finalCtaTitle: 'Your child\'s next trip can be smarter.',
    finalCtaBody: 'Join the new generation of school mobility.',
    footerBody: 'KidsGo! - Smart School Mobility\nEl Salvador\nEmail: dguzman@kidsgoapp.com\nPhone: 71966141\nWebsite: kidsgoapp.com\nLegal: Privacy Policy, Terms and Conditions, Cookie Policy and Data Protection.'
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

function getDefaultSiteContent(language = getPreferredLanguage()) {
    return DEFAULT_SITE_CONTENT[language] || DEFAULT_SITE_CONTENT.es;
}

function getActiveSiteContent(language = getPreferredLanguage()) {
    const settings = loadContentSettings();
    return {
        ...getDefaultSiteContent(language),
        ...(settings[language] || {})
    };
}

function splitLines(value) {
    return String(value || '')
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean);
}

function createTextBlock(value) {
    const fragment = document.createDocumentFragment();
    const blocks = String(value || '').split('\n\n').map((block) => block.trim()).filter(Boolean);

    blocks.forEach((block) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = block;
        fragment.appendChild(paragraph);
    });

    return fragment;
}

function splitHeadingLine(line) {
    const normalizedLine = String(line || '').trim();
    const colonIndex = normalizedLine.indexOf(':');
    if (colonIndex > 0 && colonIndex < 48) {
        return {
            label: normalizedLine.slice(0, colonIndex).trim(),
            text: normalizedLine.slice(colonIndex + 1).trim()
        };
    }

    const dashMatch = normalizedLine.match(/^([0-9]{2}|Etapa\s+[0-9]+)\s+-\s+(.+)$/i);
    if (dashMatch) {
        return {
            label: dashMatch[1],
            text: dashMatch[2]
        };
    }

    return { label: '', text: normalizedLine };
}

function createList(value, className = '') {
    const list = document.createElement('ul');
    if (className) {
        list.className = className;
    }

    splitLines(value).forEach((line, index) => {
        const parts = splitHeadingLine(line);
        const item = document.createElement('li');
        item.style.setProperty('--item-index', index);
        if (parts.label) {
            const label = document.createElement('strong');
            label.textContent = parts.label;
            const text = document.createElement('span');
            text.textContent = parts.text;
            item.append(label, text);
        } else {
            item.textContent = parts.text;
        }
        list.appendChild(item);
    });

    return list;
}

function isEmbeddableVideoUrl(value) {
    return /\.(mp4|webm|ogg)(\?.*)?$/i.test(String(value || '')) || /youtube\.com\/embed|player\.vimeo\.com/i.test(String(value || ''));
}

function createSectionArt({ image, title, videoUrl }) {
    const art = document.createElement('div');
    art.className = 'section-art';

    if (image) {
        const imageElement = document.createElement('img');
        imageElement.src = image;
        imageElement.alt = title || 'KidsGo';
        imageElement.loading = 'lazy';
        art.appendChild(imageElement);
    } else {
        art.setAttribute('aria-hidden', 'true');
    }

    const overlay = document.createElement('div');
    overlay.className = 'section-art__overlay';
    overlay.innerHTML = '<span></span><span></span><span></span><i></i><i></i>';
    art.appendChild(overlay);

    if (videoUrl && isEmbeddableVideoUrl(videoUrl)) {
        const video = document.createElement(videoUrl.includes('/embed/') ? 'iframe' : 'video');
        video.className = 'section-art__video';

        if (video.tagName === 'IFRAME') {
            video.src = videoUrl;
            video.title = title || 'Video KidsGo';
            video.loading = 'lazy';
            video.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            video.allowFullscreen = true;
        } else {
            video.src = videoUrl;
            video.controls = true;
            video.muted = true;
            video.playsInline = true;
        }

        art.appendChild(video);
    }

    return art;
}

function createContentSection({ id, eyebrow, title, body, list, image, videoUrl, variant = '', motif = 'route' }) {
    const section = document.createElement('section');
    section.id = id;
    section.className = `content-section ${variant} motif-${motif}`.trim();

    const heading = document.createElement('div');
    heading.className = 'section-heading';

    if (eyebrow) {
        const eyebrowElement = document.createElement('p');
        eyebrowElement.className = 'eyebrow';
        eyebrowElement.textContent = eyebrow;
        heading.appendChild(eyebrowElement);
    }

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;
    heading.appendChild(titleElement);
    const art = createSectionArt({ image, title, videoUrl });

    const shell = document.createElement('div');
    shell.className = 'section-shell';
    shell.append(heading, art);

    const bodyElement = document.createElement('div');
    bodyElement.className = 'rich-copy';

    if (body) {
        bodyElement.appendChild(createTextBlock(body));
    }

    if (list) {
        bodyElement.appendChild(createList(list, 'feature-list'));
    }

    shell.appendChild(bodyElement);
    section.appendChild(shell);
    return section;
}

function renderSiteSections(content, language = getPreferredLanguage()) {
    const container = document.getElementById('siteContentSections');
    if (!container) {
        return;
    }

    container.innerHTML = '';
    const sectionLabels = {
        es: {
            problem: 'El problema',
            solution: 'La solución',
            how: 'Cómo funciona',
            features: 'Funciones actuales',
            innovation: 'Innovación',
            inDevelopment: 'En desarrollo',
            futureVision: 'Visión futura',
            community: 'Comunidad escolar',
            security: 'Seguridad y privacidad',
            technology: 'Tecnología',
            roadmap: 'Desarrollo por etapas',
            impact: 'Impacto',
            about: 'Sobre KidsGo!',
            value: 'Propuesta de valor',
            valueTitle: 'Una comunidad escolar más conectada.',
            faq: 'Preguntas frecuentes',
            faqTitle: 'Respuestas claras para empezar.',
            mission: 'Misión',
            vision: 'Visión'
        },
        en: {
            problem: 'The problem',
            solution: 'The solution',
            how: 'How it works',
            features: 'Current features',
            innovation: 'Innovation',
            inDevelopment: 'In development',
            futureVision: 'Future vision',
            community: 'School community',
            security: 'Safety and privacy',
            technology: 'Technology',
            roadmap: 'Development stages',
            impact: 'Impact',
            about: 'About KidsGo!',
            value: 'Value proposition',
            valueTitle: 'A more connected school community.',
            faq: 'Frequently asked questions',
            faqTitle: 'Clear answers to get started.',
            mission: 'Mission',
            vision: 'Vision'
        }
    };
    const labels = sectionLabels[language] || sectionLabels.es;

    const sections = [
        { id: 'marca', eyebrow: content.brandTagline, title: content.brandName, body: `${content.brandConcept}\n\n${content.tone}`, list: content.brandPersonality, image: content.impactImage, motif: 'brand' },
        { id: 'problema', eyebrow: labels.problem, title: content.problemTitle, body: content.problemBody, image: content.problemImage, variant: 'alt-section', motif: 'pulse' },
        { id: 'solucion', eyebrow: labels.solution, title: content.solutionTitle, body: content.solutionBody, image: content.solutionImage, motif: 'hub' },
        { id: 'como-funciona', eyebrow: labels.how, title: content.howTitle, list: content.howSteps, image: content.howImage, videoUrl: content.featuredVideoUrl, variant: 'alt-section', motif: 'timeline' },
        { id: 'funciones', eyebrow: labels.features, title: content.featuresTitle, list: content.features, image: content.featuresImage, motif: 'grid' },
        { id: 'innovacion', eyebrow: labels.innovation, title: content.innovationTitle, body: content.innovationBody, image: content.innovationImage, variant: 'alt-section', motif: 'spark' },
        { id: 'smartband', eyebrow: labels.inDevelopment, title: content.smartBandTitle, body: content.smartBandBody, image: content.smartBandImage, motif: 'band' },
        { id: 'smart-campus', eyebrow: labels.futureVision, title: content.smartCampusTitle, body: content.smartCampusBody, image: content.smartCampusImage, variant: 'alt-section', motif: 'campus' },
        { id: 'audiencias', eyebrow: labels.community, title: content.audiencesTitle, list: content.audiences, image: content.audiencesImage, motif: 'people' },
        { id: 'seguridad', eyebrow: labels.security, title: content.securityTitle, body: content.securityBody, image: content.securityImage, variant: 'alt-section', motif: 'shield' },
        { id: 'tecnologia', eyebrow: labels.technology, title: content.technologyTitle, body: content.technologyBody, image: content.technologyImage, motif: 'tech' },
        { id: 'etapas', eyebrow: labels.roadmap, title: content.roadmapTitle, list: content.roadmap, variant: 'alt-section', motif: 'timeline' },
        { id: 'impacto', eyebrow: labels.impact, title: content.impactTitle, body: content.impactBody, image: content.impactImage, motif: 'impact' },
        { id: 'sobre-kidsgo', eyebrow: labels.about, title: content.aboutTitle, body: `${content.aboutBody}\n\n${labels.mission}: ${content.mission}\n\n${labels.vision}: ${content.vision}`, variant: 'alt-section', motif: 'origin' },
        { id: 'valor', eyebrow: labels.value, title: labels.valueTitle, list: content.valueProposition, motif: 'value' },
        { id: 'faq', eyebrow: labels.faq, title: labels.faqTitle, list: content.faq, variant: 'alt-section', motif: 'answers' }
    ];

    sections.forEach((section, index) => {
        container.appendChild(createContentSection({
            ...section,
            variant: `${section.variant || ''} ${index % 2 === 1 ? 'is-reversed' : ''}`.trim()
        }));
    });

    setupRevealSections();

    const finalCta = document.getElementById('finalCtaTitle');
    if (finalCta) {
        finalCta.textContent = content.finalCtaTitle;
    }

    const finalCtaBody = document.getElementById('finalCtaBody');
    if (finalCtaBody) {
        finalCtaBody.textContent = content.finalCtaBody;
    }

    const footerBody = document.getElementById('footerBody');
    if (footerBody) {
        footerBody.textContent = content.footerBody;
    }
}

function setupRevealSections() {
    const sections = document.querySelectorAll('.content-section');
    if (!sections.length) {
        return;
    }

    if (!('IntersectionObserver' in window)) {
        sections.forEach((section) => section.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.18 });

    sections.forEach((section) => observer.observe(section));
}

function setupScrollProgress() {
    const progress = document.querySelector('.scroll-progress');
    if (!progress) {
        return;
    }

    const updateProgress = () => {
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progressValue = maxScroll > 0 ? window.scrollY / maxScroll : 0;
        progress.style.transform = `scaleX(${Math.min(Math.max(progressValue, 0), 1)})`;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
}

function renderContentSettings(language = getPreferredLanguage()) {
    const activeValues = getActiveSiteContent(language);

    const heroTitleElement = document.getElementById('heroTitle');
    if (heroTitleElement && activeValues.heroTitle) {
        heroTitleElement.textContent = activeValues.heroTitle;
    }

    const heroDescriptionElement = document.getElementById('heroDescription');
    if (heroDescriptionElement && activeValues.heroDescription) {
        heroDescriptionElement.textContent = activeValues.heroDescription;
    }

    const heroEyebrowElement = document.getElementById('heroEyebrow');
    if (heroEyebrowElement && activeValues.heroEyebrow) {
        heroEyebrowElement.textContent = activeValues.heroEyebrow;
    }

    const heroMessageElement = document.getElementById('heroMessage');
    if (heroMessageElement && activeValues.heroMessage) {
        heroMessageElement.textContent = activeValues.heroMessage;
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

    const brandElements = document.querySelectorAll('[data-site-brand]');
    brandElements.forEach((element) => {
        element.textContent = activeValues.brandName;
    });

    const primaryCtaElements = document.querySelectorAll('[data-site-primary-cta]');
    primaryCtaElements.forEach((element) => {
        element.textContent = activeValues.primaryCta;
    });

    const schoolCtaElement = document.getElementById('schoolCta');
    if (schoolCtaElement) {
        schoolCtaElement.textContent = activeValues.schoolCta;
    }

    const transportCtaElement = document.getElementById('transportCta');
    if (transportCtaElement) {
        transportCtaElement.textContent = activeValues.transportCta;
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', activeValues.heroDescription);
    }

    renderSiteSections(activeValues, language);

    const contentForm = document.getElementById('contentForm');
    if (!contentForm) {
        return;
    }

    SITE_CONTENT_FIELDS.forEach((field) => {
        const input = document.getElementById(`siteContent_${field.key}`);
        if (input) {
            input.value = activeValues[field.key] || '';
        }
    });
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

    const fieldsContainer = document.getElementById('contentFields');
    if (fieldsContainer && !fieldsContainer.children.length) {
        SITE_CONTENT_FIELDS.forEach((field) => {
            const group = document.createElement('div');
            group.className = 'field-group';

            const label = document.createElement('label');
            label.setAttribute('for', `siteContent_${field.key}`);
            label.textContent = field.label;

            const input = field.type === 'textarea' ? document.createElement('textarea') : document.createElement('input');
            input.id = `siteContent_${field.key}`;
            input.name = field.key;

            if (field.type === 'textarea') {
                input.rows = 5;
            } else {
                input.type = field.type;
            }

            group.append(label, input);
            fieldsContainer.appendChild(group);
        });
    }

    renderContentSettings(getPreferredLanguage());

    contentForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const language = getPreferredLanguage();
        const settings = loadContentSettings();
        settings[language] = SITE_CONTENT_FIELDS.reduce((result, field) => {
            result[field.key] = document.getElementById(`siteContent_${field.key}`)?.value || '';
            return result;
        }, {});
        saveContentSettings(settings);
        renderContentSettings(language);
        alert(language === 'en' ? 'Content updated successfully.' : 'Contenido actualizado correctamente.');
    });

    const resetButton = document.getElementById('resetContentButton');
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            const language = getPreferredLanguage();
            const settings = loadContentSettings();
            delete settings[language];
            saveContentSettings(settings);
            renderContentSettings(language);
            alert(language === 'en' ? 'Default content restored.' : 'Contenido predeterminado restaurado.');
        });
    }
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
    setupScrollProgress();
}

if (window.location.pathname === '/parent.html' || window.location.pathname === '/driver.html') {
    setupPwa();
    setupLanguageSwitcher();
}

applyTranslations(getPreferredLanguage());

