/*
 * Complete portfolio main.js
 * - Full i18n implementation with all keys from HTML
 * - Loading screen with auto-hide
 * - Language and theme toggles
 * - Mobile sidebar and menu handling
 * - AOS animations
 * - Scroll to top
 * - Form handling
 */

// --- Translations Object (Complete) ---
const translations = {
    es: {
        loading: { message: 'Cargando portafolio...' },
        nav: {
            home: 'Inicio',
            about: 'Sobre mí',
            experience: 'Experiencia',
            projects: 'Proyectos',
            skills: 'Habilidades',
            certifications: 'Certificaciones',
            contact: 'Contacto',
            cv: 'CV',
            darkMode: 'Modo Oscuro',
            lightMode: 'Modo Claro'
        },
        hero: {
            title: 'Jairo Ruiz',
            subtitle: 'Ingeniero de Soluciones Digitales | Full-Stack, Datos, BI y Automatización',
            description: 'Integro desarrollo Full-Stack, ingeniería de datos, Power BI y automatización para construir soluciones end-to-end. Egresado de la carrera de TICs en la Universidad de las Fuerzas Armadas ESPE, enfocado en resultados medibles para negocio.',
            repos: 'Repositorios',
            contributions: 'Contribuciones',
            experience: 'Años Experiencia',
            'cta-projects': 'Ver Proyectos',
            'cta-contact': 'Contactar'
        },
        about: {
            title: 'Sobre Mí',
            description1: 'Soy ingeniero de soluciones digitales, egresado de la carrera de TICs en la Universidad de las Fuerzas Armadas ESPE. Combino desarrollo Full-Stack, datos, BI y automatización en productos listos para producción.',
            description2: 'Trabajo con Python y Power BI como parte de soluciones integrales: desde captura y procesamiento de datos, hasta visualización ejecutiva y automatización de decisiones operativas.',
            description3: 'Diseño arquitecturas end-to-end con TypeScript, JavaScript, APIs y microservicios para entregar plataformas mantenibles, seguras y de alto rendimiento.',
            'highlights-fullstack': 'Full-Stack',
            'highlights-dataAnalysis': 'Data & BI',
            'highlights-microservices': 'Automatización',
            'highlights-security': 'Arquitectura'
        },
        services: {
            title: 'Servicios Profesionales',
            description: 'Acompaño proyectos de punta a punta: desde diseño técnico y desarrollo, hasta datos, BI, automatización y operación.',
            items: {
                fullstack: {
                    title: 'Desarrollo Full-Stack End-to-End',
                    description: 'Construcción de aplicaciones web robustas con frontend, backend, APIs, autenticación y despliegue.'
                },
                data: {
                    title: 'Data & BI Operativo',
                    description: 'Modelado y procesamiento de datos, tableros Power BI y KPIs ejecutivos conectados a la operación.'
                },
                automation: {
                    title: 'Automatización e Integraciones',
                    description: 'Integración entre sistemas, flujos automáticos y procesos de web scraping para acelerar decisiones.'
                },
                optimization: {
                    title: 'Optimización y Escalado',
                    description: 'Mejora de rendimiento, SEO técnico, estabilidad y arquitectura para crecimiento sostenible.'
                }
            }
        },
        caseStudies: {
            title: 'Casos de Éxito',
            description: 'Implementaciones reales con enfoque técnico y de negocio: problema, solución e impacto.',
            labels: {
                challenge: 'Reto',
                solution: 'Solución',
                impact: 'Impacto'
            },
            items: {
                inversef: {
                    title: 'Inversef: Plataforma + Scraping',
                    challenge: 'Información de remates dispersa y difícil de consolidar para análisis rápido.',
                    solution: 'Desarrollo full-stack con búsquedas avanzadas, panel administrativo y pipelines de web scraping.',
                    impact: 'Centralización de oportunidades y mayor velocidad para evaluar y priorizar casos.'
                },
                nutrifamili: {
                    title: 'NutriFamili: Web + SEO',
                    challenge: 'Necesidad de presencia digital profesional, rápida y orientada a captación de usuarios.',
                    solution: 'Construcción de sitio responsivo, estructura de contenidos y optimización SEO técnica.',
                    impact: 'Mejor posicionamiento orgánico y experiencia clara para convertir visitas en contactos.'
                },
                facturas: {
                    title: 'Facturas: Operación Comercial',
                    challenge: 'Procesos de facturación y control comercial con alta fricción operativa.',
                    solution: 'Plataforma de gestión con backend en Django, API y generación de documentos operativos.',
                    impact: 'Mayor control del flujo comercial y trazabilidad de datos para toma de decisiones.'
                }
            }
        },
        experience: {
            title: 'Experiencia Profesional',
            description: 'Trayectoria profesional enfocada en desarrollo tecnológico, automatización y soluciones digitales de alto impacto.',
            jobs: {
                ticAnalyst: {
                    title: 'Analista de TIC (Prácticas Preprofesionales)',
                    company: 'GAD Municipal de Alausí',
                    description: 'Desarrollo de un sistema de control de asistencia biométrico con API, backend y frontend en Python (Django). Creación de una API para la gestión de trámites institucionales. Diseño y desarrollo de la página web institucional del Tren de Alausí. Administración de bases de datos en MySQL Server y PostgreSQL.'
                },
                volunteer: {
                    title: 'Voluntariado – Soporte Técnico',
                    company: 'Fundación Aliñambi',
                    description: 'Optimización de la red mediante cableado estructurado. Mantenimiento y configuración de equipos informáticos. Instalación y actualización de software institucional.'
                },
                freelancer: {
                    title: 'Desarrollador Full-Stack',
                    company: 'Proyectos Independientes',
                    description: 'Desarrollo de aplicaciones web end-to-end con TypeScript, JavaScript y Python. Implementación de sistemas CRUD, microservicios y analítica empresarial con enfoque en estabilidad, escalabilidad y valor de negocio.'
                },
                inversef: {
                    title: 'Desarrollador Full-Stack y Data Automation',
                    company: 'Inversef - Subastas Judiciales',
                    description: 'Diseño y desarrollo de plataforma web para remates judiciales: módulos de búsqueda y filtros, paneles administrativos, integración de datos en tiempo real y procesos de web scraping para consolidar oportunidades desde fuentes públicas.'
                },
                nutrifamili: {
                    title: 'Desarrollador Web Full-Stack',
                    company: 'NutriFamili - Plataforma de Nutrición',
                    description: 'Construcción integral del sitio y experiencia digital de NutriFamili, con interfaz responsive, arquitectura orientada a conversión y optimización SEO técnica para posicionamiento orgánico.'
                },
                engineering: {
                    title: 'Egresado en Tecnologías de la Información (TICs)',
                    company: 'Universidad de las Fuerzas Armadas ESPE',
                    description: 'Formación integral en ingeniería de software, sistemas de información y arquitectura tecnológica aplicada a entornos reales.'
                },
                commercial: {
                    title: 'Asistente Comercial',
                    company: 'VAMORET S.A',
                    description: 'Supervisión y control de inventarios, reduciendo errores y mejorando la trazabilidad. Coordinación logística de envíos y recepción de mercancías. Atención al cliente y gestión eficiente de incidencias comerciales. Colaboración en la mejora continua de procesos administrativos y comerciales.'
                },
                biometric: {
                    title: 'Desarrollo de Sistemas Biométricos',
                    company: 'Proyectos de Especialización',
                    description: 'Implementación de sistemas de control de asistencia con integración biométrica. Desarrollo de soluciones de seguridad y autenticación avanzada.'
                }
            }
        },
        projects: {
            title: 'Proyectos Destacados',
            description: 'Proyectos ejecutados en contextos reales de negocio: desarrollo web, automatización y analítica aplicada con impacto medible.',
            items: {
                powerbi: { title: 'Dashboard Power BI Empresarial' },
                typescript: { title: 'Sistema de Gestión Avanzado' },
                python: { title: 'Análisis de Datos con Python' },
                microservices: { title: 'Arquitectura de Microservicios' },
                java: { title: 'Servicios Empresariales Java' },
                biometric: { title: 'Sistema Biométrico Avanzado' },
                // Nuevos proyectos Web
                nutrifamili: {
                    title: 'NutriFamili - Nutrición Familiar',
                    description: 'Sitio web de nutrición familiar con SEO optimizado al 99%. Diseño moderno, responsive y enfocado en la experiencia de usuario.'
                },
                inversef: {
                    title: 'Inversef - Subastas Judiciales',
                    description: 'Plataforma profesional para gestión de remates y propiedades. Arquitectura robusta, gestión de datos en tiempo real y diseño corporativo de alto nivel.'
                },
                narizdeldiablo: {
                    title: 'Nariz del Diablo - Turismo',
                    description: 'Portal turístico inmersivo para la histórica ruta de tren en Alausí. Galería multimedia optimizada e integración de información turística.'
                }
            }
        },
        skills: {
            title: 'Habilidades Técnicas',
            description: 'Capacidades técnicas aplicadas en proyectos reales con estándares profesionales de calidad, rendimiento y escalabilidad.',
            specializationsTitle: 'Especializaciones',
            evidence: {
                title: 'Evidencia Técnica por Entregables',
                powerbi: 'Dashboards ejecutivos para KPIs comerciales y operativos con lectura accionable.',
                python: 'APIs, lógica de negocio y automatizaciones aplicadas a procesos reales.',
                typescript: 'Aplicaciones CRUD y módulos reutilizables con enfoque de mantenibilidad.',
                architecture: 'Diseño de soluciones con microservicios, contratos API e integración de sistemas.',
                automation: 'Flujos automáticos y web scraping para reducir tareas manuales y acelerar decisiones.',
                delivery: 'Participación de extremo a extremo: levantamiento, desarrollo, despliegue y mejora continua.'
            }
        },
        certifications: {
            title: 'Certificaciones y Logros',
            description: 'Formación y certificaciones que respaldan mi perfil técnico y mi capacidad de ejecución en proyectos exigentes.',
            items: {
                'engineering-title': 'Egresado en TICs',
                'engineering-issuer': 'Universidad de las Fuerzas Armadas ESPE',
                'engineering-description': 'Egresado de la carrera de Tecnologías de la Información con enfoque en desarrollo de software, arquitectura y analítica de datos.',
                'powerbi-title': 'Power BI Specialist',
                'powerbi-issuer': 'Microsoft Certified',
                'powerbi-description': 'Certificación oficial en Power BI para desarrollo de dashboards empresariales y análisis avanzado de datos.',
                'python-title': 'Python Data Analyst',
                'python-issuer': 'Python Institute',
                'python-description': 'Certificación en análisis de datos con Python, incluyendo pandas, numpy, matplotlib y machine learning básico.',
                'typescript-title': 'TypeScript Developer',
                'typescript-issuer': 'Meta/React',
                'typescript-description': 'Desarrollo profesional con TypeScript, incluyendo tipado avanzado, generics y mejores prácticas.',
                'github-title': 'GitHub Professional',
                'github-issuer': 'GitHub',
                'github-description': 'Dominio avanzado de Git, GitHub Actions, CI/CD y colaboración profesional en equipos.',
                'mongodb-title': 'Database Administrator',
                'mongodb-issuer': 'MongoDB University',
                'mongodb-description': 'Administración de bases de datos MongoDB, optimización de consultas y diseño de esquemas escalables.'
            }
        },
        contact: {
            title: 'Trabajemos Juntos',
            description: 'Si tienes una idea, una plataforma por mejorar o un reto técnico, puedo ayudarte a convertirlo en una solución digital sólida y bien ejecutada.',
            form: {
                name: 'Nombre completo',
                email: 'Correo electrónico',
                message: 'Cuéntame sobre tu proyecto',
                send: 'Enviar Mensaje'
            }
        },
        footer: {
            description: 'Ingeniero de soluciones digitales end-to-end: desarrollo Full-Stack, datos, BI y automatización para crear productos con calidad técnica y resultados de negocio.',
            quickLinks: 'Enlaces Rápidos',
            connect: 'Conectemos',
            location: 'Quito-Sangolquí, Ecuador',
            copyright: '© 2025 Jairo Ruiz. Todos los derechos reservados.',
            builtWith: 'Construido con TypeScript, CSS3 y Bootstrap 5.'
        }
    },
    en: {
        loading: { message: 'Loading portfolio...' },
        nav: {
            home: 'Home',
            about: 'About',
            experience: 'Experience',
            projects: 'Projects',
            skills: 'Skills',
            certifications: 'Certifications',
            contact: 'Contact',
            cv: 'CV',
            darkMode: 'Dark Mode',
            lightMode: 'Light Mode'
        },
        hero: {
            title: 'Jairo Ruiz',
            subtitle: 'Digital Solutions Engineer | Full-Stack, Data, BI & Automation',
            description: 'I integrate Full-Stack development, data engineering, Power BI, and automation to build end-to-end solutions. ICT graduate from the Armed Forces University ESPE, focused on measurable business outcomes.',
            repos: 'Repositories',
            contributions: 'Contributions',
            experience: 'Years Experience',
            'cta-projects': 'View Projects',
            'cta-contact': 'Contact'
        },
        about: {
            title: 'About Me',
            description1: 'I am a digital solutions engineer and ICT graduate from the Armed Forces University ESPE. I combine Full-Stack development, data, BI, and automation in production-ready products.',
            description2: 'I use Python and Power BI as part of integrated solutions, from data capture and processing to executive dashboards and automated operational decisions.',
            description3: 'I design end-to-end architectures with TypeScript, JavaScript, APIs, and microservices to deliver maintainable, secure, high-performance platforms.',
            'highlights-fullstack': 'Full-Stack',
            'highlights-dataAnalysis': 'Data & BI',
            'highlights-microservices': 'Automation',
            'highlights-security': 'Architecture'
        },
        services: {
            title: 'Professional Services',
            description: 'I support projects end-to-end: from technical design and development to data, BI, automation, and operations.',
            items: {
                fullstack: {
                    title: 'End-to-End Full-Stack Development',
                    description: 'Robust web applications with frontend, backend, APIs, authentication, and deployment.'
                },
                data: {
                    title: 'Operational Data & BI',
                    description: 'Data modeling and processing, Power BI dashboards, and executive KPIs connected to operations.'
                },
                automation: {
                    title: 'Automation & Integrations',
                    description: 'System integrations, automated workflows, and web scraping processes to accelerate decisions.'
                },
                optimization: {
                    title: 'Optimization & Scaling',
                    description: 'Performance, technical SEO, stability, and architecture improvements for sustainable growth.'
                }
            }
        },
        caseStudies: {
            title: 'Case Studies',
            description: 'Real implementations with technical and business focus: challenge, solution, and impact.',
            labels: {
                challenge: 'Challenge',
                solution: 'Solution',
                impact: 'Impact'
            },
            items: {
                inversef: {
                    title: 'Inversef: Platform + Scraping',
                    challenge: 'Scattered auctions data that was difficult to consolidate for quick analysis.',
                    solution: 'Full-stack development with advanced search, admin dashboard, and web scraping pipelines.',
                    impact: 'Centralized opportunities and faster evaluation and prioritization workflows.'
                },
                nutrifamili: {
                    title: 'NutriFamili: Web + SEO',
                    challenge: 'Need for a professional, fast digital presence focused on user acquisition.',
                    solution: 'Responsive website, clear content structure, and technical SEO optimization.',
                    impact: 'Stronger organic positioning and clearer user journeys to convert visits into leads.'
                },
                facturas: {
                    title: 'Invoices: Commercial Operations',
                    challenge: 'High-friction billing and commercial control processes.',
                    solution: 'Management platform with Django backend, API, and operational document generation.',
                    impact: 'Better commercial flow control and data traceability for decision-making.'
                }
            }
        },
        experience: {
            title: 'Professional Experience',
            description: 'Professional trajectory focused on technological development, automation, and high-impact digital solutions.',
            jobs: {
                ticAnalyst: {
                    title: 'ICT Analyst (Pre-Professional Internship)',
                    company: 'Municipal GAD of Alausí',
                    description: 'Development of a biometric attendance control system with API, backend and frontend in Python (Django). Creation of an API for institutional procedure management. Design and development of the institutional website for the Alausí Train.'
                },
                volunteer: {
                    title: 'Volunteering – Technical Support',
                    company: 'Aliñambi Foundation',
                    description: 'Network optimization through structured cabling. Maintenance and configuration of computer equipment. Installation and updating of institutional software.'
                },
                freelancer: {
                    title: 'Full-Stack Developer',
                    company: 'Independent Projects',
                    description: 'End-to-end web application development using TypeScript, JavaScript, and Python. Delivery of CRUD systems, microservices, and business analytics with a focus on stability, scalability, and business value.'
                },
                inversef: {
                    title: 'Full-Stack Developer and Data Automation',
                    company: 'Inversef - Judicial Auctions',
                    description: 'Design and development of a judicial auctions platform: search and filtering modules, admin dashboards, real-time data integrations, and web scraping workflows to consolidate opportunities from public sources.'
                },
                nutrifamili: {
                    title: 'Full-Stack Web Developer',
                    company: 'NutriFamili - Nutrition Platform',
                    description: 'End-to-end development of the NutriFamili digital experience, with responsive interface, conversion-oriented architecture, and technical SEO optimization for organic positioning.'
                },
                engineering: {
                    title: 'ICT Graduate',
                    company: 'Armed Forces University ESPE',
                    description: 'Comprehensive training in software engineering, information systems, and real-world technology architecture.'
                },
                commercial: {
                    title: 'Commercial Assistant',
                    company: 'VAMORET S.A',
                    description: 'Supervision and control of inventories. Logistical coordination of shipments. Customer service and incident management.'
                },
                biometric: {
                    title: 'Biometric Systems Development',
                    company: 'Specialization Projects',
                    description: 'Implementation of attendance control systems with biometric integration. Development of security and advanced authentication solutions.'
                }
            }
        },
        projects: {
            title: 'Featured Projects',
            description: 'Projects delivered in real business contexts: web development, automation, and applied analytics with measurable impact.',
            items: {
                powerbi: { title: 'Corporate Power BI Dashboard' },
                typescript: { title: 'Advanced Management System' },
                python: { title: 'Data Analysis with Python' },
                microservices: { title: 'Microservices Architecture' },
                java: { title: 'Enterprise Java Services' },
                biometric: { title: 'Advanced Biometric System' },
                // New Web Projects
                nutrifamili: {
                    title: 'NutriFamili - Family Nutrition',
                    description: 'Family nutrition website with 99% optimized SEO. Modern, responsive design focused on user experience.'
                },
                inversef: {
                    title: 'Inversef - Judicial Auctions',
                    description: 'Professional platform for auction and property management. Robust architecture, real-time data management, and high-level corporate design.'
                },
                narizdeldiablo: {
                    title: 'Nariz del Diablo - Tourism',
                    description: 'Immersive tourism portal for the historic train route in Alausí. Optimized multimedia gallery and tourist information integration.'
                }
            }
        },
        skills: {
            title: 'Technical Skills',
            description: 'Technical capabilities proven through real projects with professional standards of quality, performance, and scalability.',
            specializationsTitle: 'Specializations',
            evidence: {
                title: 'Technical Evidence by Deliverables',
                powerbi: 'Executive dashboards for commercial and operational KPIs with actionable insights.',
                python: 'APIs, business logic, and automation applied to real workflows.',
                typescript: 'CRUD applications and reusable modules with maintainability-focused architecture.',
                architecture: 'Solution design with microservices, API contracts, and systems integration.',
                automation: 'Automated flows and web scraping to reduce manual effort and speed up decisions.',
                delivery: 'End-to-end ownership: discovery, development, deployment, and continuous improvement.'
            }
        },
        certifications: {
            title: 'Certifications and Achievements',
            description: 'Education and certifications that support my technical profile and execution capacity for demanding projects.',
            items: {
                'engineering-title': 'ICT Graduate',
                'engineering-issuer': 'Armed Forces University ESPE',
                'engineering-description': 'Graduate in Information and Communication Technologies focused on software development, architecture, and data analytics.',
                'powerbi-title': 'Power BI Specialist',
                'powerbi-issuer': 'Microsoft Certified',
                'powerbi-description': 'Official certification in Power BI for development of business dashboards and advanced data analysis.',
                'python-title': 'Python Data Analyst',
                'python-issuer': 'Python Institute',
                'python-description': 'Certification in data analysis with Python, including pandas, numpy, matplotlib and basic machine learning.',
                'typescript-title': 'TypeScript Developer',
                'typescript-issuer': 'Meta/React',
                'typescript-description': 'Professional development with TypeScript, including advanced typing, generics and best practices.',
                'github-title': 'GitHub Professional',
                'github-issuer': 'GitHub',
                'github-description': 'Advanced mastery of Git, GitHub Actions, CI/CD and professional collaboration in teams.',
                'mongodb-title': 'Database Administrator',
                'mongodb-issuer': 'MongoDB University',
                'mongodb-description': 'MongoDB database administration, query optimization and scalable schema design.'
            }
        },
        contact: {
            title: "Let's Work Together",
            description: 'If you have a new idea, a platform to improve, or a technical challenge, I can help turn it into a robust and well-executed digital solution.',
            form: {
                name: 'Full name',
                email: 'Email address',
                message: 'Tell me about your project',
                send: 'Send Message'
            }
        },
        footer: {
            description: 'End-to-end digital solutions engineer: Full-Stack development, data, BI, and automation focused on technical quality and business impact.',
            quickLinks: 'Quick Links',
            connect: 'Let\'s Connect',
            location: 'Quito-Sangolquí, Ecuador',
            copyright: '© 2025 Jairo Ruiz. All rights reserved.',
            builtWith: 'Built with HTML5, CSS3 and Bootstrap 5.'
        }
    }
};

