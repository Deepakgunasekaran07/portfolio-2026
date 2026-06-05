// Portfolio Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Portfolio items animation
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    const animatePortfolioItems = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };
    
    const portfolioObserver = new IntersectionObserver(animatePortfolioItems, {
        threshold: 0.2
    });
    
    portfolioItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        portfolioObserver.observe(item);
    });

    // Portfolio item hover effects
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
            
            // Animate overlay
            const overlay = this.querySelector('.portfolio-overlay');
            if (overlay) {
                overlay.style.opacity = '1';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.05)';
            
            // Reset overlay
            const overlay = this.querySelector('.portfolio-overlay');
            if (overlay) {
                overlay.style.opacity = '0';
            }
        });
    });

    // Portfolio links functionality
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const isGitHub = this.querySelector('.fa-github');
            const isExternal = this.querySelector('.fa-external-link-alt');
            
            if (isGitHub) {
                // Add your GitHub repository URLs here
                const projectName = this.closest('.portfolio-item').querySelector('h3').textContent;
                let githubUrl = '#';
                
                // Map project names to GitHub URLs
                if (projectName.includes('Student Management')) {
                    githubUrl = 'https://github.com/deepak-g/student-management-system';
                } else if (projectName.includes('Care Companion')) {
                    githubUrl = 'https://github.com/deepak-g/care-companion';
                }
                
                window.open(githubUrl, '_blank');
            } else if (isExternal) {
                // Add your live demo URLs here
                const projectName = this.closest('.portfolio-item').querySelector('h3').textContent;
                let demoUrl = '#';
                
                // Map project names to demo URLs
                if (projectName.includes('Student Management')) {
                    demoUrl = 'https://student-management-demo.com';
                } else if (projectName.includes('Care Companion')) {
                    demoUrl = 'https://care-companion-demo.com';
                }
                
                window.open(demoUrl, '_blank');
            }
        });
    });

    // Portfolio tags hover effects
    const portfolioTags = document.querySelectorAll('.portfolio-tags .tag');
    portfolioTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) translateY(-2px)';
            this.style.background = '#4f46e5';
            this.style.color = 'white';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
            this.style.background = '#f0f4ff';
            this.style.color = '#4f46e5';
        });
    });
});
