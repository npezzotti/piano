const keys = Array.from(document.getElementsByTagName('button'));

keys.forEach(key => {
    key.addEventListener('click', () => (keyClicked(key)));
});

const playSound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.9), 400);
    setTimeout(() => (clone.volume = 0.8), 500);
    setTimeout(() => (clone.volume = 0.7), 600);
    setTimeout(() => (clone.volume = 0.6), 700);
    setTimeout(() => (clone.volume = 0.5), 800);
    setTimeout(() => (clone.volume = 0.4), 900);
    setTimeout(() => (clone.volume = 0.3), 1000);
    setTimeout(() => (clone.volume = 0.2), 1100);
    setTimeout(() => (clone.volume = 0.1), 1200);
    setTimeout(() => (clone.volume = 0.0), 1300);
};

const keyClicked = (key) => {
    const note = document.getElementById(key.dataset.note);
    playSound(note);
    key.classList.add('active');
    setTimeout(() => key.classList.remove('active'), 200);
};

document.addEventListener('keydown', e => {
    e.key
});