// --- State ---
const PortfolioState = {
    isLoaded: false,
    darkMode: localStorage.getItem('theme') === 'dark' || false,
    currentLanguage: localStorage.getItem('language') || 'es'
};

const projectModalDetails = {
    powerbi: {
        es: {
            summary: 'Proyecto empresarial orientado a indicadores de ventas, rendimiento y control operativo.',
            bullets: ['KPIs visuales y alertas rápidas para toma de decisiones.', 'Integración de fuentes de datos para reportes consolidados.', 'Diseño ejecutivo para lectura rápida por áreas de negocio.'],
            repo: 'https://github.com/Jairo977/facturacion',
            demoLabel: 'Ver repositorio relacionado'
        },
        en: {
            summary: 'Business-focused project for sales indicators, performance tracking, and operational control.',
            bullets: ['Visual KPIs and quick alerts for decision-making.', 'Integrated data sources for consolidated reporting.', 'Executive-focused design for fast cross-team insights.'],
            repo: 'https://github.com/Jairo977/facturacion',
            demoLabel: 'View related repository'
        }
    },
    typescript: {
        es: {
            summary: 'Aplicación CRUD construida con TypeScript y enfoque en componentes reutilizables.',
            bullets: ['Gestión de tareas con operaciones Create, Read, Update y Delete.', 'Arquitectura frontend modular y mantenible.', 'Base ideal para escalar hacia paneles multiusuario.'],
            repo: 'https://github.com/Jairo977/gestion-de-tareas',
            demoLabel: 'Ver repositorio'
        },
        en: {
            summary: 'CRUD application built with TypeScript and reusable component patterns.',
            bullets: ['Task management with full Create, Read, Update, and Delete flows.', 'Modular and maintainable frontend architecture.', 'Strong foundation to scale into multi-user dashboards.'],
            repo: 'https://github.com/Jairo977/gestion-de-tareas',
            demoLabel: 'View repository'
        }
    },
    python: {
        es: {
            summary: 'Implementaciones Python aplicadas a backend, automatización y análisis de datos.',
            bullets: ['Servicios backend y lógica de negocio con Python.', 'Procesamiento de datos para reportes y validaciones.', 'Arquitectura robusta lista para escalamiento en producción.'],
            repo: 'https://github.com/Jairo977/ExamenFInal',
            demoLabel: 'Ver repositorio'
        },
        en: {
            summary: 'Python implementations focused on backend workflows, automation, and data analysis.',
            bullets: ['Backend services and business logic using Python.', 'Data processing for reporting and validation flows.', 'Robust architecture ready for production scaling.'],
            repo: 'https://github.com/Jairo977/ExamenFInal',
            demoLabel: 'View repository'
        }
    },
    microservices: {
        es: {
            summary: 'Arquitectura distribuida con múltiples servicios desacoplados y enfoque de escalabilidad.',
            bullets: ['API Gateway, descubrimiento de servicios y componentes por dominio.', 'Base para despliegues con contenedores y orquestación.', 'Pensado para separar responsabilidades por microservicio.'],
            repo: 'https://github.com/Jairo977/Microservicio-Gestion-Publicaiones',
            demoLabel: 'Ver repositorio'
        },
        en: {
            summary: 'Distributed architecture with decoupled services and scalability-first design.',
            bullets: ['API Gateway, service discovery, and domain-based components.', 'Container-ready foundations for orchestrated deployments.', 'Built to keep responsibilities isolated per microservice.'],
            repo: 'https://github.com/Jairo977/Microservicio-Gestion-Publicaiones',
            demoLabel: 'View repository'
        }
    },
    java: {
        es: {
            summary: 'Servicios Java orientados a integración empresarial y contratos robustos.',
            bullets: ['Implementación de servicios SOAP para interoperabilidad.', 'Estructura clara para validaciones y trazabilidad.', 'Preparado para escenarios corporativos tradicionales.'],
            repo: 'https://github.com/Jairo977/EnvioExpressSOAP',
            demoLabel: 'Ver repositorio'
        },
        en: {
            summary: 'Java services focused on enterprise integration and robust service contracts.',
            bullets: ['SOAP service implementation for interoperability.', 'Clear structure for validation and traceability.', 'Prepared for traditional enterprise environments.'],
            repo: 'https://github.com/Jairo977/EnvioExpressSOAP',
            demoLabel: 'View repository'
        }
    },
    biometric: {
        es: {
            summary: 'Sistema de control de asistencia con enfoque en seguridad e identificación.',
            bullets: ['Registro y control de eventos de asistencia.', 'Diseño orientado a entornos institucionales.', 'Integración de frontend y lógica de verificación.'],
            repo: 'https://github.com/Jairo977/Control-asistencia-Biometrico',
            demoLabel: 'Ver repositorio'
        },
        en: {
            summary: 'Attendance control system focused on security and identity verification.',
            bullets: ['Attendance event tracking and registration flow.', 'Built for institutional and administrative contexts.', 'Integrated frontend and verification logic.'],
            repo: 'https://github.com/Jairo977/Control-asistencia-Biometrico',
            demoLabel: 'View repository'
        }
    }
};

