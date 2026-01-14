const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let score = 0;
let attempts = 3;

let projectile = { x: 100, y: 300, radius: 15, color: "black", vx:0, vy:0 };
let dragging = false;
let mouse = { x:0, y:0 };


const target = { x: 500, y: 250, radius: 30, color: "violet" };

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

 
  ctx.beginPath();
  ctx.arc(target.x,target.y,target.radius,0,Math.PI*2);
  ctx.fillStyle = target.color;
  ctx.fill();

 
  ctx.beginPath();
  ctx.arc(projectile.x,projectile.y,projectile.radius,0,Math.PI*2);
  ctx.fillStyle = projectile.color;
  ctx.fill();

  requestAnimationFrame(draw);
}

function distance(a,b) {
  return Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2);
}


canvas.addEventListener("mousedown", e => {
  const rect = canvas.getBoundingClientRect();
  mouse.x = e.clientX - rect.left;
  mouse.y = e.clientY - rect.top;

  if(distance(mouse, projectile) < projectile.radius){
    dragging = true;
  }
});

canvas.addEventListener("mousemove", e => {
  if(dragging){
    const rect = canvas.getBoundingClientRect();
    projectile.x = e.clientX - rect.left;
    projectile.y = e.clientY - rect.top;
  }
});

canvas.addEventListener("mouseup", e => {
  if(dragging){
    const rect = canvas.getBoundingClientRect();
    const dx = projectile.x - 100;
    const dy = projectile.y - 300;
    projectile.vx = -dx/5;
    projectile.vy = -dy/5;
    dragging = false;
    animateProjectile();
  }
});


function animateProjectile(){
  const interval = setInterval(()=>{
    projectile.vy += 0.3; 
    projectile.x += projectile.vx;
    projectile.y += projectile.vy;

   
    if(distance(projectile,target) < projectile.radius + target.radius){
      score++;
      document.getElementById("scoreboard").textContent = "Score: " + score;
      resetProjectile();
      clearInterval(interval);
      return;
    }

 
    if(projectile.y > canvas.height || projectile.x > canvas.width){
      attempts--;
      resetProjectile();
      clearInterval(interval);
      if(attempts <=0){
        alert("Game Over! Final score: "+score);
        attempts = 3;
        score = 0;
        document.getElementById("scoreboard").textContent = "Score: " + score;
      }
    }
  },20);
}

function resetProjectile(){
  projectile.x = 100;
  projectile.y = 300;
  projectile.vx = 0;
  projectile.vy = 0;
}


draw();
