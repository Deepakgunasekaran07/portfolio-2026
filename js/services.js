// Services Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Services cards animation
    const serviceCards = document.querySelectorAll('.service-card');
    
    const animateServiceCards = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };
    
    const servicesObserver = new IntersectionObserver(animateServiceCards, {
        threshold: 0.2
    });
    
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        servicesObserver.observe(card);
    });

    // Service card hover effects
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            
            // Animate service icon
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
                icon.style.background = '#4f46e5';
                
                const iconElement = icon.querySelector('i');
                if (iconElement) {
                    iconElement.style.color = 'white';
                    iconElement.style.transform = 'scale(1.1)';
                }
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
            
            // Reset service icon
            const icon = this.querySelector('.service-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.background = '#f0f4ff';
                
                const iconElement = icon.querySelector('i');
                if (iconElement) {
                    iconElement.style.color = '#4f46e5';
                    iconElement.style.transform = 'scale(1)';
                }
            }
        });
    });

    // Service features animation
    const serviceFeatures = document.querySelectorAll('.service-features li');
    serviceFeatures.forEach((feature, index) => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateX(-20px)';
        feature.style.transition = `opacity 0.4s ease ${index * 0.1}s, transform 0.4s ease ${index * 0.1}s`;
        
        // Animate features when parent card is hovered
        const parentCard = feature.closest('.service-card');
        parentCard.addEventListener('mouseenter', function() {
            setTimeout(() => {
                feature.style.opacity = '1';
                feature.style.transform = 'translateX(0)';
            }, index * 100);
        });
        
        parentCard.addEventListener('mouseleave', function() {
            feature.style.opacity = '0.8';
            feature.style.transform = 'translateX(-5px)';
        });
    });
});
