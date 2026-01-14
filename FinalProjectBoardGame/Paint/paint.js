const canvas = document.querySelector("#paintCanvas");

let ctx = canvas.getContext("2d") 
let colorPicker = document.querySelector("#colorPicker")
let lineWidth = document.querySelector("#lineWidth")

let painting = false;

function startPosition(e){ // start painting
    painting = true;
    draw(e);

}

function endPosition(e){ // finish painting
    painting = false;
     ctx.beginPath();
}

function draw(e){
    if(!painting){
        return
    }

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = lineWidth.value;
    ctx.strokeStyle = colorPicker.value;

    ctx.lineTo(x,y);
    ctx.stroke();
    ctx.moveTo(x,y);

}


canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);


clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
