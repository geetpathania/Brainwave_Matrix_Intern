// Smooth scroll to the signup section
function scrollToSignup() {
    document.getElementById('signup').scrollIntoView({ behavior: 'smooth' });
}

// Enhanced form validation
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const goals = document.getElementById('goals').value;

    if (name === '' || email === '' || goals === '') {
        alert('Please fill in all fields.');
        return false; // Prevent form submission
    }

    // Basic email pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    alert('Thank you for signing up!');
    return true;
}
