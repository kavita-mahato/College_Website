// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initHeroSlider();
    initAboutSlider();
    initNoticeCarousel();
    initGallerySlider();
    initSmoothScrolling();
    initHeaderScroll();
    initSearchFunctionality();
    initStatisticsAnimation();
    initNoticeFiltering();
    initTouchSupport();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenuBtn.classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.main-nav')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
            }
        });
    }
}

// Hero Slider Functionality
function initHeroSlider() {
    const slides = document.querySelectorAll('.hero .slide');
    const prevBtn = document.getElementById('heroPrev');
    const nextBtn = document.getElementById('heroNext');
    const dots = document.querySelectorAll('.hero-dots .dot');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Auto-slide interval
    let autoSlideInterval;
    
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % slideCount;
        showSlide(next);
    }
    
    function prevSlide() {
        const prev = (currentSlide - 1 + slideCount) % slideCount;
        showSlide(prev);
    }
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });
    
    if (prevBtn) prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            showSlide(index);
            startAutoSlide();
        });
    });
    
    // Pause auto-slide on hover
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('mouseenter', stopAutoSlide);
        heroSection.addEventListener('mouseleave', startAutoSlide);
    }
    
    // Start auto-slide
    startAutoSlide();
}

// About Slider Functionality
function initAboutSlider() {
    const slides = document.querySelectorAll('.about-slide');
    const prevBtn = document.getElementById('aboutPrev');
    const nextBtn = document.getElementById('aboutNext');
    const dots = document.querySelectorAll('.slider-dots .dot');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % slideCount;
        showSlide(next);
    }
    
    function prevSlide() {
        const prev = (currentSlide - 1 + slideCount) % slideCount;
        showSlide(prev);
    }
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    // Auto-slide for about section
    setInterval(nextSlide, 4000);
}

// Notice Carousel Functionality
function initNoticeCarousel() {
    const track = document.querySelector('.notice-track');
    const items = document.querySelectorAll('.notice-item');
    const prevBtn = document.getElementById('noticePrev');
    const nextBtn = document.getElementById('noticeNext');
    
    let currentIndex = 0;
    const itemCount = items.length;
    
    function showNotice(index) {
        if (track) {
            track.style.transform = `translateX(-${index * 100}%)`;
            currentIndex = index;
        }
    }
    
    function nextNotice() {
        const next = (currentIndex + 1) % itemCount;
        showNotice(next);
    }
    
    function prevNotice() {
        const prev = (currentIndex - 1 + itemCount) % itemCount;
        showNotice(prev);
    }
    
    if (nextBtn) nextBtn.addEventListener('click', nextNotice);
    if (prevBtn) prevBtn.addEventListener('click', prevNotice);
    
    // Auto-slide for notices
    setInterval(nextNotice, 6000);
}

// Gallery Slider Functionality
function initGallerySlider() {
    const slides = document.querySelectorAll('.gallery-slide');
    const prevBtn = document.getElementById('galleryPrev');
    const nextBtn = document.getElementById('galleryNext');
    const dots = document.querySelectorAll('.gallery-dots .dot');
    
    let currentSlide = 0;
    const slideCount = slides.length;
    
    // Auto-slide interval
    let autoSlideInterval;
    
    function showSlide(index) {
        // Remove active class from all slides and dots
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current slide and dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    function nextSlide() {
        const next = (currentSlide + 1) % slideCount;
        showSlide(next);
    }
    
    function prevSlide() {
        const prev = (currentSlide - 1 + slideCount) % slideCount;
        showSlide(prev);
    }
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 4000); // Change slide every 4 seconds
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', () => {
        stopAutoSlide();
        nextSlide();
        startAutoSlide();
    });
    
    if (prevBtn) prevBtn.addEventListener('click', () => {
        stopAutoSlide();
        prevSlide();
        startAutoSlide();
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            showSlide(index);
            startAutoSlide();
        });
    });
    
    // Pause auto-slide on hover
    const gallerySection = document.querySelector('.gallery');
    if (gallerySection) {
        gallerySection.addEventListener('mouseenter', stopAutoSlide);
        gallerySection.addEventListener('mouseleave', startAutoSlide);
    }
    
    // Start auto-slide
    if (slideCount > 1) {
        startAutoSlide();
    }
}

// Notice Filtering Functionality
function initNoticeFiltering() {
    const filters = document.querySelectorAll('.notice-filter');
    const notices = document.querySelectorAll('.notice-item');
    
    filters.forEach(filter => {
        filter.addEventListener('click', function() {
            const category = this.getAttribute('data-filter');
            
            // Update active filter
            filters.forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            // Filter notices
            notices.forEach(notice => {
                const noticeCategory = notice.getAttribute('data-category');
                
                if (category === 'all' || noticeCategory === category) {
                    notice.style.display = 'flex';
                    notice.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    notice.style.display = 'none';
                }
            });
            
            // Reset carousel to first visible item
            const track = document.querySelector('.notice-track');
            if (track) {
                track.style.transform = 'translateX(0)';
            }
        });
    });
}

// Animated Counter for Statistics
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (target - start) * easeOutQuart);
        
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// Statistics Animation
function initStatisticsAnimation() {
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                
                statNumbers.forEach(stat => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    if (target) {
                        animateCounter(stat, target);
                    }
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const statsSection = document.querySelector('.quick-stats');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// Smooth Scrolling for Navigation Links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Header Scroll Effect
function initHeaderScroll() {
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });
}

