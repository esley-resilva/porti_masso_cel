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
        {
            title: "Sistema Circulatório",
            subtitle: "Fluxo da vida",
            icon: "fas fa-heartbeat",
            bgGradient: "linear-gradient(135deg, #7c2d12 0%, #dc2626 100%)",
            content: `
                <h3>Circulação e Vitalidade</h3>
                <p>As técnicas de massoterapia trabalham diretamente no sistema circulatório, melhorando o fluxo sanguíneo e linfático.</p>
                <ul>
                    <li>Melhora da circulação sanguínea</li>
                    <li>Redução da pressão arterial</li>
                    <li>Fortalecimento do sistema cardiovascular</li>
                    <li>Eliminação de toxinas via linfa</li>
                    <li>Oxigenação de todos os tecidos</li>
                </ul>
            `
        },
        {
            title: "Sistema Muscular",
            subtitle: "Força e movimento",
            icon: "fas fa-dumbbell",
            bgGradient: "linear-gradient(135deg, #166534 0%, #22c55e 100%)",
            content: `
                <h3>Músculos e Movimento</h3>
                <p>O trabalho muscular é fundamental para o equilíbrio corporal e a prevenção de lesões.</p>
                <ul>
                    <li>Relaxamento da tensão muscular</li>
                    <li>Melhora da flexibilidade</li>
                    <li>Prevenção de lesões</li>
                    <li>Alívio de dores crônicas</li>
                    <li>Aumento da força e resistência</li>
                </ul>
            `
        },
        {
            title: "Sistema Nervoso",
            subtitle: "Controle e equilíbrio",
            icon: "fas fa-brain",
            bgGradient: "linear-gradient(135deg, #581c87 0%, #a855f7 100%)",
            content: `
                <h3>Mente e Corpo Conectados</h3>
                <p>O sistema nervoso coordena todas as funções corporais e é profundamente beneficiado pela massoterapia.</p>
                <ul>
                    <li>Redução do estresse e ansiedade</li>
                    <li>Melhora da qualidade do sono</li>
                    <li>Equilíbrio do sistema nervoso autônomo</li>
                    <li>Liberação de endorfinas</li>
                    <li>Aumento do bem-estar mental</li>
                </ul>
            `
        },
        {
            title: "Energia Vital",
            subtitle: "Harmonia integral",
            icon: "fas fa-yin-yang",
            bgGradient: "linear-gradient(135deg, #0c4a6e 0%, #0ea5e9 100%)",
            content: `
                <h3>Equilíbrio Energético</h3>
                <p>Além dos aspectos físicos, trabalhamos com a energia vital que flui através de todo o organismo.</p>
                <ul>
                    <li>Desbloqueio de canais energéticos</li>
                    <li>Harmonização dos chakras</li>
                    <li>Equilíbrio entre yin e yang</li>
                    <li>Conexão corpo-mente-espírito</li>
                    <li>Despertar da consciência corporal</li>
                </ul>
            `
        }
    ],
    
    services: [
        {
            title: "Drenagem Linfática",
            icon: "fas fa-leaf",
            description: "Técnica especializada para eliminação de toxinas, redução de inchaço e fortalecimento do sistema imunológico. Ideal para pós-operatório e bem-estar geral."
        },
        {
            title: "Massagem Relaxante",
            icon: "fas fa-spa",
            description: "Movimentos suaves e rítmicos que promovem relaxamento profundo, alívio do estresse e melhora da qualidade do sono. Perfeita para o ritmo acelerado da vida moderna."
        },
        {
            title: "Shiatsu",
            icon: "fas fa-hand-paper",
            description: "Técnica oriental que utiliza pressão com dedos e palmas sobre pontos específicos do corpo, promovendo equilíbrio energético e alívio de tensões."
        },
        {
            title: "Reflexologia",
            icon: "fas fa-foot-print",
            description: "Massagem nos pés que atua em pontos reflexos correspondentes aos órgãos do corpo, proporcionando relaxamento e estímulo à autocura."
        }
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
        {
            name: "Ana Costa",
            date: "10 de Julho, 2023",
            rating: 5,
            content: "A massagem relaxante me ajudou a superar um período muito estressante. Saio sempre renovada das sessões. O ambiente é acolhedor e o atendimento impecável."
        },
        {
            name: "Roberto Santos",
            date: "5 de Agosto, 2023",
            rating: 4.5,
            content: "A reflexologia me surpreendeu! Problemas de digestão que eu tinha há tempos melhoraram muito após as sessões. Técnica incrível e profissional muito competente."
        }
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
        { 
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            caption: "Shiatsu Tradicional"
        },
        { 
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            caption: "Reflexologia dos Pés"
        }
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
let totalPages = 0;
let favorites = [];
let currentTheme = 'dark';
let isLoading = true;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Simular carregamento
    setTimeout(() => {
        initializeApp();
        hideLoader();
    }, 1500);
});

