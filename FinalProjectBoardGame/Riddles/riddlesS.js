const mysticalRiddles = [
  { question: "I slumber in the heart of mountains, yet my breath can melt stone. What am I?", answer: "Volcano" },
  { question: "I sail across the heavens without wings, trailing light behind me. What am I?", answer: "Comet" },
  { question: "I wander unseen between shadows and light, whispering secrets to those who listen. What am I?", answer: "Wind" },
  { question: "I rise when darkness falls and vanish when dawn greets the world. What am I?", answer: "Moon" },
  { question: "I dwell in forests ancient and deep, unseen by most, yet I see all. What am I?", answer: "Owl" },
  { question: "I twist and turn through endless tunnels, hiding treasures no mortal may find. What am I?", answer: "Labyrinth" },
  { question: "I speak without a tongue and can carry your voice across valleys and hills. What am I?", answer: "Echo" },
  { question: "I shine with borrowed fire, guiding wanderers through the night. What am I?", answer: "Star" },
  { question: "I rise and fall with the tides, touching the shores of distant lands. What am I?", answer: "Ocean" },
  { question: "I glide silently through the sky, a shadow among the clouds. What am I?", answer: "Bat" },
  { question: "I slither through earth and stone, leaving no trace but wisdom in my wake. What am I?", answer: "River" },
  { question: "I hide in plain sight, glittering like jewels, yet I am neither gold nor gem. What am I?", answer: "Dew" },
  { question: "I watch over time, yet I move not, keeping secrets of ages past. What am I?", answer: "Clock" },
  { question: "I roar without a mouth, strike without hands, and vanish without a trace. What am I?", answer: "Thunder" },
  { question: "I shimmer in darkness, drawing the eyes of the curious and the brave. What am I?", answer: "Will-o'-the-wisp" },
  { question: "I slumber in the desert, my body unseen beneath the sands. What am I?", answer: "Oasis" },
  { question: "I weave through the night sky, a river of light flowing endlessly. What am I?", answer: "Milky Way" },
  { question: "I hide in books and scrolls, waiting for the seeker to uncover my knowledge. What am I?", answer: "Secret" },
  { question: "I dance on the waves, catching the sun's fire in my fleeting form. What am I?", answer: "Foam" },
  { question: "I am born of fire and shadow, yet I live only in dreams. What am I?", answer: "Phoenix" },
  { question: "I whisper to the trees, teaching them songs of ancient times. What am I?", answer: "Wind" },
  { question: "I travel unseen between worlds, guiding lost souls to where they belong. What am I?", answer: "Spirit" },
  { question: "I am the bridge between life and death, known to few and feared by many. What am I?", answer: "Grave" },
  { question: "I shine like glass in the moonlight, yet I am neither stone nor crystal. What am I?", answer: "Ice" },
  { question: "I sleep beneath roots and stones, dreaming of the world above. What am I?", answer: "Seed" },
  { question: "I strike without warning, leaving trails of fire in my path. What am I?", answer: "Lightning" },
  { question: "I move through forests, a silver streak among the shadows. What am I?", answer: "Deer" },
  { question: "I hum a tune of forgotten times, and those who hear me remember what they lost. What am I?", answer: "River" },
  { question: "I rise with the sun, touching all I see, yet leaving no mark. What am I?", answer: "Light" },
  { question: "I sleep in darkness and awaken with the first spark of imagination. What am I?", answer: "Idea" },
  { question: "I hide treasures beneath stone, yet only the cleverest may find them. What am I?", answer: "Cave" },
  { question: "I shimmer in hidden pools, reflecting worlds both real and imagined. What am I?", answer: "Mirror" },
  { question: "I travel through walls and doors, yet I am no ghost. What am I?", answer: "Shadow" },
  { question: "I cry without eyes, falling from the heavens to quench the thirsty earth. What am I?", answer: "Rain" },
  { question: "I blaze across the sky for a fleeting moment, admired and feared alike. What am I?", answer: "Shooting Star" },
  { question: "I move like liquid stone, shaping the land with patience. What am I?", answer: "Lava" },
  { question: "I am both guide and trickster, leading travelers on paths unseen. What am I?", answer: "Fox" },
  { question: "I hide in the mountains, yet I roar to the world when angered. What am I?", answer: "Avalanche" },
  { question: "I am born of the clouds, yet I touch the earth with gentle fingers. What am I?", answer: "Snow" },
  { question: "I whisper songs to the night, heard only by those who dare to listen. What am I?", answer: "Owl" },
  { question: "I sparkle with colors unseen, dancing in the sun’s gaze. What am I?", answer: "Butterfly" },
  { question: "I sleep beneath stone, yet I wake to bloom in splendor. What am I?", answer: "Flower" },
  { question: "I am the silent guardian of forgotten paths, seen only when sought. What am I?", answer: "Lantern" },
  { question: "I twist and curl like smoke, unseen yet ever-present. What am I?", answer: "Mist" },
  { question: "I am born of water, yet I soar through the sky. What am I?", answer: "Rainbow" },
  { question: "I drift across oceans, unseen yet felt in every wave. What am I?", answer: "Current" },
  { question: "I grow in silence, feeding on earth and light. What am I?", answer: "Tree" },
  { question: "I shine without heat, lighting the paths of night travelers. What am I?", answer: "Glowstone" },
  { question: "I vanish when caught, leaving only wonder behind. What am I?", answer: "Dream" },
  { question: "I guard the entrance to realms unseen, permitting passage to those deemed worthy. What am I?", answer: "Gate" },
  { question: "I speak in flickers, yet I am no creature of flesh. What am I?", answer: "Fire" },
  { question: "I fall from heights, carrying secrets and life within me. What am I?", answer: "Seed" },
  { question: "I move without legs, singing songs of the earth. What am I?", answer: "River" }
];



//--------
const randomIndex = Math.floor(Math.random() * mysticalRiddles.length);
console.log(mysticalRiddles[randomIndex].question); 
console.log(mysticalRiddles[randomIndex].answer);  
//-------

const r = document.querySelector('#riddle')
r.textContent = mysticalRiddles[randomIndex].question;

const correctAnswer = `${mysticalRiddles[randomIndex].answer}`; 
const checkBtn = document.getElementById('checkBtn');
const answerInput = document.getElementById('answer');
const resultDiv = document.getElementById('result');

checkBtn.addEventListener('click', () => {
  const userAnswer = answerInput.value.trim().toLowerCase();
  if (userAnswer === correctAnswer.toLowerCase()) {
    resultDiv.textContent = "✅ Correct!";
    resultDiv.style.color = "green";
  } else {
    resultDiv.textContent = "❌ Wrong! Try again.";
    resultDiv.style.color = "red";
  }
});
