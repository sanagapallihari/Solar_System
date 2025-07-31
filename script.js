 function zoom(factor) {
     const system = document.querySelector('.solar-system');
     const currentScale = Number(system.dataset.scale || 1);
     const newScale = currentScale * factor;
     system.style.transform = `scale(${newScale})`;
     system.dataset.scale = newScale;
 }




 const tooltip = document.getElementById("tooltip");

 document.querySelectorAll('.planet').forEach(planet => {
     planet.addEventListener('mousemove', (e) => {
         const info = planet.dataset.info;
         const name = planet.dataset.name;
         tooltip.innerHTML = `<strong>${name}</strong><br>${info}`;
         tooltip.style.top = (e.pageY + 15) + 'px';
         tooltip.style.left = (e.pageX + 15) + 'px';
         tooltip.style.opacity = 1;
     });

     planet.addEventListener('mouseleave', () => {
         tooltip.style.opacity = 0;
     });
 });


 const bgMusic = document.getElementById("bg-music");
 const toggleBtn = document.getElementById("music-toggle");

 function toggleMusic() {
     if (bgMusic.paused) {
         bgMusic.play();
         toggleBtn.textContent = "🔊";
     } else {
         bgMusic.pause();
         toggleBtn.textContent = "🔇";
     }
 }

 function createShootingStar() {
     const container = document.querySelector(".shooting-stars");
     const star = document.createElement("div");
     star.classList.add("shooting-star");

     // Random start positions (top half only for realism)
     const top = Math.random() * 40 + 5;
     const left = Math.random() * 100;

     // Random distance
     const xMove = 500 + Math.random() * 300;
     const yMove = 400 + Math.random() * 300;

     // Random rotation direction
     const angle = Math.random() < 0.5 ? 45 : -45;

     // Random duration
     const duration = Math.random() * 1.5 + 0.7;

     star.style.top = `${top}%`;
     star.style.left = `${left}%`;
     star.style.setProperty("--x", `${xMove}px`);
     star.style.setProperty("--y", `${yMove}px`);
     star.style.setProperty("--angle", `${angle}deg`);
     star.style.animationDuration = `${duration}s`;

     container.appendChild(star);

     setTimeout(() => {
         star.remove();
     }, duration * 1000);
 }

 // Fire a new comet every 2–6 seconds
 setInterval(() => {
     if (Math.random() < 0.7) createShootingStar();
 }, 3000);
