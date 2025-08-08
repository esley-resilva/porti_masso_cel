// Conteúdo editável - Pode modificar livremente
const content = {
    hero: {
        title: "Jornada Corporal",
        subtitle: "Esley Reginaldo - Massoterapeuta",
        description: "Uma experiência única de bem-estar que integra técnicas milenares com abordagens modernas, proporcionando equilíbrio entre corpo, mente e energia vital."
    },
    
    portfolioPages: [
        {
            title: "Bem-vindo",
            subtitle: "Apresentação Profissional",
            icon: "fas fa-user-md",
            bgGradient: "linear-gradient(135deg, #1e1b4b 0%, #3730a3 100%)",
            content: `
                <h3>Sobre Mim</h3>
                <p>Sou Esley Reginaldo, massoterapeuta especializado em técnicas integrativas que combinam conhecimentos ancestrais com práticas modernas de bem-estar.</p>
                <p>Minha missão é proporcionar uma experiência única de cura e equilíbrio, trabalhando desde o nível celular até os sistemas energéticos mais complexos do corpo humano.</p>
            `
        },
        {
            title: "Nível Celular",
            subtitle: "A base de toda vida",
            icon: "fas fa-dna",
            bgGradient: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            content: `
                <h3>Fundamentos Microscópicos</h3>
                <p>Toda técnica de massoterapia inicia seu trabalho no nível mais fundamental: a célula.</p>
                <ul>
                    <li>Melhora da oxigenação celular</li>
                    <li>Aceleração do metabolismo</li>
                    <li>Eliminação de toxinas</li>
                    <li>Regeneração tecidual</li>
                    <li>Equilíbrio do pH celular</li>
                </ul>
            `
        },
        // Adicione mais páginas conforme necessário
    ],
    
    services: [
        {
            title: "Drenagem Linfática",
            icon: "fas fa-leaf",
            description: "Técnica especializada para eliminação de toxinas, redução de inchaço e fortalecimento do sistema imunológico. Ideal para pós-operatório e bem-estar geral."
        },
        {
            title: "Massagem Relaxante",
            icon: "fas fa-zen",
            description: "Movimentos suaves e rítmicos que promovem relaxamento profundo, alívio do estresse e melhora da qualidade do sono. Perfeita para o ritmo acelerado da vida moderna."
        },
        // Adicione mais serviços conforme necessário
    ],
    
    testimonials: [
        {
            name: "Mariana Silva",
            date: "15 de Maio, 2023",
            rating: 5,
            content: "As sessões de massagem com o Esley transformaram minha vida. Após um acidente, a drenagem linfática ajudou na minha recuperação de forma impressionante. Recomendo muito!"
        },
        {
            name: "Carlos Oliveira",
            date: "22 de Junho, 2023",
            rating: 4.5,
            content: "Sofria de dores crônicas nas costas há anos. Após algumas sessões de shiatsu, minha qualidade de vida melhorou significativamente. O Esley é um profissional excepcional."
        },
        // Adicione mais avaliações conforme necessário
    ],
    
    gallery: [
        { 
            image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            caption: "Massagem Relaxante"
        },
        { 
            image: "https://images.unsplash.com/photo-1591348131719-8c1a7b8f2d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            caption: "Drenagem Linfática"
        },
        // Adicione mais imagens conforme necessário
    ],
    
    stats: [
        { number: 500, label: "Clientes Atendidos" },
        { number: 8, label: "Anos de Experiência" },
        { number: 15, label: "Técnicas Especializadas" },
        { number: 98, label: "% Satisfação" }
    ],
    
    contact: {
        phone: "(11) 99999-9999",
        email: "esley@massoterapia.com",
        location: "São Paulo - SP",
        whatsapp: "https://wa.me/5511999999999"
    }
};