// --- Translation Helpers ---
function getNestedTranslation(obj, keyPath) {
    if (!keyPath) return undefined;
    const keys = keyPath.split(/[.:-]/).filter(Boolean);
    let current = obj;
    for (const k of keys) {
        if (current && typeof current === 'object' && k in current) {
            current = current[k];
        } else {
            return undefined;
        }
    }
    return current;
}

// --- Performance Helpers ---
function debounce(func, wait = 10) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

function applyTranslations(lang) {
    if (!translations[lang]) return;
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.getAttribute('data-translate');
        const normKey = key.replace(/-/g, '.');
        let val = getNestedTranslation(translations[lang], normKey);
        // fallback: support keys where the final token uses hyphens (e.g., 'ticAnalyst-title')
        if (typeof val !== 'string') {
            const altKey = normKey.replace(/\.(?=[^.]+$)/, '-');
            val = getNestedTranslation(translations[lang], altKey);
        }
        if (typeof val === 'string') el.textContent = val;
    });
}

// --- Loading Screen (Fixed) ---
function initLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    if (!loadingScreen) return;

    // Hide loading screen immediately
    loadingScreen.style.display = 'none';
    loadingScreen.classList.add('hidden');
    PortfolioState.isLoaded = true;
    console.log('Loading screen hidden');
}

