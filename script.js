// ===== WORD DATABASES =====
const wordDatabase = {
    animals: {
        easy: ['cat', 'dog', 'bird', 'fish', 'lion', 'bear', 'rabbit', 'horse', 'snake', 'elephant'],
        medium: ['penguin', 'dolphin', 'giraffe', 'leopard', 'butterfly', 'kangaroo', 'cheetah', 'armadillo', 'ostrich', 'badger'],
        hard: ['hippopotamus', 'rhinoceros', 'platypus', 'chameleon', 'porcupine', 'chinchilla', 'tarantula', 'aardvark', 'impala', 'wombat'],
        extreme: ['xerophyllum', 'nyala', 'quokka', 'numbat', 'okapi', 'axolotl', 'emu', 'zorilla', 'kiwi', 'dhole']
    },
    countries: {
        easy: ['france', 'spain', 'italy', 'japan', 'canada', 'mexico', 'brazil', 'germany', 'greece', 'ireland'],
        medium: ['portugal', 'thailand', 'vietnam', 'belgium', 'austria', 'switzerland', 'finland', 'sweden', 'norway', 'denmark'],
        hard: ['kazakhstan', 'azerbaijan', 'philippines', 'uzbekistan', 'turkmenistan', 'kyrgyzstan', 'suriname', 'mauritius', 'djibouti', 'seychelles'],
        extreme: ['liechtenstein', 'andorra', 'montenegro', 'mauritania', 'eritrea', 'tajikistan', 'gambia', 'guinea-bissau', 'comoros', 'vanuatu']
    },
    fruits: {
        easy: ['apple', 'banana', 'orange', 'grape', 'lemon', 'mango', 'peach', 'plum', 'kiwi', 'melon'],
        medium: ['papaya', 'coconut', 'passion', 'kumquat', 'tangerine', 'nectarine', 'guava', 'pomegranate', 'persimmon', 'lychee'],
        hard: ['dragonfruit', 'starfruit', 'cherimoya', 'tamarind', 'rambutan', 'durian', 'jackfruit', 'mulberry', 'elderberry', 'bilberry'],
        extreme: ['jabuticaba', 'hornebeam', 'mangosteen', 'carambola', 'ackee', 'cherimoya', 'sapodilla', 'cupuacu', 'feijoa', 'quince']
    },
    movies: {
        easy: ['titanic', 'avatar', 'frozen', 'jaws', 'alien', 'inception', 'matrix', 'shrek', 'bambi', 'finding nemo'],
        medium: ['gladiator', 'pulp fiction', 'inception', 'interstellar', 'parasite', 'joker', 'contagion', 'ex machina', 'arrival', 'gravity'],
        hard: ['memento', 'tenet', 'dunkirk', 'oppenheimer', 'chinatown', 'brazil', 'synecdoche', 'requiem', 'locke', 'birdman'],
        extreme: ['mulholland drive', 'eraserhead', 'synecdoche new york', 'the seventh seal', 'andrei rublev', 'solaris', 'stalker', 'mirror', 'ivan the terrible', 'ugetsu']
    },
    technology: {
        easy: ['computer', 'keyboard', 'mouse', 'monitor', 'laptop', 'tablet', 'phone', 'router', 'server', 'software'],
        medium: ['algorithm', 'database', 'encryption', 'bandwidth', 'firewall', 'protocol', 'compiler', 'framework', 'interface', 'kernel'],
        hard: ['blockchain', 'cryptography', 'algorithm', 'throughput', 'virtualization', 'containerization', 'microservices', 'middleware', 'scalability', 'redundancy'],
        extreme: ['metamorphism', 'denormalization', 'heterogeneous', 'polymorphism', 'idempotency', 'asynchronous', 'abstraction', 'encapsulation', 'decomposition', 'atomicity']
    },
    sports: {
        easy: ['soccer', 'tennis', 'golf', 'hockey', 'rugby', 'cricket', 'baseball', 'boxing', 'swimming', 'cycling'],
        medium: ['badminton', 'volleyball', 'archery', 'fencing', 'judo', 'curling', 'handball', 'lacrosse', 'squash', 'surfing'],
        hard: ['pentathlon', 'biathlon', 'triathlon', 'decathlon', 'heptathlon', 'bobsleigh', 'luge', 'skeleton', 'showjumping', 'dressage'],
        extreme: ['bossaball', 'parkour', 'sepaktakraw', 'kabaddi', 'hurling', 'pickleball', 'racquetball', 'rounders', 'netball', 'footgolf']
    },
    colors: {
        easy: ['red', 'blue', 'green', 'yellow', 'black', 'white', 'pink', 'purple', 'orange', 'brown'],
        medium: ['turquoise', 'magenta', 'crimson', 'scarlet', 'indigo', 'violet', 'maroon', 'coral', 'salmon', 'khaki'],
        hard: ['chartreuse', 'vermillion', 'periwinkle', 'mauve', 'sienna', 'umber', 'lavender', 'plum', 'burgundy', 'taupe'],
        extreme: ['celadon', 'viridian', 'cerulean', 'vermilion', 'chartreuse', 'cerulean', 'aureolin', 'xanthe', 'puce', 'ecru']
    }
};