function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            isLoading = false;
        }, 500);
    }
}

function initializeApp() {
    try {
        // Inicializar variáveis
        totalPages = content.portfolioPages.length;
        favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        currentTheme = localStorage.getItem('theme') || 'dark';
        
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
        setupEventListeners();
        
        console.log('App inicializado com sucesso!');
    } catch (error) {
        console.error('Erro na inicialização:', error);
        hideLoader(); // Garantir que o loader seja removido mesmo com erro
    }
}

function setupEventListeners() {
    // Navegação do livro
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const shareBtn = document.getElementById('shareBtn');
    const favoritesBtn = document.getElementById('favoritesBtn');
    const themeToggle = document.getElementById('themeToggle');
    
    if (prevBtn) prevBtn.addEventListener('click', () => prevPage());
    if (nextBtn) nextBtn.addEventListener('click', () => nextPage());
    if (shareBtn) shareBtn.addEventListener('click', () => openShareModal());
    if (favoritesBtn) favoritesBtn.addEventListener('click', () => openFavoritesModal());
    if (themeToggle) themeToggle.addEventListener('click', () => toggleTheme());
    
    // Links de contato
    const whatsappBtn = document.getElementById('whatsappBtn');
    const emailBtn = document.getElementById('emailBtn');
    
    if (whatsappBtn) whatsappBtn.setAttribute('href', content.contact.whatsapp);
    if (emailBtn) emailBtn.setAttribute('href', `mailto:${content.contact.email}`);
    
    // Eventos de compartilhamento
    const facebookShare = document.getElementById('facebookShare');
    const twitterShare = document.getElementById('twitterShare');
    const whatsappShare = document.getElementById('whatsappShare');
    const copyLink = document.getElementById('copyLink');
    const closeShareModal = document.getElementById('closeShareModal');
    const closeFavoritesModal = document.getElementById('closeFavoritesModal');
    
    if (facebookShare) facebookShare.addEventListener('click', shareOnFacebook);
    if (twitterShare) twitterShare.addEventListener('click', shareOnTwitter);
    if (whatsappShare) whatsappShare.addEventListener('click', shareOnWhatsApp);
    if (copyLink) copyLink.addEventListener('click', copyLinkToClipboard);
    if (closeShareModal) closeShareModal.addEventListener('click', () => closeModal('shareModal'));
    if (closeFavoritesModal) closeFavoritesModal.addEventListener('click', () => closeModal('favoritesModal'));
    
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
            closeModal('shareModal');
            closeModal('favoritesModal');
        }
    });
    
    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            alert(`Obrigado, ${name}! Sua mensagem foi enviada com sucesso. Entraremos em contato pelo e-mail ${email} em breve.`);
            e.target.reset();
        });
    }
}

