const menuToggle = document.querySelector('.toggle')
const showcase = document.querySelector('.showcase')


menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active')
    showcase.classList.toggle('active')
})




document.addEventListener("DOMContentLoaded", function () {
    const bubblesContainer = document.querySelector(".box ul");
    const numBubbles = 5; // Number of bubbles to generate

    // Generate random left position and animation delay for each bubble
    for (let i = 0; i < numBubbles; i++) {
        const bubble = document.createElement("li");
        bubble.style.left = Math.random() * 100 + "vw"; // Random left position between 0 and 100vw
        bubble.style.animationDelay = Math.random() * 8 + "s"; // Random animation delay between 0 and 8s
        bubblesContainer.appendChild(bubble);
    }
});