const hints = {
    animals: {
        cat: 'A common domestic pet that meows',
        dog: 'Mans best friend',
        bird: 'Has wings and can fly',
        fish: 'Lives in water',
        lion: 'King of the jungle',
        bear: 'Hibernates in winter',
        rabbit: 'Has long ears',
        horse: 'Used for riding',
        snake: 'No legs, slithers',
        elephant: 'Has a trunk',
        penguin: 'Black and white bird from Antarctica',
        dolphin: 'Smart marine mammal',
        giraffe: 'Has a long neck',
        leopard: 'Has spots',
        butterfly: 'Has colorful wings',
        kangaroo: 'Australian hopper',
        cheetah: 'Fastest land animal',
        armadillo: 'Has an armored shell',
        ostrich: 'Tallest bird, cannot fly',
        badger: 'Digs burrows',
        hippopotamus: 'Huge African river animal',
        rhinoceros: 'Has a horn',
        platypus: 'Egg-laying mammal',
        chameleon: 'Changes color',
        porcupine: 'Has sharp quills',
        chinchilla: 'Soft furry rodent',
        tarantula: 'Large spider',
        aardvark: 'African digger',
        impala: 'African antelope',
        wombat: 'Australian burrower'
    },
    countries: {
        france: 'Home to the Eiffel Tower',
        spain: 'Known for flamenco dancing',
        italy: 'Home to the Colosseum',
        japan: 'Land of the rising sun',
        canada: 'North American country with Niagara Falls',
        mexico: 'Known for tacos and pyramids',
        brazil: 'Home to the Amazon rainforest',
        germany: 'Known for beer and cars',
        greece: 'Ancient civilization',
        ireland: 'The Emerald Isle',
        portugal: 'Oldest nation in Europe',
        thailand: 'Land of smiles',
        vietnam: 'Southeast Asian country',
        belgium: 'Known for chocolate and waffles',
        austria: 'Alpine country',
        switzerland: 'Known for watches and chocolate',
        finland: 'Land of the Northern Lights',
        sweden: 'Nordic country',
        norway: 'Known for fjords',
        denmark: 'Nordic country'
    },
    fruits: {
        apple: 'A day keeps doctor away',
        banana: 'Yellow tropical fruit',
        orange: 'Citrus fruit, orange color',
        grape: 'Small round fruit, comes in clusters',
        lemon: 'Sour yellow citrus',
        mango: 'King of fruits',
        peach: 'Fuzzy stone fruit',
        plum: 'Purple small stone fruit',
        kiwi: 'Brown fuzzy with green inside',
        melon: 'Large orange fruit',
        papaya: 'Tropical orange fruit',
        coconut: 'Hard brown tropical nut',
        passion: 'Purple exotic fruit',
        kumquat: 'Small orange citrus',
        tangerine: 'Small orange fruit',
        nectarine: 'Smooth stone fruit',
        guava: 'Green tropical fruit',
        pomegranate: 'Red fruit with seeds',
        persimmon: 'Orange Asian fruit',
        lychee: 'Small sweet tropical fruit'
    },
    movies: {
        titanic: 'Ship sinks in cold water',
        avatar: 'Blue alien planet',
        frozen: 'Elsa and Anna story',
        jaws: 'Great white shark movie',
        alien: 'Sci-fi horror film',
        inception: 'Dreams within dreams',
        matrix: 'Red pill and blue pill',
        shrek: 'Ogre in a fairy tale',
        bambi: 'Young deer story',
        'finding nemo': 'Lost fish adventure',
        gladiator: 'Roman warrior',
        'pulp fiction': 'Tarantino crime film',
        interstellar: 'Space exploration',
        parasite: 'Korean thriller',
        joker: 'Villain origin story',
        contagion: 'Disease outbreak',
        'ex machina': 'Robot AI movie',
        arrival: 'Alien language',
        gravity: 'Space disaster',
        memento: 'Reverse chronology'
    },
    technology: {
        computer: 'Electronic machine',
        keyboard: 'Input device with keys',
        mouse: 'Pointing input device',
        monitor: 'Display screen',
        laptop: 'Portable computer',
        tablet: 'Touch screen device',
        phone: 'Mobile communication device',
        router: 'Network device',
        server: 'Powerful computer',
        software: 'Programs and applications',
        algorithm: 'Step-by-step procedure',
        database: 'Organized data storage',
        encryption: 'Secure data encoding',
        bandwidth: 'Data transmission capacity',
        firewall: 'Security barrier',
        protocol: 'Communication rules',
        compiler: 'Code translator',
        framework: 'Development structure',
        interface: 'User interaction point',
        kernel: 'Operating system core'
    },
    sports: {
        soccer: 'Played with ball and feet',
        tennis: 'Played with racket and ball',
        golf: 'Hit ball into holes',
        hockey: 'Played on ice with sticks',
        rugby: 'Similar to American football',
        cricket: 'Bat and ball sport',
        baseball: 'American pastime',
        boxing: 'Combat with gloves',
        swimming: 'Racing in water',
        cycling: 'Pedal-powered racing',
        badminton: 'Like tennis but with shuttlecock',
        volleyball: 'Net game with ball',
        archery: 'Bow and arrow sport',
        fencing: 'Sword fighting sport',
        judo: 'Japanese martial art',
        curling: 'Ice sweeping sport',
        handball: 'Hand throwing sport',
        lacrosse: 'Native American sport',
        squash: 'Indoor racket sport',
        surfing: 'Riding ocean waves'
    },
    colors: {
        red: 'Warm color, color of fire',
        blue: 'Cool color, color of sky',
        green: 'Color of grass and nature',
        yellow: 'Bright color of sun',
        black: 'Darkest color',
        white: 'Lightest color',
        pink: 'Light shade of red',
        purple: 'Mix of red and blue',
        orange: 'Between red and yellow',
        brown: 'Color of earth',
        turquoise: 'Blue-green color',
        magenta: 'Pink-purple color',
        crimson: 'Deep red',
        scarlet: 'Bright red',
        indigo: 'Dark blue',
        violet: 'Purple hue',
        maroon: 'Dark red',
        coral: 'Peachy-pink color',
        salmon: 'Fish-colored pink',
        khaki: 'Beige-tan color'
    }
};

