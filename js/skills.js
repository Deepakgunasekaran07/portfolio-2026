// Skills Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Skills categories animation
    const skillCategories = document.querySelectorAll('.skill-category');
    
    const animateSkillCategories = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };
    
    const skillsObserver = new IntersectionObserver(animateSkillCategories, {
        threshold: 0.2
    });
    
    skillCategories.forEach((category, index) => {
        category.style.opacity = '0';
        category.style.transform = 'translateY(50px)';
        category.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        skillsObserver.observe(category);
    });

    // Skill items animation
    const skillItems = document.querySelectorAll('.skill-category .skill-item');
    skillItems.forEach((item, index) => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(10px) scale(1.05)';
            this.style.background = '#f0f4ff';
            this.style.boxShadow = '0 4px 15px rgba(79, 70, 229, 0.1)';
            
            // Animate icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.color = '#3730a3';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0) scale(1)';
            this.style.background = '#f8fafc';
            this.style.boxShadow = 'none';
            
            // Reset icon
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
                icon.style.color = '#4f46e5';
            }
        });
    });

    // Progressive skill loading animation
    const skillItemsContainer = document.querySelectorAll('.skill-category');
    skillItemsContainer.forEach(container => {
        const items = container.querySelectorAll('.skill-item');
        items.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = `opacity 0.4s ease ${index * 0.1}s, transform 0.4s ease ${index * 0.1}s`;
            
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, index * 100 + 500);
        });
    });
});