// --- Language Toggle ---
function changeLanguage(lang, save = true) {
    if (!translations[lang]) return;
    PortfolioState.currentLanguage = lang;
    if (save) localStorage.setItem('language', lang);

    applyTranslations(lang);
    updateThemeIcon(); // refresh theme button text to match current language
    document.documentElement.lang = lang;

    // Update language indicator
    const langBtn = document.getElementById('language-toggle');
    if (langBtn) {
        const span = langBtn.querySelector('span#current-lang') || langBtn.querySelector('span');
        if (span) span.textContent = lang.toUpperCase();
    }
    const mobileLangBtn = document.getElementById('mobile-language-toggle');
    if (mobileLangBtn) {
        const span = mobileLangBtn.querySelector('span#mobile-current-lang') || mobileLangBtn.querySelector('span');
        if (span) span.textContent = lang.toUpperCase();
    }
}

function toggleLanguage() {
    const next = PortfolioState.currentLanguage === 'es' ? 'en' : 'es';
    changeLanguage(next);
}

function applyTheme(isDark, save = true) {
    PortfolioState.darkMode = isDark;
    document.body.classList.toggle('dark-mode', PortfolioState.darkMode);
    document.documentElement.setAttribute('data-theme', PortfolioState.darkMode ? 'dark' : 'light');
    if (save) localStorage.setItem('theme', PortfolioState.darkMode ? 'dark' : 'light');
    updateThemeIcon();
}

