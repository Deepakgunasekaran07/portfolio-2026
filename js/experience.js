// Experience Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Experience cards animation
    const experienceCards = document.querySelectorAll('.experience-card');
    
    const animateExperienceCards = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };
    
    const experienceObserver = new IntersectionObserver(animateExperienceCards, {
        threshold: 0.2
    });
    
    experienceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.3}s, transform 0.6s ease ${index * 0.3}s`;
        experienceObserver.observe(card);
    });

    // Experience tags hover effects
    const experienceTags = document.querySelectorAll('.experience-tags .tag');
    experienceTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.background = '#4f46e5';
            this.style.color = 'white';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.background = '#f0f4ff';
            this.style.color = '#4f46e5';
        });
    });
});