// Search Functionality
function initSearchFunctionality() {
    const searchBox = document.querySelector('.search-box input');
    const searchBtn = document.querySelector('.search-box button');
    
    function performSearch() {
        const searchTerm = searchBox.value.trim();
        if (searchTerm) {
            // Basic search implementation - you can enhance this
            alert(`Searching for: ${searchTerm}\n\nThis would typically redirect to a search results page.`);
            searchBox.value = '';
        }
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchBox) {
        searchBox.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
}

// Touch Support for Mobile Devices
function initTouchSupport() {
    let touchStartX = 0;
    let touchEndX = 0;
    
    // Hero slider touch support
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        heroSection.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        heroSection.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleHeroSwipe();
        });
    }
    
    // About slider touch support
    const aboutSlider = document.querySelector('.about-slider');
    if (aboutSlider) {
        aboutSlider.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        aboutSlider.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleAboutSwipe();
        });
    }
    
    // Notice carousel touch support
    const noticeCarousel = document.querySelector('.notice-carousel');
    if (noticeCarousel) {
        noticeCarousel.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        noticeCarousel.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleNoticeSwipe();
        });
    }
    
    // Gallery slider touch support
    const gallerySlider = document.querySelector('.gallery-slider');
    if (gallerySlider) {
        gallerySlider.addEventListener('touchstart', function(e) {
            touchStartX = e.changedTouches[0].screenX;
        });
        
        gallerySlider.addEventListener('touchend', function(e) {
            touchEndX = e.changedTouches[0].screenX;
            handleGallerySwipe();
        });
    }
    
    function handleHeroSwipe() {
        const threshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe left - next slide
                document.getElementById('heroNext')?.click();
            } else {
                // Swipe right - previous slide
                document.getElementById('heroPrev')?.click();
            }
        }
    }
    
    function handleAboutSwipe() {
        const threshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                document.getElementById('aboutNext')?.click();
            } else {
                document.getElementById('aboutPrev')?.click();
            }
        }
    }
    
    function handleNoticeSwipe() {
        const threshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                document.getElementById('noticeNext')?.click();
            } else {
                document.getElementById('noticePrev')?.click();
            }
        }
    }
    
    function handleGallerySwipe() {
        const threshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                document.getElementById('galleryNext')?.click();
            } else {
                document.getElementById('galleryPrev')?.click();
            }
        }
    }
}

// Dropdown Menu Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(dropdown => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu');
        
        if (dropdownMenu) {
            dropdown.addEventListener('mouseenter', function() {
                dropdownMenu.style.opacity = '1';
                dropdownMenu.style.visibility = 'visible';
                dropdownMenu.style.transform = 'translateX(-50%) translateY(0)';
            });
            
            dropdown.addEventListener('mouseleave', function() {
                dropdownMenu.style.opacity = '0';
                dropdownMenu.style.visibility = 'hidden';
                dropdownMenu.style.transform = 'translateX(-50%) translateY(-10px)';
            });
        }
    });
});

// Enhanced Loading Animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add staggered animation to elements
    const animatedElements = document.querySelectorAll('.stat-item, .dept-card, .campus-item, .about-card');
    animatedElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSlider = document.querySelector('.hero-slider');
    if (heroSlider) {
        const speed = scrolled * 0.3;
        heroSlider.style.transform = `translateY(${speed}px)`;
    }
});

// Contact Form Enhancement
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic form validation
            const inputs = this.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = '#ef4444';
                } else {
                    input.style.borderColor = '';
                }
            });
            
            if (isValid) {
                // Show success message
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            } else {
                alert('Please fill in all required fields.');
            }
        });
    }
});

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // Hero slider keyboard navigation
    if (e.target.closest('.hero')) {
        switch(e.key) {
            case 'ArrowLeft':
                document.getElementById('heroPrev')?.click();
                break;
            case 'ArrowRight':
                document.getElementById('heroNext')?.click();
                break;
        }
    }
    
    // About slider keyboard navigation
    if (e.target.closest('.about-slider')) {
        switch(e.key) {
            case 'ArrowLeft':
                document.getElementById('aboutPrev')?.click();
                break;
            case 'ArrowRight':
                document.getElementById('aboutNext')?.click();
                break;
        }
    }
    
    // Notice carousel keyboard navigation
    if (e.target.closest('.notice-carousel')) {
        switch(e.key) {
            case 'ArrowLeft':
                document.getElementById('noticePrev')?.click();
                break;
            case 'ArrowRight':
                document.getElementById('noticeNext')?.click();
                break;
        }
    }
    
    // Gallery slider keyboard navigation
    if (e.target.closest('.gallery-slider')) {
        switch(e.key) {
            case 'ArrowLeft':
                document.getElementById('galleryPrev')?.click();
                break;
            case 'ArrowRight':
                document.getElementById('galleryNext')?.click();
                break;
        }
    }
});

// Accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    // Add ARIA labels to slider controls
    const sliderControls = document.querySelectorAll('.nav-btn, .slider-btn, .notice-btn, .gallery-btn');
    sliderControls.forEach(control => {
        if (control.classList.contains('prev') || control.textContent.includes('left')) {
            control.setAttribute('aria-label', 'Previous slide');
        } else {
            control.setAttribute('aria-label', 'Next slide');
        }
    });
    
    // Add ARIA labels to dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.setAttribute('role', 'button');
        dot.setAttribute('tabindex', '0');
        
        // Add keyboard support for dots
        dot.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
});
