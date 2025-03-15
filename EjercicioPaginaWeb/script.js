function createRain() {
    const rainContainer = document.getElementById("rain");
    for (let i = 0; i < 100; i++) {
        let drop = document.createElement("div");
        drop.classList.add("drop");
        drop.style.left = Math.random() * 100 + "vw";
        drop.style.animationDuration = (Math.random() * 2 + 2) + "s";
        rainContainer.appendChild(drop);
    }
}
function createBubbles() {
    const bubbleContainer = document.getElementById("bubbles");
    for (let i = 0; i < 50; i++) {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = Math.random() * 100 + "vw";
        bubble.style.animationDuration = (Math.random() * 4 + 3) + "s";
        bubble.style.width = bubble.style.height = (Math.random() * 20 + 10) + "px";
        bubbleContainer.appendChild(bubble);
    }
}
createRain();
createBubbles();