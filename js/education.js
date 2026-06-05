// Education Section JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Timeline animation on scroll
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    const animateTimeline = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    };
    
    const timelineObserver = new IntersectionObserver(animateTimeline, {
        threshold: 0.3
    });
    
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(50px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        timelineObserver.observe(item);
    });

    // Timeline marker animation
    const timelineMarkers = document.querySelectorAll('.timeline-marker');
    timelineMarkers.forEach(marker => {
        marker.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.2)';
            this.style.boxShadow = '0 0 0 8px rgba(79, 70, 229, 0.2)';
        });
        
        marker.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 0 0 4px #e5e7eb';
        });
    });
});
