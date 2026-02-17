// Search functionality for home page
function searchCategories() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        const categoryName = card.querySelector('h3').textContent.toLowerCase();
        const categoryDesc = card.querySelector('p').textContent.toLowerCase();
        
        if (categoryName.includes(searchTerm) || categoryDesc.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Add event listener for Enter key on search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchCategories();
            }
        });
    }
});

// Filter products on buy page
function filterProducts() {
    const categoryFilter = document.getElementById('categoryFilter');
    const conditionFilter = document.getElementById('conditionFilter');
    
    if (!categoryFilter || !conditionFilter) return;
    
    const selectedCategory = categoryFilter.value;
    const selectedCondition = conditionFilter.value;
    
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach(card => {
        const productCategory = card.getAttribute('data-category');
        const productCondition = card.getAttribute('data-condition');
        
        let showCard = true;
        
        if (selectedCategory !== 'all' && productCategory !== selectedCategory) {
            showCard = false;
        }
        
        if (selectedCondition !== 'all' && productCondition !== selectedCondition) {
            showCard = false;
        }
        
        card.style.display = showCard ? 'block' : 'none';
    });
}

// Buy product function
function buyProduct(productName) {
    alert(`Thank you for your interest in ${productName}!\n\nYou will be contacted shortly with payment and shipping details.`);
}

// Sell form validation and submission
function handleSellForm(event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    
    let isValid = true;
    
    // Get form values
    const title = document.getElementById('productTitle').value.trim();
    const type = document.getElementById('productType').value;
    const condition = document.getElementById('condition').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value.trim();
    const email = document.getElementById('contactEmail').value.trim();
    const terms = document.getElementById('terms').checked;
    
    // Validate title
    if (title.length < 5) {
        document.getElementById('titleError').textContent = 'Title must be at least 5 characters';
        isValid = false;
    }
    
    // Validate type
    if (!type) {
        document.getElementById('typeError').textContent = 'Please select a product type';
        isValid = false;
    }
    
    // Validate condition
    if (!condition) {
        document.getElementById('conditionError').textContent = 'Please select a condition';
        isValid = false;
    }
    
    // Validate price
    if (!price || parseFloat(price) <= 0) {
        document.getElementById('priceError').textContent = 'Please enter a valid price';
        isValid = false;
    }
    
    // Validate description
    if (description.length < 20) {
        document.getElementById('descriptionError').textContent = 'Description must be at least 20 characters';
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }
    // Validate Phone
   const phone = document.getElementById('contactPhone').value.trim();
if (phone !== "" && !/^[6-9]\d{9}$/.test(phone)) {
    document.getElementById('phoneError').textContent = 'Enter a valid 10-digit Indian phone number';
    isValid = false;
} else {
    document.getElementById('phoneError').textContent = '';
}
    
    // Validate terms
    if (!terms) {
        document.getElementById('termsError').textContent = 'You must agree to the terms';
        isValid = false;
    }
    
    // If form is valid, show success message
    if (isValid) {
        document.getElementById('successMessage').style.display = 'block';
        
        // Scroll to success message
        document.getElementById('successMessage').scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Reset form after 3 seconds
        setTimeout(() => {
            document.getElementById('sellForm').reset();
            document.getElementById('successMessage').style.display = 'none';
        }, 3000);
    } else {
        // Scroll to first error
        const firstError = document.querySelector('.error-message:not(:empty)');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

// Contact form validation and submission
function handleContactForm(event) {
    event.preventDefault();
    
    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
    
    let isValid = true;
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Validate name
    if (name.length < 2) {
        document.getElementById('nameError').textContent = 'Name must be at least 2 characters';
        isValid = false;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('contactEmailError').textContent = 'Please enter a valid email address';
        isValid = false;
    }
    
    // Validate subject
    if (subject.length < 3) {
        document.getElementById('subjectError').textContent = 'Subject must be at least 3 characters';
        isValid = false;
    }
    
    // Validate message
    if (message.length < 10) {
        document.getElementById('messageError').textContent = 'Message must be at least 10 characters';
        isValid = false;
    }
    
    // If form is valid, show success message
    if (isValid) {
        document.getElementById('contactSuccessMessage').style.display = 'block';
        
        // Scroll to success message
        document.getElementById('contactSuccessMessage').scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Reset form after 3 seconds
        setTimeout(() => {
            document.getElementById('contactForm').reset();
            document.getElementById('contactSuccessMessage').style.display = 'none';
        }, 3000);
    } else {
        // Scroll to first error
        const firstError = document.querySelector('.error-message:not(:empty)');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}

// Add smooth scroll behavior for all internal links
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

    // GET LOGGED IN USER NAME
    let user = localStorage.getItem("loggedInUser");

    // If user is not logged in -> redirect to login page
    if (!user) {
        window.location.href = "login.html";
    }

    // Show welcome message
    document.getElementById("welcomeUser").textContent = "Welcome, " + user + " 👋";

    
    

    if (user) {
        document.getElementById("loginLink").textContent = user;
        document.getElementById("loginLink").href = "profile.html";  // or dashboard page
    }

    

