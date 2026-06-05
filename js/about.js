// About Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Animate stats on scroll
    const stats = document.querySelectorAll('.stat');
    
    const animateStats = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('h3');
                const targetNumber = parseInt(statNumber.textContent);
                let currentNumber = 0;
                const increment = targetNumber / 50;
                
                const updateNumber = () => {
                    if (currentNumber < targetNumber) {
                        currentNumber += increment;
                        statNumber.textContent = Math.ceil(currentNumber) + '+';
                        requestAnimationFrame(updateNumber);
                    } else {
                        statNumber.textContent = targetNumber + '+';
                    }
                };
                
                updateNumber();
                observer.unobserve(entry.target);
            }
        });
    };
    
    const statsObserver = new IntersectionObserver(animateStats, {
        threshold: 0.5
    });
    
    stats.forEach(stat => {
        statsObserver.observe(stat);
    });

    // Skill items hover effects
    const skillItems = document.querySelectorAll('.about-skills .skill-item');
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.02)';
            this.style.boxShadow = '0 8px 25px rgba(79, 70, 229, 0.15)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
        });
    });
});
