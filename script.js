const facts = [
    "Honey never spoils.",
    "A single strand of spaghetti is called a spaghetto.",
    "Octopuses have three hearts.",
    "Bananas are berries, but strawberries aren't.",
    "There are more stars in the universe than grains of sand on Earth."
];

function navigate(section) {
    const content = document.getElementById('content');
    switch (section) {
        case 'home':
            content.innerHTML = '<h2>Home</h2><p>Welcome to the Random Fact Generator!</p>';
            break;
        case 'facts':
            content.innerHTML = '<h2>Random Fact</h2><button onclick="generateFact()">Get a Fact</button><p id="fact"></p>';
            break;
        default:
            content.innerHTML = '<h2>Home</h2><p>Welcome to the Random Fact Generator!</p>';
    }
}

function generateFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').innerText = facts[randomIndex];
}

// Load the home section by default
document.addEventListener('DOMContentLoaded', () => navigate('home'));
