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
            subtitle: "O rio da vida",
            icon: "fas fa-heart",
            bgGradient: "linear-gradient(135deg, #7c2d12 0%, #dc2626 100%)",
            content: `
                <h3>Circulação e Vitalidade</h3>
                <p>A massoterapia trabalha diretamente na melhoria da circulação sanguínea e linfática.</p>
                <ul>
                    <li>Aumento do fluxo sanguíneo</li>
                    <li>Redução da pressão arterial</li>
                    <li>Fortalecimento do sistema cardíaco</li>
                    <li>Eliminação de edemas</li>
                    <li>Oxigenação dos tecidos</li>
                </ul>
            `
        },
        {
            title: "Sistema Muscular",
            subtitle: "Força e movimento",
            icon: "fas fa-dumbbell",
            bgGradient: "linear-gradient(135deg, #166534 0%, #16a34a 100%)",
            content: `
                <h3>Músculos e Mobilidade</h3>
                <p>Trabalho especializado para alívio de tensões e fortalecimento muscular.</p>
                <ul>
                    <li>Relaxamento de tensões musculares</li>
                    <li>Melhoria da flexibilidade</li>
                    <li>Redução de dores crônicas</li>
                    <li>Aumento da amplitude de movimento</li>
                    <li>Prevenção de lesões</li>
                </ul>
            `
        },
        {
            title: "Sistema Nervoso",
            subtitle: "O centro de controle",
            icon: "fas fa-brain",
            bgGradient: "linear-gradient(135deg, #581c87 0%, #a855f7 100%)",
            content: `
                <h3>Equilíbrio Neural</h3>
                <p>As técnicas de massoterapia promovem o equilíbrio do sistema nervoso.</p>
                <ul>
                    <li>Redução do estresse e ansiedade</li>
                    <li>Melhoria da qualidade do sono</li>
                    <li>Aumento da concentração</li>
                    <li>Equilíbrio emocional</li>
                    <li>Alívio de dores neuropáticas</li>
                </ul>
            `
        },
        {
            title: "Energia Vital",
            subtitle: "A essência do ser",
            icon: "fas fa-sun",
            bgGradient: "linear-gradient(135deg, #d4af37 0%, #fbbf24 100%)",
            content: `
                <h3>Harmonização Energética</h3>
                <p>Integração de técnicas que trabalham com a energia vital do corpo.</p>
                <ul>
                    <li>Alinhamento dos chakras</li>
                    <li>Desbloqueio de canais energéticos</li>
                    <li>Harmonização do campo áurico</li>
                    <li>Aumento da vitalidade</li>
                    <li>Conexão corpo-mente-espírito</li>
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
            icon: "fas fa-hands",
            description: "Técnica japonesa que utiliza pressão digital em pontos específicos para equilibrar a energia vital, aliviar tensões e promover o bem-estar integral."
        },
        {
            title: "Reflexologia",
            icon: "fas fa-foot-print",
            description: "Massagem terapêutica nos pés que estimula pontos reflexos correspondentes aos órgãos, promovendo equilíbrio e saúde em todo o corpo."
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
            rating: 5,
            content: "Sofria de dores crônicas nas costas há anos. Após algumas sessões de shiatsu, minha qualidade de vida melhorou significativamente. O Esley é um profissional excepcional."
        },
        {
            name: "Ana Costa",
            date: "10 de Julho, 2023",
            rating: 5,
            content: "A massagem relaxante é incrível! Sempre saio das sessões renovada e com uma sensação de paz interior. O ambiente é acolhedor e o atendimento é personalizado."
        },
        {
            name: "Roberto Santos",
            date: "05 de Agosto, 2023",
            rating: 5,
            content: "A reflexologia me ajudou com problemas digestivos que tinha há meses. É impressionante como o trabalho nos pés pode afetar todo o organismo de forma positiva."
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
            image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            caption: "Ambiente Terapêutico"
        },
        { 
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            caption: "Shiatsu"
        },
        { 
            image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            caption: "Reflexologia"
        },
        { 
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            caption: "Terapia Holística"
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
const totalPages = content.portfolioPages.length;
let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
let currentTheme = localStorage.getItem('theme') || 'dark';
let isLoading = true;

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        hideLoader();
        initializeApp();
    }, 3000);
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
    loadContent();
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
    if (closeShareModal) closeShareModal.addEventListener('click', closeShareModalHandler);
    if (closeFavoritesModal) closeFavoritesModal.addEventListener('click', closeFavoritesModalHandler);
    
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
            closeShareModalHandler();
            closeFavoritesModalHandler();
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
    
    updatePageProgress();
    updateBookControls();
}

// Criar partículas animadas
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Inicializar o livro 3D
function initializeBook() {
    const bookElement = document.getElementById('book');
    if (!bookElement) return;
    
    showPage(0);
}

function showPage(pageIndex) {
    const pages = document.querySelectorAll('.page');
    const book = document.getElementById('book');
    
    if (!book || !pages.length) return;
    
    pages.forEach((page, index) => {
        if (index === pageIndex) {
            page.style.display = 'block';
            page.style.transform = 'translateX(0) rotateY(0deg)';
            page.style.zIndex = '10';
        } else if (index < pageIndex) {
            page.style.display = 'block';
            page.style.transform = 'translateX(-100%) rotateY(-180deg)';
            page.style.zIndex = '1';
        } else {
            page.style.display = 'none';
        }
    });
    
    currentPage = pageIndex;
    updatePageProgress();
    updateBookControls();
}

function nextPage() {
    if (currentPage < totalPages - 1) {
        showPage(currentPage + 1);
    }
}

function prevPage() {
    if (currentPage > 0) {
        showPage(currentPage - 1);
    }
}

function updateBookControls() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) prevBtn.disabled = currentPage === 0;
    if (nextBtn) nextBtn.disabled = currentPage === totalPages - 1;
}

function updatePageProgress() {
    const progressContainer = document.getElementById('pageProgress');
    if (!progressContainer) return;
    
    progressContainer.innerHTML = '';
    
    for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('div');
        dot.className = `progress-dot ${i === currentPage ? 'active' : ''}`;
        dot.addEventListener('click', () => showPage(i));
        progressContainer.appendChild(dot);
    }
}

// Animações de scroll
function initializeScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    });
    
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
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
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        
        if (header) {
            if (scrollY > 100) {
                header.style.background = 'rgba(10, 14, 26, 0.95)';
                header.style.backdropFilter = 'blur(20px)';
            } else {
                header.style.background = 'rgba(10, 14, 26, 0.9)';
            }
            
            if (scrollY > lastScrollY && scrollY > 200) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollY = scrollY;
    });
}

// Estatísticas animadas
function initializeStats() {
    const animateValue = (element, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value + (element.dataset.target.includes('%') ? '%' : '');
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target.querySelector('.stat-number');
                if (target && !target.classList.contains('animated')) {
                    const finalValue = parseInt(target.dataset.target);
                    animateValue(target, 0, finalValue, 2000);
                    target.classList.add('animated');
                }
            }
        });
    });
    
    document.querySelectorAll('.stat-item').forEach(item => {
        observer.observe(item);
    });
}

// Sistema de temas
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
    if (themeToggle) {
        const icon = themeToggle.querySelector('i');
        if (icon) {
            icon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
}

// Menu mobile
function initializeMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) {
                icon.className = navMenu.classList.contains('active') ? 'fas fa-times' : 'fas fa-bars';
            }
        });
    }
}

// Gestos touch
function initializeTouchGestures() {
    const book = document.getElementById('book');
    if (!book || !window.Hammer) return;
    
    const hammer = new Hammer(book);
    hammer.on('swipeleft', () => nextPage());
    hammer.on('swiperight', () => prevPage());
}

// Sistema de favoritos
function loadFavorites() {
    document.querySelectorAll('.favorite-btn').forEach((btn, index) => {
        if (favorites.includes(index)) {
            btn.classList.add('active');
            btn.querySelector('i').className = 'fas fa-heart';
        }
        
        btn.addEventListener('click', () => toggleFavorite(index));
    });
}

function toggleFavorite(pageIndex) {
    const btn = document.querySelector(`[data-page="${pageIndex}"]`);
    const icon = btn.querySelector('i');
    
    if (favorites.includes(pageIndex)) {
        favorites = favorites.filter(fav => fav !== pageIndex);
        btn.classList.remove('active');
        icon.className = 'far fa-heart';
    } else {
        favorites.push(pageIndex);
        btn.classList.add('active');
        icon.className = 'fas fa-heart';
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Botão voltar ao topo
function initializeBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
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
}

// Modais
function openShareModal() {
    const modal = document.getElementById('shareModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function openFavoritesModal() {
    const modal = document.getElementById('favoritesModal');
    const favoritesList = document.getElementById('favoritesList');
    
    if (modal && favoritesList) {
        favoritesList.innerHTML = '';
        
        if (favorites.length === 0) {
            favoritesList.innerHTML = '<p>Nenhuma página favoritada ainda.</p>';
        } else {
            favorites.forEach(pageIndex => {
                const page = content.portfolioPages[pageIndex];
                const item = document.createElement('div');
                item.style.cssText = 'padding: 1rem; background: rgba(255,255,255,0.1); margin-bottom: 1rem; border-radius: 10px; cursor: pointer;';
                item.innerHTML = `
                    <h4 style="color: var(--primary); margin-bottom: 0.5rem;">${page.title}</h4>
                    <p style="color: var(--text-muted);">${page.subtitle}</p>
                `;
                item.addEventListener('click', () => {
                    showPage(pageIndex);
                    closeFavoritesModalHandler();
                });
                favoritesList.appendChild(item);
            });
        }
        
        modal.style.display = 'flex';
    }
}

function closeShareModalHandler() {
    const modal = document.getElementById('shareModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function closeFavoritesModalHandler() {
    const modal = document.getElementById('favoritesModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Funcções de compartilhamento
function shareOnFacebook() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Confira este incrível portfólio de massoterapia!');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${text}`, '_blank');
}

