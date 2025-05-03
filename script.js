// Event Handling

// Button Click
const magicButton = document.getElementById('magicButton');
magicButton.addEventListener('click', () => {
    alert('Button Clicked!');
});

// Hover Effects
const hoverArea = document.getElementById('hoverArea');
hoverArea.addEventListener('mouseover', () => {
    hoverArea.style.backgroundColor = 'lightgreen';
});

// Keypress Detection
const keypressInput = document.getElementById('keypressInput');
keypressInput.addEventListener('keypress', (e) => {
    console.log('Key pressed: ${e.key}');
});

// Secret action (double-click)
magicButton.addEventListener('dblclick', () => {
    document.body.style.backgroundColor = 'lavender';
});

// Interactive Elements

// Button thatchanges text/color
const colorChanger = document.getElementById('colorChanger');
colorChanger.addEventListener('click', () => {
    if (colorChanger.style.backgroundColor === 'yellow') {
        colorChanger.style.backgroundColor = '';
        colorChanger.textContent.Content = 'Change Color/Text';
    }else {
        colorChanger.style.backgroundColor = 'purple';
        colorChanger.textContent = 'Magic!';
    }
    });

    // Simple Image Gallery
    const galleryImage = document.getElementById('galleryImage');
    const nextImage = document.getElementById('nextImage');
    const images = [
        'https://via.placeholder.com/150',
        'https://via.placeholder.com/160',
        'https://via.placeholder.com/170'
    ];
    let currentImageIndex = 0;

    nextImage.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        galleryImage.src = images[currentImageIndex];
    });

    // Tabs
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab-content').forEach(content => content.classList.add('hidden'));
            document.getElementById(tab.dataset.tab).classList.remove('hidden');
        });
    });

    // Form Validation
    
    const signupForm = document.getElementById('signupForm');
    const formFeedback = document.getElementById('formFeedback');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;

        if (!name || !email || !password) {
            formFeedback.textContent = 'All fields are required!';
            return;
        }

        if (!validateEmail(email)){
            formFeedback.textContent = 'Please enter a valid email!';
            return;
        }

        if (password.length < 8) {
            formFeedback.textContent = 'Password must be at least 8 characters!';
            return;
        }

        formFeedback.style.color = 'green';
        formFeedback.textContent = 'Form submitted successfully!';
    });

    // Real-time feedback for password
    const passwordInput = document.getElementById('password');
    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.length < 8) {
            formFeedback.style.color = 'red';
            formFeedback.textContent = 'Password too short!';
        }else {
            formFeedback.style.color = 'green';
            formFeedback.textContent = 'Password looks good!';
        }
    });

    // Helper function 
    function validateEmail(email){
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }