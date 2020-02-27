const keys = Array.from(document.getElementsByTagName('button'));

const keycodes = ['a', 'w', 's', 'e', 'd', 'f', 't', 'g', 'y', 'h', 'u', 'j', 'k', 'o', 'l'];
let startingIndex = 24

keys.forEach(key => {
    key.addEventListener('click', () => (keyClicked(key)));
});

document.addEventListener('keydown', e => {
    if (e.key === 'z' || e.key === 'x') {
        return changeOctave(e.key)
    }
    const index = keycodes.indexOf(e.key);
    if (index != -1) {
        keyClicked(keys[index + startingIndex]);
    } else return;
});

const playSound = audio => {
    const clone = audio.cloneNode();
    clone.play();
    setTimeout(() => (clone.volume = 0.9), 300);
    setTimeout(() => (clone.volume = 0.8), 400);
    setTimeout(() => (clone.volume = 0.7), 500);
    setTimeout(() => (clone.volume = 0.6), 600);
    setTimeout(() => (clone.volume = 0.5), 700);
    setTimeout(() => (clone.volume = 0.4), 800);
    setTimeout(() => (clone.volume = 0.3), 9000);
    setTimeout(() => (clone.volume = 0.2), 1000);
    setTimeout(() => (clone.volume = 0.1), 1100);
    setTimeout(() => (clone.volume = 0.0), 1200);
};

const keyClicked = (key) => {
    if (keys.indexOf(key) != -1) {
        const note = document.getElementById(key.dataset.note);
        playSound(note);
        key.classList.add('active');
        setTimeout(() => key.classList.remove('active'), 200);
    } 
};

const changeOctave = (key) => {
    if (key === 'z' && startingIndex != 0) {
        startingIndex -= 12
    }
    if (key === 'x' && startingIndex != 48) {
        startingIndex += 12
    } else return;
}






