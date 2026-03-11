// ----------------------------------------------
// 50 Slightly more difficult English words with Khmer translation
// ----------------------------------------------
const vocabulary = [
    { en: "arrive", kh: "មកដល់" },
    { en: "believe", kh: "ជឿ" },
    { en: "borrow", kh: "ខ្ចី" },
    { en: "brave", kh: "ក្លាហាន" },
    { en: "careful", kh: "ប្រុងប្រយ័ត្ន" },
    { en: "choose", kh: "ជ្រើសរើស" },
    { en: "clean", kh: "ស្អាត" },
    { en: "clever", kh: "ឆ្លាត" },
    { en: "climb", kh: "ឡើង" },
    { en: "cloudy", kh: "មានពពក" },
    { en: "count", kh: "រាប់" },
    { en: "decide", kh: "សម្រេចចិត្ត" },
    { en: "different", kh: "ខុសគ្នា" },
    { en: "difficult", kh: "ពិបាក" },
    { en: "dirty", kh: "កខ្វក់" },
    { en: "early", kh: "ព្រឹក" },
    { en: "easy", kh: "ងាយស្រួល" },
    { en: "empty", kh: "ទទេ" },
    { en: "enjoy", kh: "រីករាយ" },
    { en: "explain", kh: "ពន្យល់" },
    { en: "fall", kh: "ដួល" },
    { en: "far", kh: "ឆ្ងាយ" },
    { en: "fast", kh: "លឿន" },
    { en: "find", kh: "រក" },
    { en: "finish", kh: "បញ្ចប់" },
    { en: "forget", kh: "ភ្លេច" },
    { en: "friendly", kh: "រាក់ទាក់" },
    { en: "funny", kh: "គួរឱ្យអស់សំណើច" },
    { en: "heavy", kh: "ធ្ងន់" },
    { en: "hungry", kh: "ឃ្លាន" },
    { en: "important", kh: "សំខាន់" },
    { en: "interesting", kh: "គួរឱ្យចាប់អារម្មណ៍" },
    { en: "kind", kh: "ចិត្តល្អ" },
    { en: "laugh", kh: "សើច" },
    { en: "learn", kh: "រៀន" },
    { en: "leave", kh: "ចាកចេញ" },
    { en: "light", kh: "ស្រាល" },
    { en: "loud", kh: "ខ្លាំង" },
    { en: "lovely", kh: "គួរឱ្យស្រឡាញ់" },
    { en: "mistake", kh: "កំហុស" },
    { en: "near", kh: "ជិត" },
    { en: "noisy", kh: "រំខាន" },
    { en: "often", kh: "ញឹកញាប់" },
    { en: "quiet", kh: "ស្ងាត់" },
    { en: "remember", kh: "ចងចាំ" },
    { en: "slow", kh: "យឺត" },
    { en: "sorry", kh: "សុំទោស" },
    { en: "thirsty", kh: "ស្រេកទឹក" },
    { en: "tired", kh: "នឿយហត់" },
    { en: "understand", kh: "យល់" },
    { en: "welcome", kh: "ស្វាគមន៍" }
];

// ----------------------------------------------
// Render vocabulary grid
// ----------------------------------------------
function renderVocabulary() {
    const grid = document.getElementById('vocabGrid');
    if (!grid) return;
    grid.innerHTML = '';
    vocabulary.forEach(word => {
        const card = document.createElement('div');
        card.className = 'vocab-card';
        card.innerHTML = `
            <div class="english">${word.en}</div>
            <div class="khmer">${word.kh}</div>
            <button onclick="speak('${word.en}')" title="Listen">🔊</button>
        `;
        grid.appendChild(card);
    });
}

// ----------------------------------------------
// Text-to-Speech function
// ----------------------------------------------
function speak(text) {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';       // English
    utterance.rate = 0.9;           // Slightly slower for learners
    utterance.pitch = 1;
    window.speechSynthesis.speak(utterance);
}

// ----------------------------------------------
// Quiz logic
// ----------------------------------------------
function checkAnswer(selected) {
    const correct = "apple";
    const feedback = document.getElementById('quiz-feedback');
    if (selected === correct) {
        feedback.innerHTML = "✅ Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.innerHTML = "❌ Not quite. Try again!";
        feedback.style.color = "red";
    }
}

// ----------------------------------------------
// Subscribe form handler
// ----------------------------------------------
document.getElementById('subscribeForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const message = document.getElementById('form-message');
    if (email) {
        message.textContent = `📧 Thanks! We'll send lessons to ${email}`;
        this.reset();
    } else {
        message.textContent = "Please enter a valid email.";
    }
});

// ----------------------------------------------
// Smooth scroll for navigation
// ----------------------------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ----------------------------------------------
// Initialize on page load
// ----------------------------------------------
window.addEventListener('DOMContentLoaded', renderVocabulary);