// Carregar conteúdo na página
function loadContent() {
    try {
        // Hero Section
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroDescription = document.querySelector('.hero-description');
        
        if (heroTitle) heroTitle.textContent = content.hero.title;
        if (heroSubtitle) heroSubtitle.textContent = content.hero.subtitle;
        if (heroDescription) heroDescription.textContent = content.hero.description;
        
        // Portfolio Pages
        loadPortfolioPages();
        
        // Services
        loadServices();
        
        // Testimonials
        loadTestimonials();
        
        // Gallery
        loadGallery();
        
        // Stats
        loadStats();
        
        // Contact
        loadContact();
        
        console.log('Conteúdo carregado com sucesso!');
    } catch (error) {
        console.error('Erro ao carregar conteúdo:', error);
    }
}

function loadPortfolioPages() {
    const bookElement = document.getElementById('book');
    if (!bookElement) return;
    
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
        
        // Event listener para o botão de favorito
        const favoriteBtn = pageElement.querySelector('.favorite-btn');
        favoriteBtn.addEventListener('click', () => toggleFavorite(index));
    });
    
    updatePageProgress();
}

function loadServices() {
    const servicesGrid = document.querySelector('.feature-grid');
    if (!servicesGrid) return;
    
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
}

function loadTestimonials() {
    const testimonialsContainer = document.querySelector('.testimonials-container');
    if (!testimonialsContainer) return;
    
    testimonialsContainer.innerHTML = '';
    
    content.testimonials.forEach(testimonial => {
        const stars = '★'.repeat(Math.floor(testimonial.rating)) + 
                     (testimonial.rating % 1 ? '★' : '') + 
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
}

function loadGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    if (!galleryGrid) return;
    
    galleryGrid.innerHTML = '';
    
    content.gallery.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${item.image}" alt="${item.caption}" loading="lazy">
            <div class="gallery-caption">${item.caption}</div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

function loadStats() {
    const statsGrid = document.querySelector('.stats-grid');
    if (!statsGrid) return;
    
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
}

function loadContact() {
    const contactGrid = document.querySelector('.contact-grid');
    if (!contactGrid) return;
    
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

// Criar partículas de fundo
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    // Reduzir partículas no mobile para melhor performance
    const particleCount = window.innerWidth <= 768 ? 20 : 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 20 + 20) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Inicializar livro
function initializeBook() {
    updateBookDisplay();
    updatePageProgress();
    updateNavigationButtons();
}

function updateBookDisplay() {
    const book = document.getElementById('book');
    if (!book) return;
    
    const pages = book.querySelectorAll('.page');
    pages.forEach((page, index) => {
        if (index === currentPage) {
            page.style.transform = 'rotateY(0deg)';
            page.style.zIndex = totalPages - index;
        } else if (index < currentPage) {
            page.style.transform = 'rotateY(-180deg)';
            page.style.zIndex = index;
        } else {
            page.style.transform = 'rotateY(0deg)';
            page.style.zIndex = totalPages - index;
        }
    });
}

function updatePageProgress() {
    const progressContainer = document.getElementById('pageProgress');
    if (!progressContainer) return;
    
    progressContainer.innerHTML = '';
    
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = 'progress-dot';
        if (i === currentPage) dot.classList.add('active');
        
        dot.addEventListener('click', () => goToPage(i));
        progressContainer.appendChild(dot);
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) prevBtn.disabled = currentPage === 0;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages - 1;
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        currentPage++;
        updateBookDisplay();
        updatePageProgress();
        updateNavigationButtons();
    }
}

function prevPage() {
    if (currentPage > 0) {
        currentPage--;
        updateBookDisplay();
        updatePageProgress();
        updateNavigationButtons();
    }
}

function goToPage(pageIndex) {
    if (pageIndex >= 0 && pageIndex < totalPages) {
        currentPage = pageIndex;
        updateBookDisplay();
        updatePageProgress();
        updateNavigationButtons();
    }
}

// Sistema de favoritos
function toggleFavorite(pageIndex) {
    const index = favorites.indexOf(pageIndex);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(pageIndex);
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
    updateFavoriteButtons();
}

function updateFavoriteButtons() {
    document.querySelectorAll('.favorite-btn').forEach((btn, index) => {
        const icon = btn.querySelector('i');
        if (favorites.includes(index)) {
            icon.className = 'fas fa-heart';
            btn.classList.add('active');
        } else {
            icon.className = 'far fa-heart';
            btn.classList.remove('active');
        }
    });
}