function shareOnTwitter() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Confira este incrível portfólio de massoterapia! 🌿✨');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
}

function shareOnWhatsApp() {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent('Confira este incrível portfólio de massoterapia!');
    window.open(`https://wa.me/?text=${text} ${url}`, '_blank');
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

// Carregar conteúdo na página
function loadContent() {
    // Hero Section
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    
    if (heroTitle) heroTitle.textContent = content.hero.title;
    if (heroSubtitle) heroSubtitle.textContent = content.hero.subtitle;
    if (heroDescription) heroDescription.textContent = content.hero.description;
    
    // Portfolio Pages
    const bookElement = document.getElementById('book');
    if (bookElement) {
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
    }
    
    // Services
    const servicesGrid = document.querySelector('.feature-grid');
    if (servicesGrid) {
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
    
    // Testimonials
    const testimonialsContainer = document.querySelector('.testimonials-container');
    if (testimonialsContainer) {
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
    }
    
    // Gallery
    const galleryGrid = document.querySelector('.gallery-grid');
    if (galleryGrid) {
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
    }
    
    // Stats
    const statsGrid = document.querySelector('.stats-grid');
    if (statsGrid) {
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
    
    // Contact
    const contactGrid = document.querySelector('.contact-grid');
    if (contactGrid) {
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
}