// --- Theme Toggle ---
function initThemeToggle() {
    const saved = localStorage.getItem('theme');
    applyTheme(saved === 'dark', false);

    document.addEventListener('click', (e) => {
        if (e.target.matches('#theme-toggle') || e.target.closest('#theme-toggle')) {
            applyTheme(!PortfolioState.darkMode);
            return;
        }
        if (e.target.matches('#mobileThemeToggle') || e.target.closest('#mobileThemeToggle')) {
            applyTheme(!PortfolioState.darkMode);
        }
    });
}

function updateThemeIcon() {
    const themeBtns = document.querySelectorAll('#theme-toggle, #mobileThemeToggle');
    const label = PortfolioState.darkMode
        ? (translations[PortfolioState.currentLanguage]?.nav?.lightMode || 'Light mode')
        : (translations[PortfolioState.currentLanguage]?.nav?.darkMode || 'Dark mode');

    themeBtns.forEach(btn => {
        // Limpiamos el botón (eliminamos el SVG anterior)
        btn.innerHTML = '';

        // En modo oscuro mostramos "sun" para volver a claro; en modo claro mostramos "moon".
        const newIconName = PortfolioState.darkMode ? 'sun' : 'moon';
        const iconElement = document.createElement('i');
        iconElement.setAttribute('data-lucide', newIconName);
        iconElement.setAttribute('aria-hidden', 'true');

        // Lo agregamos al botón
        btn.appendChild(iconElement);
        btn.setAttribute('aria-label', label);
        btn.setAttribute('title', label);
        btn.setAttribute('aria-pressed', PortfolioState.darkMode ? 'true' : 'false');
    });

    // After changing attributes, tell Lucide to re-render the icons.
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
        try {
            lucide.createIcons();
        } catch (e) {
            console.error('Failed to re-render Lucide icons.', e);
        }
    }
}

