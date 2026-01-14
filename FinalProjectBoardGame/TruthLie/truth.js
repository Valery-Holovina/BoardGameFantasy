const roundsTotal = 3;
let currentRound = 1;
let correctStatement = "";

const data = [
  { true: "Octopuses have three hearts.", lies: ["Octopuses have one heart.", "Octopuses are mammals."] },
  { true: "Lightning is hotter than the surface of the Sun.", lies: ["Lightning is cold.", "Lightning has no heat."] },
  { true: "Humans share about 60% of their DNA with bananas.", lies: ["Humans share 5% DNA with bananas.", "Bananas have no DNA."] },
  { true: "Sharks existed before trees.", lies: ["Trees existed before sharks.", "Sharks appeared after dinosaurs."] },
  { true: "Water can boil and freeze at the same time under certain conditions.", lies: ["Water cannot freeze and boil.", "Water only changes at one temperature."] },

  { true: "The human brain uses about 20% of the body's energy.", lies: ["The brain uses 2%.", "The brain uses no energy."] },
  { true: "Venus is the hottest planet in the solar system.", lies: ["Mercury is hottest.", "Mars is hottest."] },
  { true: "Honey never spoils.", lies: ["Honey expires in a year.", "Honey spoils if refrigerated."] },
  { true: "A day on Venus is longer than a year on Venus.", lies: ["Venus has short days.", "Venus spins faster than Earth."] },
  { true: "Bananas are berries.", lies: ["Bananas are vegetables.", "Strawberries are berries."] },

  { true: "Sound travels faster in water than in air.", lies: ["Sound is slower in water.", "Sound cannot travel in water."] },
  { true: "There are more possible games of chess than atoms in the observable universe.", lies: ["Chess games are limited.", "Atoms outnumber chess games."] },
  { true: "Oxford University is older than the Aztec Empire.", lies: ["Aztecs existed first.", "Oxford was founded in 1800."] },
  { true: "Some metals explode in water.", lies: ["All metals explode.", "Metals never react with water."] },
  { true: "Wombat poop is cube-shaped.", lies: ["Wombats don’t poop.", "Wombat poop is round."] },

  { true: "There are more trees on Earth than stars in the Milky Way.", lies: ["Stars outnumber trees.", "Trees are fewer than oceans."] },
  { true: "A cockroach can live without its head for days.", lies: ["Cockroaches die instantly.", "Cockroaches need oxygen through mouth."] },
  { true: "Hot water can freeze faster than cold water.", lies: ["Cold water always freezes faster.", "Hot water never freezes."] },
  { true: "The Eiffel Tower grows in summer.", lies: ["It shrinks in summer.", "It never changes size."] },
  { true: "There are taste receptors in the human gut.", lies: ["Taste only exists on tongue.", "Stomach has no receptors."] },

  { true: "Some turtles can breathe through their butts.", lies: ["Turtles breathe only through lungs.", "Turtles don’t need oxygen."] },
  { true: "The Moon is slowly moving away from Earth.", lies: ["The Moon is getting closer.", "The Moon is stationary."] },
  { true: "A group of crows is called a murder.", lies: ["A group of crows is a flock.", "Crows are solitary."] },
  { true: "You can smell rain before it falls.", lies: ["Rain has no smell.", "Smell comes only after rain."] },
  { true: "Butterflies remember being caterpillars.", lies: ["They lose all memory.", "They are born butterflies."] },

  { true: "There are more neurons in your brain than stars in the Milky Way.", lies: ["Brains have fewer neurons.", "Stars are fewer than neurons."] },
  { true: "An octopus can taste with its arms.", lies: ["Octopuses taste only with mouth.", "Arms have no nerves."] },
  { true: "Some frogs can freeze and survive.", lies: ["Frozen frogs die.", "Frogs cannot survive cold."] },
  { true: "Scotland has over 400 words for snow.", lies: ["Scotland has no snow words.", "Snow has one name."] },
  { true: "Your body glows slightly in the dark.", lies: ["Humans emit visible light.", "Glow comes from sweat."] },

  { true: "There are fingerprints on your tongue.", lies: ["Tongues are smooth.", "Only hands have prints."] },
  { true: "Birds don’t urinate.", lies: ["Birds urinate like humans.", "Birds sweat."] },
  { true: "Some cats are allergic to humans.", lies: ["Cats can’t have allergies.", "Only humans have allergies."] },
  { true: "The heart can continue beating outside the body.", lies: ["Heart stops immediately.", "Heart needs brain signals."] },
  { true: "There are more bacteria in your mouth than people on Earth.", lies: ["People outnumber bacteria.", "Mouth has no bacteria."] },

  { true: "Glass is not actually a supercooled liquid.", lies: ["Glass flows slowly.", "Glass is a liquid."] },
  { true: "Some fish can drown.", lies: ["Fish never drown.", "Fish don’t need oxygen."] },
  { true: "You can hear a blue whale’s heartbeat underwater.", lies: ["Whales have silent hearts.", "Whales don’t have hearts."] },
  { true: "There are muscles in your ears.", lies: ["Ears have no muscles.", "Only legs have muscles."] },
  { true: "Humans can survive longer without food than without sleep.", lies: ["Sleep is less important.", "Food is not needed."] }
];


startRound();

function startRound() {
  const roundData = data[Math.floor(Math.random() * data.length)];
  correctStatement = roundData.true;

  const options = shuffle([
    roundData.true,
    ...roundData.lies
  ]);

  document.querySelectorAll(".statements button")
    .forEach((btn, i) => btn.textContent = options[i]);

  document.getElementById("message").textContent = "";
}

function checkAnswer(button) {
  if (button.textContent === correctStatement) {
    document.getElementById("message").textContent = "✅ Correct!";
    currentRound++;

    if (currentRound > roundsTotal) {
      document.getElementById("message").textContent = "🎉 You won!";
      disableButtons();
    } else {
      document.getElementById("round").textContent = currentRound;
      setTimeout(startRound, 900);
    }
  } else {
    document.getElementById("message").textContent = "❌ Wrong! You lost.";
    disableButtons();
  }
}

function disableButtons() {
  document.querySelectorAll("button")
    .forEach(btn => btn.disabled = true);
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

