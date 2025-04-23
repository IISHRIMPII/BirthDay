// Animation and interactive elements for Maryam's birthday website

document.addEventListener('DOMContentLoaded', function() {
    // Add sparkle effect when hovering over title
    const title = document.querySelector('.title');
    title.addEventListener('mouseover', function() {
        createSparkles(this);
    });

    // Add confetti effect when clicking the button
    const button = document.querySelector('.button');
    button.addEventListener('click', function(e) {
        // Don't prevent default so the link still works
        createConfetti();
    });

    // Create random floating hearts throughout the page
    createFloatingHearts();
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

// Function to create confetti effect
function createConfetti() {
    const confettiCount = 100;
    const colors = ['#ff69b4', '#4682b4', '#ffb6c1', '#add8e6', '#ffc0cb'];
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
        confetti.style.width = `${Math.random() * 10 + 5}px`;
        confetti.style.height = `${Math.random() * 10 + 5}px`;
        
        document.body.appendChild(confetti);
        
        // Remove confetti after animation completes
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Function to create floating hearts
function createFloatingHearts() {
    const heartCount = 15;
    const colors = ['#ff69b4', '#4682b4'];
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '❤';
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${Math.random() * 10 + 10}s`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heart.style.fontSize = `${Math.random() * 20 + 10}px`;
        heart.style.opacity = Math.random() * 0.7 + 0.3;
        
        document.body.appendChild(heart);
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
    
    .confetti {
        position: fixed;
        top: -10px;
        z-index: 1000;
        pointer-events: none;
        animation: confetti-fall linear forwards;
    }
    
    @keyframes confetti-fall {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
    }
    
    .floating-heart {
        position: fixed;
        pointer-events: none;
        animation: float-heart linear infinite;
    }
    
    @keyframes float-heart {
        0% { transform: translateY(0) rotate(0deg); }
        100% { transform: translateY(-100vh) rotate(360deg); }
    }
`;

document.head.appendChild(styleElement);