// Variáveis globais
let currentPage = 0;
const totalPages = content.portfolioPages.length;
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let currentTheme = localStorage.getItem('theme') || 'dark';

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Carregar conteúdo
    loadContent();
    
    // Inicializar componentes
    createParticles();
    initializeBook();
    initializeScrollAnimations();
    initializeSmoothScrolling();
    initializeHeaderEffect();
    initializeStats();
    initializeTheme();
    initializeMobileMenu();
    initializeTouchGestures();
    loadFavorites();
    initializeBackToTop();
    
    // Event listeners
    document.getElementById('prevBtn').addEventListener('click', () => prevPage());
    document.getElementById('nextBtn').addEventListener('click', () => nextPage());
    document.getElementById('shareBtn').addEventListener('click', () => openShareModal());
    document.getElementById('favoritesBtn').addEventListener('click', () => openFavoritesModal());
    document.getElementById('themeToggle').addEventListener('click', () => toggleTheme());
    document.getElementById('whatsappBtn').setAttribute('href', content.contact.whatsapp);
    document.getElementById('emailBtn').setAttribute('href', `mailto:${content.contact.email}`);
    
    // Eventos de compartilhamento
    document.getElementById('facebookShare').addEventListener('click', shareOnFacebook);
    document.getElementById('twitterShare').addEventListener('click', shareOnTwitter);
    document.getElementById('whatsappShare').addEventListener('click', shareOnWhatsApp);
    document.getElementById('copyLink').addEventListener('click', copyLink);
    document.getElementById('closeShareModal').addEventListener('click', closeShareModal);
    document.getElementById('closeFavoritesModal').addEventListener('click', closeFavoritesModal);
    
    // Fechar modal ao clicar fora
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
    
    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') nextPage();
        if (e.key === 'ArrowLeft') prevPage();
        if (e.key === 'Escape') {
            closeShareModal();
            closeFavoritesModal();
        }
    });
    
    // Formulário de contato
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato pelo e-mail ${email} em breve.`);
        e.target.reset();
    });
}

// Carregar conteúdo na página
function loadContent() {
    // Hero Section
    document.querySelector('.hero-title').textContent = content.hero.title;
    document.querySelector('.hero-subtitle').textContent = content.hero.subtitle;
    document.querySelector('.hero-description').textContent = content.hero.description;
    
    // Portfolio Pages
    const bookElement = document.getElementById('book');
    bookElement.innerHTML = '';
    
    content.portfolioPages.forEach((page, index) => {
        const pageElement = document.createElement('div');
        pageElement.className = 'page';
        pageElement.dataset.page = index;
        pageElement.innerHTML = `
            <div class="page-bg" style="background: ${page.bgGradient};"></div>
            <div class="page-inner">
                <button class="favorite-btn" data-page="${index}">
                    <i class="far fa-heart"></i>
                </button>
                <div class="page-content">
                    <div class="page-icon">
                        <i class="${page.icon}"></i>
                    </div>
                    <h2 class="page-title">${page.title}</h2>
                    <p class="page-subtitle">${page.subtitle}</p>
                    <div class="page-text">
                        ${page.content}
                    </div>
                    <div class="page-number">${(index + 1).toString().padStart(2, '0')}</div>
                </div>
            </div>
        `;
        bookElement.appendChild(pageElement);
    });
    
    // Services
    const servicesGrid = document.querySelector('.feature-grid');
    servicesGrid.innerHTML = '';
    
    content.services.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'feature-card animate-on-scroll';
        serviceCard.innerHTML = `
            <div class="feature-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3 class="feature-title">${service.title}</h3>
            <p class="feature-description">${service.description}</p>
        `;
        servicesGrid.appendChild(serviceCard);
    });
    
    // Testimonials
    const testimonialsContainer = document.querySelector('.testimonials-container');
    testimonialsContainer.innerHTML = '';
    
    content.testimonials.forEach(testimonial => {
        const stars = '★'.repeat(Math.floor(testimonial.rating)) + 
                     (testimonial.rating % 1 ? '½' : '') + 
                     '☆'.repeat(5 - Math.ceil(testimonial.rating));
        
        const testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial';
        testimonialElement.innerHTML = `
            <div class="testimonial-header">
                <div class="testimonial-avatar">
                    <i class="fas fa-user"></i>
                </div>
                <div>
                    <div class="testimonial-name">${testimonial.name}</div>
                    <div class="testimonial-date">${testimonial.date}</div>
                </div>
            </div>
            <div class="testimonial-rating">${stars}</div>
            <div class="testimonial-content">${testimonial.content}</div>
        `;
        testimonialsContainer.appendChild(testimonialElement);
    });
    
    // Gallery
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryGrid.innerHTML = '';
    
    content.gallery.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.caption}">
            <div class="gallery-caption">${item.caption}</div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
    
    // Stats
    const statsGrid = document.querySelector('.stats-grid');
    statsGrid.innerHTML = '';
    
    content.stats.forEach(stat => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item animate-on-scroll';
        statItem.innerHTML = `
            <span class="stat-number" data-target="${stat.number}">0</span>
            <span class="stat-label">${stat.label}</span>
        `;
        statsGrid.appendChild(statItem);
    });
    
    // Contact
    const contactGrid = document.querySelector('.contact-grid');
    contactGrid.innerHTML = '';
    
    const contactItems = [
        { icon: 'fas fa-phone', title: 'Telefone', info: content.contact.phone },
        { icon: 'fas fa-envelope', title: 'E-mail', info: content.contact.email },
        { icon: 'fas fa-map-marker-alt', title: 'Localização', info: content.contact.location },
        { icon: 'fab fa-whatsapp', title: 'WhatsApp', info: 'Atendimento Direto' }
    ];
    
    contactItems.forEach(item => {
        const contactCard = document.createElement('div');
        contactCard.className = 'contact-card animate-on-scroll';
        contactCard.innerHTML = `
            <div class="contact-icon">
                <i class="${item.icon}"></i>
            </div>
            <h3 class="contact-title">${item.title}</h3>
            <p class="contact-info">${item.info}</p>
        `;
        contactGrid.appendChild(contactCard);
    });
}

// Funções restantes (createParticles, initializeBook, etc.) mantêm a mesma lógica do código original
// ... (o restante do código JavaScript permanece o mesmo)