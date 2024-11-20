const wordList = ["able", "about", "account", "acid", "across", "act", "addition", "adjustment", "advertisement", "after", "again", "against", "agreement", "air", "all", "almost", "among", "amount", "amusement", "and", "angle", "angry", "animal", "answer", "ant", "any", "apparatus", "apple", "approval", "arch", "argument", "arm", "army", "art", "as", "at", "attack", "attempt", "attention", "attraction", "authority", "automatic", "awake", "baby", "back", "bad", "bag", "balance", "ball", "band", "base", "basin", "basket", "bath", "be", "beautiful", "because", "bed", "bee", "before", "behaviour", "belief", "bell", "bent", "berry", "between", "bird", "birth", "bit", "bite", "bitter", "black", "blade", "blood", "blow", "blue", "board", "boat", "body", "boiling", "bone", "book", "boot", "bottle", "box", "boy", "brain", "brake", "branch", "brass", "bread", "breath", "brick", "bridge", "bright", "broken", "brother", "brown", "brush", "bucket", "building", "bulb", "burn", "burst", "business", "but", "butter", "button", "by", "cake", "camera", "canvas", "card", "care", "carriage", "cart", "cat", "cause", "certain", "chain", "chalk", "chance", "change", "cheap", "cheese", "chemical", "chest", "chief", "chin", "church", "circle", "clean", "clear", "clock", "cloth", "cloud", "coal", "coat", "cold", "collar", "colour", "comb", "come", "comfort", "committee", "common", "company", "comparison", "competition", "complete", "complex", "condition", "connection", "conscious", "control", "cook", "copper", "copy", "cord", "cork", "cotton", "cough", "country", "cover", "cow", "credit", "crime", "cruel", "crush", "cry", "cup", "cup", "current", "curtain", "curve", "cushion", "damage", "danger", "dark", "daughter", "day", "dead", "dear", "death", "debt", "decision", "deep", "degree", "delicate", "dependent", "design", "desire", "destruction", "detail", "development", "different", "digestion", "direction", "dirty", "discovery", "discussion", "disease", "disgust", "distance", "distribution", "division", "do", "dog", "door", "doubt", "down", "drain", "drawer", "dress", "drink", "driving", "drop", "dry", "dust", "ear", "early", "earth", "east", "edge", "education", "effect", "egg", "elastic", "electric", "end", "engine", "enough", "equal", "error", "even", "event", "ever", "every", "example", "exchange", "existence", "expansion", "experience", "expert", "eye", "face", "fact", "fall", "false", "family", "far", "farm", "fat", "father", "fear", "feather", "feeble", "feeling", "female", "fertile", "fiction", "field", "fight", "finger", "fire", "first", "fish", "fixed", "flag", "flame", "flat", "flight", "floor", "flower", "fly", "fold", "food", "foolish", "foot", "for", "force", "fork", "form", "forward", "fowl", "frame", "free", "frequent", "friend", "from", "front", "fruit", "full", "future", "garden", "general", "get", "girl", "give", "glass", "glove", "go", "goat", "gold", "good", "government", "grain", "grass", "great", "green", "grey", "grip", "group", "growth", "guide", "gun", "hair", "hammer", "hand", "hanging", "happy", "harbour", "hard", "harmony", "hat", "hate", "have", "he", "head", "healthy", "hear", "hearing", "heart", "heat", "help", "high", "history", "hole", "hollow", "hook", "hope", "horn", "horse", "hospital", "hour", "house", "how", "humour", "I", "ice", "idea", "if", "ill", "important", "impulse", "in", "increase", "industry", "ink", "insect", "instrument", "insurance", "interest", "invention", "iron", "island", "jelly", "jewel", "join", "journey", "judge", "jump", "keep", "kettle", "key", "kick", "kind", "kiss", "knee", "knife", "knot", "knowledge", "land", "language", "last", "late", "laugh", "law", "lead", "leaf", "learning", "leather", "left", "leg", "let", "letter", "level", "library", "lift", "light", "like", "limit", "line", "linen", "lip", "liquid", "list", "little", "living", "lock", "long", "look", "loose", "loss", "loud", "love", "low", "machine", "make", "male", "man", "manager", "map", "mark", "market", "married", "mass", "match", "material", "may", "meal", "measure", "meat", "medical", "meeting", "memory", "metal", "middle", "military", "milk", "mind", "mine", "minute", "mist", "mixed", "money", "monkey", "month", "moon", "morning", "mother", "motion", "mountain", "mouth", "move", "much", "muscle", "music", "nail", "name", "narrow", "nation", "natural", "near", "necessary", "neck", "need", "needle", "nerve", "net", "new", "news", "night", "no", "noise", "normal", "north", "nose", "not", "note", "now", "number", "nut", "observation", "of", "off", "offer", "office", "oil", "old", "on", "only", "open", "operation", "opinion", "opposite", "or", "orange", "order", "organization", "ornament", "other", "out", "oven", "over", "owner", "page", "pain", "paint", "paper", "parallel", "parcel", "part", "past", "paste", "payment", "peace", "pen", "pencil", "person", "physical", "picture", "pig", "pin", "pipe", "place", "plane", "plant", "plate", "play", "please", "pleasure", "plough", "pocket", "point", "poison", "polish", "political", "poor", "porter", "position", "possible", "pot", "potato", "powder", "power", "present", "price", "print", "prison", "private", "probable", "process", "produce", "profit", "property", "prose", "protest", "public", "pull", "pump", "punishment", "purpose", "push", "put", "quality", "question", "quick", "quiet", "quite", "rail", "rain", "range", "rat", "rate", "ray", "reaction", "reading", "ready", "reason", "receipt", "record", "red", "regret", "regular", "relation", "religion", "representative", "request", "respect", "responsible", "rest", "reward", "rhythm", "rice", "right", "ring", "river", "road", "rod", "roll", "roof", "room", "root", "rough", "round", "rub", "rule", "run", "sad", "safe", "sail", "salt", "same", "sand", "say", "scale", "school", "science", "scissors", "screw", "sea", "seat", "second", "secret", "secretary", "see", "seed", "seem", "selection", "self", "send", "sense", "separate", "serious", "shade", "shake", "shame", "sharp", "sheep", "shelf", "ship", "shirt", "shock", "shoe", "short", "shut", "side", "sign", "silk", "silver", "simple", "sister", "size", "skin", "", "skirt", "sky", "sleep", "slip", "slope", "slow", "small", "smash", "smell", "smile", "smoke", "smooth", "snake", "sneeze", "snow", "so", "soap", "society", "sock", "soft", "solid", "some", "", "son", "song", "sort", "sound", "soup", "south", "space", "spade", "special", "sponge", "spoon", "spring", "square", "stage", "stamp", "star", "start", "statement", "station", "steam", "steel", "stem", "step", "stick", "sticky", "stiff", "still", "stitch", "stocking", "stomach", "stone", "stop", "store", "story", "straight", "strange", "street", "stretch", "strong", "structure", "substance", "such", "sudden", "sugar", "suggestion", "summer", "sun", "support", "surprise", "sweet", "swim", "system", "table", "tail", "take", "talk", "tall", "taste", "tax", "teaching", "tendency", "test", "than", "that", "the", "then", "theory", "there", "thick", "thin", "thing", "this", "thought", "thread", "throat", "through", "through", "thumb", "thunder", "ticket", "tight", "till", "time", "tin", "tired", "to", "toe", "together", "tomorrow", "tongue", "tooth", "top", "touch", "town", "trade", "train", "transport", "tray", "tree", "trick", "trouble", "trousers", "true", "turn", "twist", "umbrella", "under", "unit", "up", "use", "value", "verse", "very", "vessel", "view", "violent", "voice", "waiting", "walk", "wall", "war", "warm", "wash", "waste", "watch", "water", "wave", "wax", "way", "weather", "week", "weight", "well", "west", "wet", "wheel", "when", "where", "while", "whip", "whistle", "white", "who", "why", "wide", "will", "wind", "window", "wine", "wing", "winter", "wire", "wise", "with", "woman", "wood", "wool", "word", "work", "worm", "wound", "writing", "wrong", "year", "yellow", "yes", "yesterday", "you", "young", "Bernhard", "Breytenbach", "Android"];
const startButton = document.getElementById('hangman-new-game');
const settingsDiv = document.getElementsByClassName("settings")[0];