// ===== GAME STATE =====
let gameState = {
    currentWord: '',
    guessedLetters: [],
    wrongGuesses: [],
    wrongCount: 0,
    maxWrong: 6,
    gameOver: false,
    won: false,
    currentDifficulty: 'easy',
    currentCategory: 'animals',
    hintsRemaining: 2,
    revealsRemaining: 1,
    gameStarted: false,
    gamesPlayed: 0,
    gamesWon: 0
};

// ===== INITIALIZATION =====
window.addEventListener('DOMContentLoaded', () => {
    loadStats();
    showScreen('homepage');
});

// ===== SCREEN NAVIGATION =====
function showScreen(screenName) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenName).classList.add('active');
}

function goHome() {
    gameState.gameStarted = false;
    showScreen('homepage');
}

function startGame() {
    showScreen('gameScreen');
}

function showTutorial() {
    showScreen('tutorialScreen');
}

function showSettings() {
    showScreen('settingsScreen');
}

// ===== GAME SETUP & FLOW =====
function updateDifficulty() {
    gameState.currentDifficulty = document.getElementById('difficultySelect').value;
}

function updateCategory() {
    gameState.currentCategory = document.getElementById('categorySelect').value;
}

function startRound() {
    if (!gameState.gameStarted) {
        gameState.gameStarted = true;
        gameState.gamesPlayed++;
    }

    // Reset game state
    gameState.guessedLetters = [];
    gameState.wrongGuesses = [];
    gameState.wrongCount = 0;
    gameState.gameOver = false;
    gameState.won = false;
    gameState.hintsRemaining = 2;
    gameState.revealsRemaining = 1;

    // Set difficulty parameters
    const difficultySettings = {
        easy: { maxWrong: 6 },
        medium: { maxWrong: 5 },
        hard: { maxWrong: 4 },
        extreme: { maxWrong: 3 }
    };

    gameState.maxWrong = difficultySettings[gameState.currentDifficulty].maxWrong;

    // Select random word
    const words = wordDatabase[gameState.currentCategory][gameState.currentDifficulty];
    gameState.currentWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

    // Update display
    document.getElementById('difficultyDisplay').textContent = gameState.currentDifficulty.charAt(0).toUpperCase() + gameState.currentDifficulty.slice(1);
    document.getElementById('categoryDisplay').textContent = gameState.currentCategory.charAt(0).toUpperCase() + gameState.currentCategory.slice(1);

    // Show game phase
    document.getElementById('setupPhase').style.display = 'none';
    document.getElementById('gamePhase').style.display = 'flex';
    document.getElementById('gameOverPhase').style.display = 'none';

    // Reset hangman drawing
    resetHangman();

    // Generate letter buttons
    generateLetterButtons();

    // Update display
    updateDisplay();

    // Update hint button
    updateHintButton();
}

