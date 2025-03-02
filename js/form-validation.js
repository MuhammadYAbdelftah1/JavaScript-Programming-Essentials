document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    
    // Error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');
    
    // Form input elements
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    // Hide success and error messages initially
    formSuccess.style.display = 'none';
    formError.style.display = 'none';
    
    // Form submission handler
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Reset error messages
        resetErrors();
        
        // Validate form
        if (validateForm()) {
            // Simulate form submission (in a real app, you'd send data to a server)
            simulateFormSubmission();
        }
    });
    
    // Input validation on blur
    nameInput.addEventListener('blur', () => validateName());
    emailInput.addEventListener('blur', () => validateEmail());
    subjectInput.addEventListener('blur', () => validateSubject());
    messageInput.addEventListener('blur', () => validateMessage());
    
    // Validation functions
    function validateForm() {
        let isValid = true;
        
        if (!validateName()) isValid = false;
        if (!validateEmail()) isValid = false;
        if (!validateSubject()) isValid = false;
        if (!validateMessage()) isValid = false;
        
        return isValid;
    }
    
    function validateName() {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            return false;
        } else if (nameInput.value.trim().length < 2) {
            nameError.textContent = 'Name must be at least 2 characters';
            return false;
        }
        nameError.textContent = '';
        return true;
    }
    
    function validateEmail() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            return false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
            return false;
        }
        emailError.textContent = '';
        return true;
    }
    
    function validateSubject() {
        if (subjectInput.value.trim() === '') {
            subjectError.textContent = 'Subject is required';
            return false;
        }
        subjectError.textContent = '';
        return true;
    }
    
    function validateMessage() {
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Message is required';
            return false;
        } else if (messageInput.value.trim().length < 10) {
            messageError.textContent = 'Message must be at least 10 characters';
            return false;
        }
        messageError.textContent = '';
        return true;
    }
    
    function resetErrors() {
        nameError.textContent = '';
        emailError.textContent = '';
        subjectError.textContent = '';
        messageError.textContent = '';
        formSuccess.style.display = 'none';
        formError.style.display = 'none';
    }
    
    function simulateFormSubmission() {
        // Show loading state (could add a spinner here)
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate network delay
        setTimeout(() => {
            // 90% chance of success (for demo purposes)
            if (Math.random() < 0.9) {
                // Success
                formSuccess.style.display = 'flex';
                contactForm.reset();
            } else {
                // Error
                formError.style.display = 'flex';
            }
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 1500);
    }
});