const autoGuessToggleImg = document.getElementById("auto-guess-toggle-img");
const extraLivesToggleImg = document.getElementById("extra-lives-toggle-img");

guessedWordText = document.getElementById("guessed-word");
let guessedWord = [];

const guessedLettersText = document.getElementById("guessed-letters");
const guessedLetters = []; 
let autoGuess = false;
let extraLives = false;

const resultMsg = document.getElementsByClassName("result-msg")[0];




livesText = document.getElementById("lives-text");
let lives;
let livesArray = [];

let word;
let wordArray;
let wordLength;
let guessIncorect;

let guessedLetter = "";

function startGame() {
  livesArray = []
  document.getElementsByClassName("hangman-game")[0].style.display = "block"
  settingsDiv.style.display = "none";
  startButton.innerText = "Game Running";
  word = wordList[Math.floor(Math.random() * wordList.length)];
  wordArray = [...word]; //I've used array spreading before but i didn't know that you can use it on strings
  //I searched string to char array to find this
  wordLength = word.length;
  console.log(word);
  
  if (extraLives) {
    lives = 10;
  } 
  else {
    lives = 7;
  }

  for (let i = 0; i < lives; i++) {
    livesArray.push("❤︎");
  }
  livesText.innerText = livesArray.join("");

  guessedWord = [];
  for (let i = 0; i < wordLength; i++) {
    guessedWord.push("_");
  }
  guessedWordText.innerText = guessedWord.join(" ");
}

