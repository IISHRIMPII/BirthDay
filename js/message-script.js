// Animation and interactive elements for Maryam's birthday message page

document.addEventListener('DOMContentLoaded', function() {
    // Create floating hearts throughout the page
    createFloatingHearts();
    
    // Add sparkle effect when hovering over title
    const title = document.querySelector('.title');
    title.addEventListener('mouseover', function() {
        createSparkles(this);
    });
    
    // Add sparkle effect when hovering over message title
    const messageTitle = document.querySelector('.message-title');
    messageTitle.addEventListener('mouseover', function() {
        createSparkles(this);
    });
    
    // Add special effects to the signature
    const signature = document.querySelector('.signature');
    signature.addEventListener('mouseover', function() {
        createLoveEffect(this);
    });
});

// Function to create sparkle elements around an element
function createSparkles(element) {
    const rect = element.getBoundingClientRect();
    const sparkleCount = 20;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.left = `${Math.random() * rect.width + rect.left}px`;
        sparkle.style.top = `${Math.random() * rect.height + rect.top}px`;
        sparkle.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        sparkle.style.width = `${Math.random() * 8 + 4}px`;
        sparkle.style.height = sparkle.style.width;
        
        document.body.appendChild(sparkle);
        
        // Remove sparkle after animation completes
        setTimeout(() => {
            sparkle.remove();
        }, 1500);
    }
}

// Function to create love effect (hearts floating up)
function createLoveEffect(element) {
    const rect = element.getBoundingClientRect();
    const heartCount = 10;
    const colors = ['#ff69b4', '#ff1493', '#db7093', '#ffb6c1', '#ffc0cb'];
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.className = 'floating-love-heart';
        heart.style.left = `${Math.random() * rect.width + rect.left}px`;
        heart.style.top = `${rect.bottom - 10}px`;
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.fontSize = `${Math.random() * 15 + 10}px`;
        heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
        
        document.body.appendChild(heart);
        
        // Remove heart after animation completes
        setTimeout(() => {
            heart.remove();
        }, 3000);
    }
}

// Function to create floating hearts background
function createFloatingHearts() {
    const heartsContainer = document.querySelector('.floating-hearts');
    const heartCount = 20;
    const colors = ['#ff69b4', '#4682b4'];
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.innerHTML = '❤';
        heart.className = 'background-heart';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.opacity = Math.random() * 0.5 + 0.1;
        heart.style.animationDuration = `${Math.random() * 20 + 10}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        
        heartsContainer.appendChild(heart);
    }
}

// Add these styles to the document
const styleElement = document.createElement('style');
styleElement.textContent = `
    .sparkle {
        position: fixed;
        background-color: white;
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        animation: sparkle-fade 1s ease-in forwards;
    }
    
    @keyframes sparkle-fade {
        0% { transform: scale(0); opacity: 0; }
        50% { transform: scale(1); opacity: 1; }
        100% { transform: scale(0); opacity: 0; }
    }
    
    .floating-love-heart {
        position: fixed;
        pointer-events: none;
        z-index: 1000;
        animation: float-up ease-out forwards;
    }
    
    @keyframes float-up {
        0% { transform: translateY(0) scale(1); opacity: 1; }
        100% { transform: translateY(-100px) scale(0); opacity: 0; }
    }
    
    .background-heart {
        position: absolute;
        pointer-events: none;
        animation: float-heart linear infinite;
    }
    
    @keyframes float-heart {
        0% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(-100vh) rotate(360deg); }
    }
`;

document.head.appendChild(styleElement);