// --- Mobile Menu ---
function initMobileMenu() {
    // Bootstrap handles the offcanvas functionality automatically
    // No additional initialization needed
}

function initMobileIconNav() {
    const nav = document.getElementById('mobileIconNav');
    if (!nav) return;

    const sectionItems = Array.from(nav.querySelectorAll('.mobile-icon-nav__item[data-section]'));
    if (!sectionItems.length) return;

    const trackedSections = sectionItems
        .map(item => ({ item, section: document.getElementById(item.dataset.section) }))
        .filter(entry => entry.section);

    if (!trackedSections.length) return;

    const setActive = (sectionId) => {
        sectionItems.forEach(item => {
            item.classList.toggle('active', item.dataset.section === sectionId);
        });
    };

    const observer = new IntersectionObserver((entries) => {
        const visible = entries
            .filter(entry => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length) {
            setActive(visible[0].target.id);
        }
    }, {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-42% 0px -42% 0px'
    });

    trackedSections.forEach(entry => observer.observe(entry.section));

    nav.querySelectorAll('.mobile-icon-nav__item').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (!href || !href.startsWith('#')) return;

            e.preventDefault();
            const target = document.querySelector(href);
            if (!target) return;

            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            if (link.dataset.section) setActive(link.dataset.section);
        });
    });

    setActive('hero');
}