function guessChar() {
  guessedLetter = document.getElementById("character-guess").value
  guessIncorrect = true;
  for (let i = 0; i < wordLength; i++) {
    if (guessedLetter === wordArray[i]) {
      guessedWord[i] = guessedLetter;
      guessIncorrect = false;
    }
  }
  if (guessedWord.indexOf("_") === -1) {
    win();
  }
  if (guessIncorrect && guessedLetters.indexOf(guessedLetter) === -1) {
    lives--;
    livesArray.pop();
    if (lives <= 0) {
      lose();
    }
    livesText.innerText = livesArray.join("");
    guessedLetters.push(guessedLetter)
    guessedLettersText.innerText = guessedLetters.join(", ");
  }
  guessedWordText.innerText = guessedWord.join(" ");
  document.getElementById("character-guess").value = '';

}

function lose() {
  document.getElementsByClassName("hangman-game")[0].style.display = "none"
  startButton.innerText = "Game Over! Play Again?";

}

function win() {
  document.getElementsByClassName("hangman-game")[0].style.display = "none"
  startButton.innerText = "You Won! Play Again?";
  resultMsg.style.display = "block";
  resultMsg.textContent = `<p>You correctly guessed the word, <span class="bold">${word}</span>!</p>`;
  

  console.log(resultMsg);
}

function openSettings() {
  if (settingsDiv.style.display === "block") {
    settingsDiv.style.display = "none";
  } else {
    settingsDiv.style.display = "block";
  }
}


/* TODO: make one toggle function to toggle any setting using objects key-pairs*/
function toggleExtraLives() { //The minor change in position of the toggle image when shifting between on and off is DEFINITELY a feature and not a bug, it adds motion (Also I do understand why it's happening I just don't care enough to change it). 
  if (extraLives === false) {
    extraLivesToggleImg.setAttribute("src", "/images/onToggle.png");
    extraLives = true;
  } else {
    extraLivesToggleImg.setAttribute("src", "/images/offToggle.png");
    extraLives = false;
  }
}

function toggleAutoGuess() {
  if (autoGuess === false) {
    autoGuessToggleImg.setAttribute("src", "/images/onToggle.png");
    autoGuess = true;
  } else {
    autoGuessToggleImg.setAttribute("src", "/images/offToggle.png");
    autoGuess = false;
  }
}


function topNavResponse() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

