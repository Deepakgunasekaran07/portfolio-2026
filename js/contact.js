// Contact Section JavaScript
document.addEventListener('DOMContentLoaded', function () {
    // Contact form handling with EmailJS
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        // Initialize EmailJS
        if (typeof emailjs !== 'undefined') {
            emailjs.init("5-ovRoDbJx2sVAmdn");
        }

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form data
            const formData = new FormData(this);
            const name = formData.get('user_name');
            const email = formData.get('user_email');
            const subject = formData.get('subject');
            const message = formData.get('message');

            // Basic validation
            if (!name || !email || !subject || !message) {
                showNotification('Please fill in all fields', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showNotification('Please enter a valid email address', 'error');
                return;
            }

            // Show loading state
            const submitBtn = document.getElementById('submitBtn');
            const btnText = submitBtn.querySelector('.btn-text');
            const loadingSpinner = submitBtn.querySelector('.loading-spinner');

            if (btnText) btnText.style.display = 'none';
            if (loadingSpinner) loadingSpinner.style.display = 'inline-block';
            submitBtn.disabled = true;

            // Prepare template parameters
            const templateParams = {
                user_name: name,
                user_email: email,
                from_name: name,
                reply_to: email,
                subject: subject,
                message: message,
                to_email: 'deepakgunasekaran07@gmail.com'
            };

            // Send email using EmailJS
            emailjs.send('service_5xy8lzu', 'template_cral7x9', templateParams)
                .then(function (response) {
                    console.log('SUCCESS!', response.status, response.text);
                    showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
                    contactForm.reset();
                }, function (error) {
                    console.error('FAILED...', error);
                    const errorMsg = error.text || error.message || 'Unknown error';
                    showNotification(`Sending failed: ${errorMsg}. Please try again later.`, 'error');
                })
                .finally(function () {
                    // Reset button state
                    if (btnText) btnText.style.display = 'inline';
                    if (loadingSpinner) loadingSpinner.style.display = 'none';
                    submitBtn.disabled = false;
                });
        });
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Notification system
    function showNotification(message, type = 'info') {
        // Remove existing notifications
        const existingNotification = document.querySelector('.notification');
        if (existingNotification) {
            existingNotification.remove();
        }

        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        // Add styles
        notification.style.cssText = `
            position: fixed;
            top: 100px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#4f46e5'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1001;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
        `;

        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        `;

        notification.querySelector('.notification-close').style.cssText = `
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
        `;

        // Add to page
        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);

        // Close button functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        });

        // Auto remove after 5 seconds
        setTimeout(() => {
            if (notification.parentNode) {
                notification.style.transform = 'translateX(100%)';
                setTimeout(() => notification.remove(), 300);
            }
        }, 5000);
    }

    // Contact items animation
    const contactItems = document.querySelectorAll('.contact-item');

    const animateContactItems = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                observer.unobserve(entry.target);
            }
        });
    };

    const contactObserver = new IntersectionObserver(animateContactItems, {
        threshold: 0.2
    });

    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
        contactObserver.observe(item);
    });

    // Contact form animation
    const contactFormElement = document.querySelector('.contact-form');
    if (contactFormElement) {
        contactFormElement.style.opacity = '0';
        contactFormElement.style.transform = 'translateX(50px)';
        contactFormElement.style.transition = 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s';

        const formObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                    formObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        formObserver.observe(contactFormElement);
    }

    // Form input focus effects
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function () {
            this.parentElement.style.transform = 'scale(1.02)';
            this.style.borderColor = '#4f46e5';
        });

        input.addEventListener('blur', function () {
            this.parentElement.style.transform = 'scale(1)';
            if (!this.value) {
                this.style.borderColor = '#e5e7eb';
            }
        });
    });
});
