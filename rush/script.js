let targetX = window.innerWidth / 2;
let targetY = window.innerHeight / 2;
let currentX = targetX;
let currentY = targetY;

document.addEventListener("mousemove", (e) => {
targetX = e.clientX;
targetY = e.clientY;
});

function animate() {
// interpolate toward target (lerp)
currentX += (targetX - currentX) * 0.03;
currentY += (targetY - currentY) * 0.03;

document.body.style.background = `
    radial-gradient(circle 700px at ${currentX}px ${currentY}px, #a6d1ff, white)
`;

requestAnimationFrame(animate);
}

animate();

//all button hover to add class, and remove class

const btns = document.querySelectorAll('a');
btns.forEach(btn => {
    btn.addEventListener('mouseover', () => {
        btn.classList.add('hover');
    });
    btn.addEventListener('mouseout', () => {
        btn.classList.remove('hover');
    });
});