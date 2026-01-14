const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let score = 0;
let lives = 4;
let level = 1;


let ballRadius = 10;
let x = canvas.width/2;
let y = canvas.height-30;
let dx = 4;
let dy = -4;


let paddleHeight = 15;
let paddleWidth = 100;
let paddleX = (canvas.width - paddleWidth)/2;

let rightPressed = false;
let leftPressed = false;

const brickRowCount = 5;
const brickColumnCount = 8;
let bricks = [];

function initBricks(level) {
    bricks = [];
    for(let c=0; c<brickColumnCount; c++) {
        bricks[c] = [];
        for(let r=0; r<brickRowCount; r++) {
            let status = (Math.random() * 10 < level * 2) ? 1 : 0; 
            bricks[c][r] = { x: 0, y: 0, status: status };
        }
    }
}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") rightPressed = true;
    if(e.key == "Left" || e.key == "ArrowLeft") leftPressed = true;
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") rightPressed = false;
    if(e.key == "Left" || e.key == "ArrowLeft") leftPressed = false;
}


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#00ff99";
    ctx.fill();
    ctx.closePath();
}


function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight-10, paddleWidth, paddleHeight);
    ctx.fillStyle = "#b7f0deff";
    ctx.fill();
    ctx.closePath();
}


function drawBricks() {
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            if(bricks[c][r].status == 1) {
                let brickX = c*(75+10)+35;
                let brickY = r*(20+10)+50;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, 75, 20);
                ctx.fillStyle = `hsl(${(level*50)%360}, 80%, 50%)`; 
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}


function collisionDetection() {
    for(let c=0; c<brickColumnCount; c++) {
        for(let r=0; r<brickRowCount; r++) {
            let b = bricks[c][r];
            if(b.status == 1) {
                if(x > b.x && x < b.x+75 && y > b.y && y < b.y+20) {
                    dy = -dy;
                    b.status = 0;
                    score += 10;
                    document.getElementById("score").innerText = `Score: ${score}`;
                    if(isLevelCleared()) {
                        level++;
                        if(level > 4) {
                            alert("Well done!");
                            document.location.reload();
                        } else {
                            initBricks(level);
                            resetBallAndPaddle();
                        }
                    }
                }
            }
        }
    }
}


function isLevelCleared() {
    for(let c=0; c<brickColumnCount; c++)
        for(let r=0; r<brickRowCount; r++)
            if(bricks[c][r].status == 1) return false;
    return true;
}

function resetBallAndPaddle() {
    x = canvas.width/2;
    y = canvas.height-30;
    dx = 4 + level; // складність зростає
    dy = -4 - level;
    paddleX = (canvas.width - paddleWidth)/2;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBricks();
    drawBall();
    drawPaddle();
    collisionDetection();

    x += dx;
    y += dy;

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) dx = -dx;
    if(y + dy < ballRadius) dy = -dy;
    else if(y + dy > canvas.height-ballRadius-10) {
        if(x > paddleX && x < paddleX + paddleWidth) dy = -dy;
        else {
            lives--;
            document.getElementById("lives").innerText = `Attempts: ${lives}`;
            if(!lives) {
                alert("Game Over!");
                document.location.reload();
            } else resetBallAndPaddle();
        }
    }

 
    if(rightPressed && paddleX < canvas.width - paddleWidth) paddleX += 7;
    else if(leftPressed && paddleX > 0) paddleX -= 7;

    requestAnimationFrame(draw);
}


initBricks(level);
draw();