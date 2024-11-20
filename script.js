const facts = [
    "I am 21 years old and have a passion for exploring mountains.",
    "I love hiking and have visited several mountain ranges.",
    "I enjoy capturing the beauty of nature through photography during my mountain trips.",
    "I am learning about different mountain ecosystems and their unique wildlife.",
    "I aspire to climb some of the world's tallest peaks in the future."
];

document.getElementById('generate-fact').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    const randomFact = facts[randomIndex];
    document.getElementById('fact-display').textContent = randomFact;
});
