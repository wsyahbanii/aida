// TEMPAT MENAMBAH CERITA BARU
const myStories = [
    {
        date: "12 Desember 2025",
        text: "Hari ini aku teringat bagaimana pertama kali kita bertemu. Langit sedang tidak begitu cerah, tapi senyummu mengalahkan segalanya."
    },
    {
        date: "12 Desember 2025",
        text: "hai hari ini aku sedang apa yak"
    },
];

let currentIndex = myStories.length - 1; // Mulai dari cerita terbaru

function updateDisplay() {
    const story = myStories[currentIndex];
    document.getElementById('story-date').innerText = story.date;
    document.getElementById('story-text').innerText = `"${story.text}"`;
    document.getElementById('date-picker').value = currentIndex;
}

function populateSelect() {
    const select = document.getElementById('date-picker');
    myStories.forEach((s, index) => {
        let opt = document.createElement('option');
        opt.value = index;
        opt.innerHTML = s.date;
        select.appendChild(opt);
    });
}

function prevStory() {
    if (currentIndex > 0) {
        currentIndex--;
        updateDisplay();
    }
}

function nextStory() {
    if (currentIndex < myStories.length - 1) {
        currentIndex++;
        updateDisplay();
    }
}

function jumpToStory(val) {
    currentIndex = parseInt(val);
    updateDisplay();
}

// Inisialisasi saat halaman dibuka
window.onload = () => {
    populateSelect();
    updateDisplay();
};