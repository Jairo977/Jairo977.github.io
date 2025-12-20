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
            title: 'Jairo Wladimir Ruiz Saenz',
            subtitle: 'Desarrollador Full-Stack | Análisis de Datos',
            description: 'Especializado en TypeScript/JavaScript, Python, Power BI y microservicios. Estudiante de Ingeniería en TI en ESPE con experiencia avanzada en desarrollo y análisis de datos empresariales.',
            repos: 'Repositorios',
            contributions: 'Contribuciones',
            experience: 'Años Experiencia',
            'cta-projects': 'Ver Proyectos',
            'cta-contact': 'Contactar'
        },
        about: {
            title: 'Sobre Mí',
            description1: 'Soy un desarrollador Full-Stack con especialización en análisis de datos, egresado de Ingeniería en Tecnologías de la Información en la Universidad de las Fuerzas Armadas ESPE.',
            description2: 'Mi pasión por el desarrollo tecnológico se combina con una sólida experiencia en análisis de datos y visualización. Conocimiento avanzado en Python (98%) y Power BI (98%), desarrollo aplicaciones escalables que transforman datos en insights accionables.',
            description3: 'Mi enfoque combina fundamentos académicos sólidos con experiencia práctica en tecnologías modernas. Especializado en TypeScript (90%), JavaScript (85%), y arquitecturas de microservicios, siempre buscando soluciones eficientes y escalables.',
            'highlights-fullstack': 'Full-Stack',
            'highlights-dataAnalysis': 'Data Analysis',
            'highlights-microservices': 'Microservices',
            'highlights-security': 'Security'
        },
        experience: {
            title: 'Experiencia Profesional',
            description: 'Mi trayectoria profesional y académica en el desarrollo tecnológico.',
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
                    description: 'Desarrollo de aplicaciones web completas usando TypeScript, JavaScript y Python. Implementación de sistemas CRUD, microservicios y análisis de datos empresariales.'
                },
                engineering: {
                    title: 'Ingeniería en Tecnologías de la Información',
                    company: 'Universidad de las Fuerzas Armadas ESPE',
                    description: 'Formación académica especializada en desarrollo de software, sistemas de información y tecnologías emergentes.'
                },
                commercial: {
                    title: 'Asistente Comercial',
                    company: 'VAMORET S.A',
                    description: 'Supervisión y control de inventarios, reduciendo errores y mejorando la trazabilidad. Coordinación logística de envíos y recepción de mercancías. Atención al cliente y gestión eficiente de incidencias comerciales. Colaboración en la mejora continua de procesos administrativos y comerciales.'
                },
                biometric: {
                    title: 'Desarrollo de Sistemas Biométricos',
                    company: 'Proyectos Académicos',
                    description: 'Implementación de sistemas de control de asistencia con integración biométrica. Desarrollo de soluciones de seguridad y autenticación avanzada.'
                }
            }
        }, 
        projects: {
            title: 'Proyectos Destacados',
            description: 'Soluciones tecnológicas innovadoras que demuestran expertise en desarrollo y análisis de datos.',
            items: {
                powerbi: { title: 'Dashboard Power BI Empresarial' },
                typescript: { title: 'Sistema de Gestión Avanzado' },
                python: { title: 'Análisis de Datos con Python' },
                microservices: { title: 'Arquitectura de Microservicios' },
                java: { title: 'Servicios Empresariales Java' },
                biometric: { title: 'Sistema Biométrico Avanzado' }
            }
        },
        skills: {
            title: 'Habilidades Técnicas',
            description: 'Expertise técnico respaldado por experiencia práctica y proyectos reales.'
        },
        certifications: {
            title: 'Certificaciones y Logros',
            description: 'Reconocimientos y certificaciones que validan mi expertise técnico.',
            items: {
                'engineering-title': 'Ingeniería en TI',
                'engineering-issuer': 'Universidad de las Fuerzas Armadas ESPE',
                'engineering-description': 'Título profesional en Ingeniería en Tecnologías de la Información con especialización en desarrollo de software y análisis de datos.',
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
            description: '¿Tienes un proyecto interesante? Estoy disponible para colaborar en soluciones tecnológicas innovadoras.',
            form: {
                name: 'Nombre completo',
                email: 'Correo electrónico',
                message: 'Cuéntame sobre tu proyecto',
                send: 'Enviar Mensaje'
            }
        },
        footer: {
            description: 'Desarrollador Full-Stack especializado en análisis de datos y tecnologías modernas.',
            quickLinks: 'Enlaces Rápidos',
            connect: 'Conectemos',
            location: 'Quito-Sangolquí, Ecuador',
            copyright: '© 2025 Jairo Wladimir Ruiz Saenz. Todos los derechos reservados.',
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
            title: 'Jairo Wladimir Ruiz Saenz',
            subtitle: 'Full-Stack Developer | Data Analysis',
            description: 'Specialized in TypeScript/JavaScript, Python, Power BI and microservices. IT Engineering student at ESPE with advanced experience in development and business data analysis.',
            repos: 'Repositories',
            contributions: 'Contributions',
            experience: 'Years Experience',
            'cta-projects': 'View Projects',
            'cta-contact': 'Contact'
        },
        about: {
            title: 'About Me',
            description1: 'I am a Full-Stack developer with specialization in data analysis, graduated from Engineering in Information Technologies from the Armed Forces University ESPE.',
            description2: 'My passion for technological development is combined with solid experience in data analysis and visualization. Advanced knowledge in Python (98%) and Power BI (98%), developing scalable applications that transform data into actionable insights.',
            description3: 'My approach combines solid academic foundations with practical experience in modern technologies. Specialized in TypeScript (90%), JavaScript (85%), and microservice architectures, always seeking efficient and scalable solutions.',
            'highlights-fullstack': 'Full-Stack',
            'highlights-dataAnalysis': 'Data Analysis',
            'highlights-microservices': 'Microservices',
            'highlights-security': 'Security'
        },
        experience: {
            title: 'Professional Experience',
            description: 'My professional and academic trajectory in technological development.',
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
                    description: 'Development of complete web applications using TypeScript, JavaScript and Python. Implementation of CRUD systems, microservices and business data analysis.'
                },
                engineering: {
                    title: 'Engineering in Information Technologies',
                    company: 'Armed Forces University ESPE',
                    description: 'Specialized academic training in software development, information systems and emerging technologies.'
                },
                commercial: {
                    title: 'Commercial Assistant',
                    company: 'VAMORET S.A',
                    description: 'Supervision and control of inventories. Logistical coordination of shipments. Customer service and incident management.'
                },
                biometric: {
                    title: 'Biometric Systems Development',
                    company: 'Academic Projects',
                    description: 'Implementation of attendance control systems with biometric integration. Development of security and advanced authentication solutions.'
                }
            }
        }, 
        projects: {
            title: 'Featured Projects',
            description: 'Innovative technological solutions that demonstrate expertise in development and data analysis.',
            items: {
                powerbi: { title: 'Corporate Power BI Dashboard' },
                typescript: { title: 'Advanced Management System' },
                python: { title: 'Data Analysis with Python' },
                microservices: { title: 'Microservices Architecture' },
                java: { title: 'Enterprise Java Services' },
                biometric: { title: 'Advanced Biometric System' }
            }
        },
        skills: {
            title: 'Technical Skills',
            description: 'Technical expertise backed by practical experience and real projects.'
        },
        certifications: {
            title: 'Certifications and Achievements',
            description: 'Recognition and certifications that validate my technical expertise.',
            items: {
                'engineering-title': 'Engineering in IT',
                'engineering-issuer': 'Armed Forces University ESPE',
                'engineering-description': 'Professional degree in Engineering in Information Technologies with specialization in software development and data analysis.',
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
            description: 'Do you have an interesting project? I am available to collaborate on innovative technological solutions.',
            form: {
                name: 'Full name',
                email: 'Email address',
                message: 'Tell me about your project',
                send: 'Send Message'
            }
        },
        footer: {
            description: 'Full-Stack developer specialized in data analysis and modern technologies.',
            quickLinks: 'Quick Links',
            connect: 'Let\'s Connect',
            location: 'Quito-Sangolquí, Ecuador',
            copyright: '© 2025 Jairo Wladimir Ruiz Saenz. All rights reserved.',
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
    return function(...args) {
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

// --- Theme Toggle ---
function initThemeToggle() {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        document.body.classList.add('dark-mode');
        PortfolioState.darkMode = true;
        updateThemeIcon();
    }

    document.addEventListener('click', (e) => {
        if (e.target.matches('#theme-toggle') || e.target.closest('#theme-toggle')) {
            PortfolioState.darkMode = !PortfolioState.darkMode;
            document.body.classList.toggle('dark-mode', PortfolioState.darkMode);
            localStorage.setItem('theme', PortfolioState.darkMode ? 'dark' : 'light');
            updateThemeIcon();
        }
        if (e.target.matches('#mobileThemeToggle') || e.target.closest('#mobileThemeToggle')) {
            PortfolioState.darkMode = !PortfolioState.darkMode;
            document.body.classList.toggle('dark-mode', PortfolioState.darkMode);
            localStorage.setItem('theme', PortfolioState.darkMode ? 'dark' : 'light');
            updateThemeIcon();
        }
    });
}

function updateThemeIcon() {
    const themeBtns = document.querySelectorAll('#theme-toggle, #mobileThemeToggle');
    
    themeBtns.forEach(btn => {
        // Limpiamos el botón (eliminamos el SVG anterior)
        btn.innerHTML = '';
        
        // Creamos el nuevo elemento ícono
        const newIconName = PortfolioState.darkMode ? 'moon' : 'sun';
        const iconElement = document.createElement('i');
        iconElement.setAttribute('data-lucide', newIconName);
        iconElement.setAttribute('aria-hidden', 'true');
        
        // Lo agregamos al botón
        btn.appendChild(iconElement);
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
            window.open(whatsappUrl, '_blank');
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

// --- Project Modal ---
function openProjectModal(projectKey) {
    const modal = new bootstrap.Modal(document.getElementById('projectModal'));
    const title = document.getElementById('modalTitle');
    const body = document.getElementById('modalBody');
    
    if (title) {
        const projectTitle = getNestedTranslation(translations[PortfolioState.currentLanguage], `projects.items.${projectKey}.title`);
        title.textContent = projectTitle || 'Proyecto';
    }
    
    if (body) {
        body.innerHTML = `<p>${PortfolioState.currentLanguage === 'es' ? 'Detalles del proyecto disponibles pronto.' : 'Project details coming soon.'}</p>`;
    }
    
    modal.show();
}

// --- Site Preview (iframe with fallback) ---
function openSitePreview(url, title) {
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
    initScrollToTop();
    initFormHandling();
    initStatCounters();
    initSkillBars();

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