function generateLetterButtons() {
    const lettersGrid = document.getElementById('lettersGrid');
    lettersGrid.innerHTML = '';

    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    alphabet.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = 'letter-btn';
        btn.textContent = letter;
        btn.onclick = () => guessLetter(letter, btn);
        lettersGrid.appendChild(btn);
    });
}

function guessLetter(letter, btn) {
    if (gameState.gameOver || gameState.guessedLetters.includes(letter)) {
        return;
    }

    gameState.guessedLetters.push(letter);
    btn.disabled = true;

    if (gameState.currentWord.includes(letter)) {
        btn.classList.add('correct');
        playSound('correct');
    } else {
        btn.classList.add('wrong');
        gameState.wrongGuesses.push(letter);
        gameState.wrongCount++;
        drawHangman();
        playSound('wrong');
    }

    updateDisplay();
    checkGameStatus();
}

function updateDisplay() {
    // Update word display
    let display = '';
    for (let letter of gameState.currentWord) {
        if (gameState.guessedLetters.includes(letter)) {
            display += letter + ' ';
        } else {
            display += '_ ';
        }
    }
    document.getElementById('wordDisplay').textContent = display.trim();

    // Update wrong count
    document.getElementById('wrongCount').textContent = gameState.wrongCount;
    document.getElementById('maxWrong').textContent = gameState.maxWrong;

    // Update wrong letters
    document.getElementById('wrongLetters').textContent = gameState.wrongGuesses.join(', ') || 'None';

    // Update hint text
    const hint = hints[gameState.currentCategory][gameState.currentWord.toLowerCase()] || 'Guess the word!';
    document.getElementById('hintText').textContent = hint;
}

function checkGameStatus() {
    // Check if won
    let won = true;
    for (let letter of gameState.currentWord) {
        if (!gameState.guessedLetters.includes(letter)) {
            won = false;
            break;
        }
    }

    if (won) {
        gameState.won = true;
        gameState.gameOver = true;
        gameState.gamesWon++;
        endGame(true);
        return;
    }

    // Check if lost
    if (gameState.wrongCount >= gameState.maxWrong) {
        gameState.gameOver = true;
        endGame(false);
    }
}

function endGame(won) {
    document.getElementById('gamePhase').style.display = 'none';
    document.getElementById('gameOverPhase').style.display = 'flex';

    const gameOverTitle = document.getElementById('gameOverTitle');
    const gameOverMessage = document.getElementById('gameOverMessage');

    if (won) {
        gameOverTitle.textContent = '🎉 You Won!';
        gameOverTitle.style.color = '#10b981';
        gameOverMessage.textContent = 'Congratulations! You saved the hangman!';
        playSound('win');
    } else {
        gameOverTitle.textContent = '💀 Game Over!';
        gameOverTitle.style.color = '#ef4444';
        gameOverMessage.textContent = 'Better luck next time!';
        playSound('lose');
    }

    document.getElementById('finalWord').textContent = gameState.currentWord;
    document.getElementById('guessesUsed').textContent = gameState.guessedLetters.length;
    document.getElementById('hintsUsed').textContent = 2 - gameState.hintsRemaining;
    document.getElementById('finalCategory').textContent = gameState.currentCategory.charAt(0).toUpperCase() + gameState.currentCategory.slice(1);

    saveStats();
    updateStatsDisplay();
}

// ===== HANGMAN DRAWING =====
function resetHangman() {
    const parts = ['head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'];
    parts.forEach(part => {
        document.getElementById(part).style.display = 'none';
    });
}

function drawHangman() {
    const parts = ['head', 'body', 'leftArm', 'rightArm', 'leftLeg', 'rightLeg'];
    if (gameState.wrongCount > 0 && gameState.wrongCount <= parts.length) {
        document.getElementById(parts[gameState.wrongCount - 1]).style.display = 'block';
    }
}