// --- Scroll to Top ---
function initScrollToTop() {
    const btn = document.getElementById('scroll-to-top');
    if (!btn) return;

    window.addEventListener('scroll', debounce(() => {
        if (window.scrollY > 300) {
            btn.classList.add('show');
        } else {
            btn.classList.remove('show');
        }
    }, 20));

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --- AOS Animations (Disabled) ---

// --- Form Handling ---
function initFormHandling() {
    const form = document.getElementById('contactForm');
    const whatsappBtn = document.getElementById('whatsappBtn');

    if (!form) return;

    // 1. Manejo del envío por Correo (EmailJS + Brevo)
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Mostrar estado de carga
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm me-2"></span>Enviando...';

        // CONFIGURACIÓN DE EMAILJS

        const PUBLIC_KEY = 'MPgSkzcLPk4Sv8Az5';
        const SERVICE_ID = 'service_uii7z4a';
        const TEMPLATE_ID = 'template_wydqtb8';

        try {
            // Inicializar (si no se ha hecho)
            if (typeof emailjs !== 'undefined') {
                emailjs.init(PUBLIC_KEY);

                // Enviar formulario usando los IDs configurados
                await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form);

                alert('¡Mensaje enviado correctamente! Gracias por contactarme.');
                form.reset();
            } else {
                throw new Error('EmailJS no cargó correctamente');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al enviar el correo (Verifica tus IDs en main.js). Por favor intenta por WhatsApp.');
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
        }
    });

    // 2. Manejo del botón de WhatsApp
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', () => {
            const name = document.getElementById('name')?.value || '';
            const email = document.getElementById('email')?.value || '';
            const subject = document.getElementById('subject')?.value || 'Contacto desde Portafolio';
            const message = document.getElementById('message')?.value || '';

            if (!name && !message) {
                alert('Por favor completa al menos tu nombre y el mensaje antes de enviar por WhatsApp.');
                return;
            }

            // Formato del mensaje para WhatsApp
            const phoneNumber = "593960047635";
            const text = `*Hola Jairo, vengo de tu portafolio.* 🚀\n\n*Nombre:* ${name}\n*Email:* ${email}\n*Asunto:* ${subject}\n*Mensaje:* ${message}`;

            // Crear la URL y abrirla
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
            window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
        });
    }
}
/*
    // Código anterior reemplazado:
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name')?.value || '';
        const email = document.getElementById('email')?.value || '';
        ...
    */

// --- Stat Counter Animation ---
function initStatCounters() {
    const statNumbers = document.querySelectorAll('.counter[data-target]');

    // Set values immediately without animation for better performance
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        stat.textContent = target;
    });
}

function hideModalIfOpen(modalId) {
    const el = document.getElementById(modalId);
    if (!el || !el.classList.contains('show')) return;
    const instance = bootstrap.Modal.getInstance(el) || new bootstrap.Modal(el);
    instance.hide();
}