function loadFavorites() {
    updateFavoriteButtons();
}

// Modais
function openShareModal() {
    const modal = document.getElementById('shareModal');
    if (modal) modal.style.display = 'flex';
}

function openFavoritesModal() {
    const modal = document.getElementById('favoritesModal');
    const favoritesList = document.getElementById('favoritesList');
    
    if (!modal || !favoritesList) return;
    
    favoritesList.innerHTML = '';
    
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>Nenhuma página favoritada ainda.</p>';
    } else {
        favorites.forEach(pageIndex => {
            const page = content.portfolioPages[pageIndex];
            if (page) {
                const item = document.createElement('div');
                item.style.cssText = 'padding: 1rem; border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; margin-bottom: 1rem; cursor: pointer;';
                item.innerHTML = `
                    <h4 style="color: var(--primary); margin-bottom: 0.5rem;">${page.title}</h4>
                    <p style="color: var(--text-muted); font-size: 0.9rem;">${page.subtitle}</p>
                `;
                item.addEventListener('click', () => {
                    goToPage(pageIndex);
                    closeModal('favoritesModal');
                });
                favoritesList.appendChild(item);
            }
        });
    }
    
    modal.style.display = 'flex';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = 'none';
}

// Compartilhamento
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent('Confira este portfólio incrível!');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${title}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Confira este portfólio interativo de massoterapia!');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function shareOnWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Confira este portfólio interativo: ' + window.location.href);
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function copyLinkToClipboard() {
    navigator.clipboard.writeText(window.location.href).then(() => {
        alert('Link copiado para a área de transferência!');
    }).catch(() => {
        // Fallback para navegadores mais antigos
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Link copiado para a área de transferência!');
    });
}

// Sistema de tema
function initializeTheme() {
    document.body.setAttribute('data-theme', currentTheme);
    updateThemeIcon();
}

function toggleTheme() {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
    updateThemeIcon();
}

function updateThemeIcon() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;
    
    const icon = themeToggle.querySelector('i');
    if (currentTheme === 'dark') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Menu mobile
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (!mobileMenuBtn || !navMenu) return;
    
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
    });
    
    // Fechar menu ao clicar em um link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = mobileMenuBtn.querySelector('i');
            icon.className = 'fas fa-bars';
        });
    });
}

// Gestos touch para mobile
function initializeTouchGestures() {
    if (!window.Hammer) return;
    
    const book = document.getElementById('book');
    if (!book) return;
    
    const hammer = new Hammer(book);
    hammer.get('swipe').set({ direction: Hammer.DIRECTION_HORIZONTAL });
    
    hammer.on('swipeleft', () => nextPage());
    hammer.on('swiperight', () => prevPage());
}

// Animações de scroll
function initializeScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// Scroll suave
function initializeSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Efeito do header
function initializeHeaderEffect() {
    const header = document.getElementById('header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.background = currentTheme === 'dark' 
                ? 'rgba(10, 14, 26, 0.95)' 
                : 'rgba(248, 249, 250, 0.95)';
            header.style.backdropFilter = 'blur(20px)';
        } else {
            header.style.background = currentTheme === 'dark'
                ? 'rgba(10, 14, 26, 0.8)'
                : 'rgba(248, 249, 250, 0.8)';
        }
        
        // Esconder/mostrar header no mobile
        if (window.innerWidth <= 768) {
            if (currentScroll > lastScroll && currentScroll > 100) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }
        
        lastScroll = currentScroll;
    });
}

// Estatísticas animadas
function initializeStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStatNumber(entry.target);
                observer.unobserve(entry.target);
            }
        });
    });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function animateStatNumber(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Botão voltar ao topo
function initializeBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Otimizações para mobile
function optimizeForMobile() {
    // Desabilitar hover em dispositivos touch
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    }
    
    // Ajustar viewport height para mobile
    const setViewportHeight = () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setViewportHeight();
    window.addEventListener('resize', setViewportHeight);
    window.addEventListener('orientationchange', setViewportHeight);
}

