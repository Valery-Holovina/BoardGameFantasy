



// -----------(Get positions in %)-----------
const board = document.getElementById("board");

board.addEventListener("load", () => {
    console.log("Natural size:", board.naturalWidth, board.naturalHeight);
});
board.addEventListener("click", (e) => {
    const rect = board.getBoundingClientRect();
    
    // click relative to visible image
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;
    
    console.log(`Clicked at: ${xPercent.toFixed(2)}%, ${yPercent.toFixed(2)}%`);
});