// --- Project Modal ---
function openProjectModal(projectKey) {
    hideModalIfOpen('sitePreviewModal');

    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    const lang = PortfolioState.currentLanguage === 'en' ? 'en' : 'es';

    if (title) {
        const projectTitle = getNestedTranslation(translations[PortfolioState.currentLanguage], `projects.items.${projectKey}.title`);
        title.textContent = projectTitle || 'Proyecto';
    }

    if (body) {
        const details = projectModalDetails[projectKey]?.[lang];
        if (details) {
            const bullets = details.bullets.map(item => `<li>${item}</li>`).join('');
            body.innerHTML = `
                <p class="mb-3">${details.summary}</p>
                <ul class="mb-4">${bullets}</ul>
                <a href="${details.repo}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                    <i class="bi bi-github me-2"></i>${details.demoLabel}
                </a>
            `;
        } else {
            body.innerHTML = `<p>${lang === 'es' ? 'Detalles del proyecto disponibles pronto.' : 'Project details coming soon.'}</p>`;
        }
    }

    modal.show();
}

// --- Site Preview (iframe with fallback) ---
function openSitePreview(url, title) {
    hideModalIfOpen('projectModal');

    const modalEl = document.getElementById('sitePreviewModal');
    const iframe = document.getElementById('sitePreviewIframe');
    const fallback = document.getElementById('sitePreviewFallback');
    const fallbackLink = document.getElementById('sitePreviewFallbackLink');
    const modalTitle = document.getElementById('sitePreviewTitle');

    if (!modalEl || !iframe) return;

    modalTitle.textContent = title || url;
    fallback.classList.add('d-none');
    iframe.classList.remove('d-none');
    iframe.src = url;
    fallbackLink.href = url;

    const modal = new bootstrap.Modal(modalEl);
    modal.show();

    // If site blocks framing, show fallback after timeout
    const t = setTimeout(() => {
        try {
            // access contentDocument will throw if cross-origin blocked
            const doc = iframe.contentDocument || iframe.contentWindow.document;
            // if here, iframe loaded, do nothing
        } catch (err) {
            iframe.classList.add('d-none');
            fallback.classList.remove('d-none');
        }
    }, 1600);

    // clear src when modal is hidden
    modalEl.addEventListener('hidden.bs.modal', () => {
        iframe.src = '';
        fallback.classList.add('d-none');
        iframe.classList.remove('d-none');
        clearTimeout(t);
    }, { once: true });
}

// expose to global for onclick
window.openSitePreview = openSitePreview;

// --- Initialize All ---
function initAll() {
    applyTranslations(PortfolioState.currentLanguage);
    updateThemeIcon(); // ensure theme button text matches language on init

    // Inicializar texto del idioma (ES/EN)
    const langText = PortfolioState.currentLanguage.toUpperCase();
    document.querySelectorAll('#language-toggle span, #mobile-language-toggle span').forEach(el => el.textContent = langText);

    initLoadingScreen();
    initThemeToggle();
    initMobileMenu();
    initMobileIconNav();
    initScrollToTop();
    initFormHandling();
    initStatCounters();
    initSkillBars();
    initScrollReveal();
    initAnimatedCounters();

    // Language toggle listeners
    const langToggle = document.getElementById('language-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', (e) => { e.preventDefault(); toggleLanguage(); });
    }
    const mobileLangToggle = document.getElementById('mobile-language-toggle');
    if (mobileLangToggle) mobileLangToggle.addEventListener('click', (e) => { e.preventDefault(); toggleLanguage(); });

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', debounce(() => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }, 10));
    }
}

// --- Skill Bars Animation ---
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar-container .bg-secondary');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const width = bar.style.width;
                bar.style.width = '0%';
                setTimeout(() => {
                    bar.style.transition = 'width 1s ease';
                    bar.style.width = width;
                }, 100);
                observer.unobserve(bar);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => observer.observe(bar));
}

// --- Scroll Reveal Animation ---
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Don't unobserve to allow re-animation on scroll back
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
}

// --- Enhanced Animated Counter ---
function initAnimatedCounters() {
    const counters = document.querySelectorAll('.counter[data-target]');

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                const duration = 2000; // 2 seconds
                const step = target / (duration / 16); // 60fps
                let current = 0;

                const updateCounter = () => {
                    current += step;
                    if (current < target) {
                        counter.textContent = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };

                updateCounter();
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));
}

// Make functions globally available for onclick handlers
window.toggleLanguage = toggleLanguage;
window.openProjectModal = openProjectModal;

// --- Start Script Initialization ---
console.log('Script loaded, ready to initialize');

function startApp() {
    console.log('Starting app initialization...');

    // Hide loading screen immediately
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        console.log('Hiding loading screen');
        loadingScreen.style.display = 'none';
        loadingScreen.classList.add('hidden');
    }

    try {
        initAll();
        console.log('App initialization complete');
    } catch (error) {
        console.error('Error during app initialization:', error);
        // Still hide loading screen even if there's an error
        if (loadingScreen) {
            loadingScreen.style.display = 'none';
            loadingScreen.classList.add('hidden');
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startApp);
} else {
    startApp();
}