// Tratamento de erros
function handleErrors() {
    window.addEventListener('error', (e) => {
        console.error('Erro capturado:', e.error);
        // Em caso de erro crítico, ainda remover o loader
        if (isLoading) {
            hideLoader();
        }
    });
    
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Promise rejeitada:', e.reason);
        // Em caso de erro crítico, ainda remover o loader
        if (isLoading) {
            hideLoader();
        }
    });
}

// Service Worker para cache (opcional)
function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
            .then(() => console.log('Service Worker registrado'))
            .catch(err => console.log('Erro no Service Worker:', err));
    }
}

// Lazy loading de imagens
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Performance monitoring
function monitorPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`Site carregado em ${loadTime.toFixed(2)}ms`);
            
            // Métricas de performance
            if ('getEntriesByType' in performance) {
                const navigation = performance.getEntriesByType('navigation')[0];
                console.log('Métricas de navegação:', navigation);
            }
        });
    }
}

// Inicialização de otimizações
document.addEventListener('DOMContentLoaded', () => {
    optimizeForMobile();
    handleErrors();
    initializeLazyLoading();
    monitorPerformance();
    // registerServiceWorker(); // Descomente se quiser usar Service Worker
});

// Debounce para otimizar eventos
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle para scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Aplicar throttle nos eventos de scroll
window.addEventListener('scroll', throttle(() => {
    // Eventos de scroll otimizados
}, 16));

// Prevenção de bounce no iOS
document.addEventListener('touchmove', (e) => {
    if (e.target.closest('.testimonials-container') || 
        e.target.closest('.page-text')) {
        return; // Permitir scroll em containers específicos
    }
    // Evitar bounce em outras áreas
}, { passive: false });

// Feedback haptic para dispositivos compatíveis
function hapticFeedback(type = 'light') {
    if ('vibrate' in navigator) {
        switch(type) {
            case 'light':
                navigator.vibrate(10);
                break;
            case 'medium':
                navigator.vibrate(20);
                break;
            case 'heavy':
                navigator.vibrate(50);
                break;
        }
    }
}

// Aplicar feedback haptic em interações importantes
document.addEventListener('click', (e) => {
    if (e.target.closest('.btn') || 
        e.target.closest('.control-btn') ||
        e.target.closest('.favorite-btn')) {
        hapticFeedback('light');
    }
});

// PWA Support
function initializePWA() {
    // Detectar se o app está sendo executado como PWA
    if (window.matchMedia('(display-mode: standalone)').matches) {
        document.body.classList.add('pwa-mode');
    }
    
    // Prompt de instalação
    let deferredPrompt;
    
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        
        // Mostrar botão de instalação personalizado
        const installBtn = document.createElement('button');
        installBtn.textContent = 'Instalar App';
        installBtn.className = 'install-btn';
        installBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            left: 20px;
            background: var(--primary);
            color: #000;
            border: none;
            padding: 0.8rem 1.5rem;
            border-radius: 25px;
            font-weight: 600;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            transition: transform 0.3s ease;
        `;
        
        installBtn.addEventListener('click', () => {
            installBtn.style.display = 'none';
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                deferredPrompt = null;
            });
        });
        
        document.body.appendChild(installBtn);
        
        // Remover após 10 segundos se não clicado
        setTimeout(() => {
            if (installBtn.parentNode) {
                installBtn.remove();
            }
        }, 10000);
    });
}

// Executar PWA initialization
document.addEventListener('DOMContentLoaded', initializePWA);

// Cleanup para prevenir memory leaks
window.addEventListener('beforeunload', () => {
    // Limpar timers e observers se necessário
    if (window.animationFrameId) {
        cancelAnimationFrame(window.animationFrameId);
    }
});

console.log('Scripts carregados com sucesso! ✅');
console.log('Site otimizado para mobile 📱');