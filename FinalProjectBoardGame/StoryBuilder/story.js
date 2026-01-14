const wordsList = [
  ["dragon","spaceship","library"],
  ["pirate","treasure","island"],
  ["wizard","forest","wand"],
  ["robot","factory","oil"],
  ["princess","castle","crown"],
  ["detective","mystery","clue"],
  ["alien","planet","laser"],
  ["ghost","haunted","lamp"],
  ["king","battle","throne"],
  ["scientist","experiment","formula"]
];

let score = 0;
let timeLeft = 30;
let timer;
let currentWords = [];

startRound();

function startRound(){
  resetTimer();

  currentWords = wordsList[Math.floor(Math.random() * wordsList.length)];
  document.getElementById("words").textContent = currentWords.join(", ");
  document.getElementById("storyInput").value = "";
  document.getElementById("message").textContent = "";

  startTimer();
}

function startTimer(){
  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = timeLeft;
    if(timeLeft <=0){
      clearInterval(timer);
      document.getElementById("message").textContent = "⏰ Time's up!";
      setTimeout(startRound,1000);
    }
  },1000);
}

function resetTimer(){
  clearInterval(timer);
  timeLeft = 30;
  document.getElementById("timer").textContent = timeLeft;
}

function submitStory(){
  const story = document.getElementById("storyInput").value.toLowerCase();
  let allWordsIncluded = currentWords.every(word => story.includes(word.toLowerCase()));

  if(allWordsIncluded){
    score++;
    document.getElementById("score").textContent = score;
    document.getElementById("message").textContent = "✅ Great! All words included.";
  } else {
    document.getElementById("message").textContent = "❌ Some words are missing.";
  }

  clearInterval(timer);
  setTimeout(startRound,1000);
}