// ===== HINTS & REVEALS =====
function updateHintButton() {
    const hintBtn = document.getElementById('hintBtn');
    hintBtn.textContent = `💡 Use Hint (${gameState.hintsRemaining})`;
    if (gameState.hintsRemaining === 0) {
        hintBtn.disabled = true;
    } else {
        hintBtn.disabled = false;
    }

    const revealBtn = document.getElementById('revealBtn');
    revealBtn.textContent = `👁️ Reveal Letter (${gameState.revealsRemaining})`;
    if (gameState.revealsRemaining === 0) {
        revealBtn.disabled = true;
    } else {
        revealBtn.disabled = false;
    }
}

function useHint() {
    if (gameState.hintsRemaining <= 0 || gameState.gameOver) return;

    gameState.hintsRemaining--;

    const hint = hints[gameState.currentCategory][gameState.currentWord.toLowerCase()];
    alert(`Hint: ${hint}`);

    updateHintButton();
}

function revealLetter() {
    if (gameState.revealsRemaining <= 0 || gameState.gameOver) return;

    gameState.revealsRemaining--;

    // Find an unguessed letter
    let unguessedLetters = [];
    for (let letter of gameState.currentWord) {
        if (!gameState.guessedLetters.includes(letter)) {
            unguessedLetters.push(letter);
        }
    }

    if (unguessedLetters.length > 0) {
        const revealedLetter = unguessedLetters[Math.floor(Math.random() * unguessedLetters.length)];
        gameState.guessedLetters.push(revealedLetter);

        // Mark button as revealed
        const buttons = document.querySelectorAll('.letter-btn');
        buttons.forEach(btn => {
            if (btn.textContent === revealedLetter) {
                btn.classList.add('correct');
                btn.disabled = true;
            }
        });

        updateDisplay();
        checkGameStatus();
    }

    updateHintButton();
}

// ===== STATISTICS =====
function saveStats() {
    localStorage.setItem('gamesPlayed', gameState.gamesPlayed);
    localStorage.setItem('gamesWon', gameState.gamesWon);
}

function loadStats() {
    gameState.gamesPlayed = parseInt(localStorage.getItem('gamesPlayed')) || 0;
    gameState.gamesWon = parseInt(localStorage.getItem('gamesWon')) || 0;
    updateStatsDisplay();
}

function updateStatsDisplay() {
    document.getElementById('gamesPlayed').textContent = gameState.gamesPlayed;
    document.getElementById('gamesWon').textContent = gameState.gamesWon;

    const winRate = gameState.gamesPlayed > 0 ? Math.round((gameState.gamesWon / gameState.gamesPlayed) * 100) : 0;
    document.getElementById('winRate').textContent = winRate;
}

function resetStats() {
    if (confirm('Are you sure you want to reset all statistics? This cannot be undone.')) {
        gameState.gamesPlayed = 0;
        gameState.gamesWon = 0;
        saveStats();
        updateStatsDisplay();
        alert('Statistics have been reset!');
    }
}

// ===== SETTINGS =====
function changeTheme() {
    const theme = document.getElementById('themeSelect').value;
    document.body.className = '';
    if (theme !== 'light') {
        document.body.classList.add(theme + '-theme');
    }
    localStorage.setItem('theme', theme);
}

// Load theme on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.getElementById('themeSelect').value = savedTheme;
    changeTheme();
});

// ===== SOUND EFFECTS =====
function playSound(type) {
    const soundToggle = document.getElementById('soundToggle');
    if (!soundToggle.checked) return;

    // Using Web Audio API for simple beep sounds
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    switch (type) {
        case 'correct':
            oscillator.frequency.value = 800;
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
            break;
        case 'wrong':
            oscillator.frequency.value = 300;
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.2);
            break;
        case 'win':
            oscillator.frequency.value = 600;
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.3);
            break;
        case 'lose':
            oscillator.frequency.value = 200;
            gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.5);
            break;
    }
}

// ===== KEYBOARD SUPPORT =====
document.addEventListener('keydown', (event) => {
    if (!gameState.gameStarted || gameState.gameOver) return;

    const letter = event.key.toUpperCase();
    if (/^[A-Z]$/.test(letter) && !gameState.guessedLetters.includes(letter)) {
        const buttons = document.querySelectorAll('.letter-btn');
        buttons.forEach(btn => {
            if (btn.textContent === letter) {
                btn.click();
            }
        });
    }
});