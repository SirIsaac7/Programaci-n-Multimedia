// Obtener referencias a los elementos del DOM
const volumeSlider = document.getElementById('volume');
const volumeValue = document.getElementById('volume-value');
const musicCheckbox = document.getElementById('music');
const effectsCheckbox = document.getElementById('effects');
const qualitySelect = document.getElementById('quality');
const fullscreenCheckbox = document.getElementById('fullscreen');
const sensitivitySlider = document.getElementById('sensitivity');
const sensitivityValue = document.getElementById('sensitivity-value');
const invertYCheckbox = document.getElementById('invert-y');
const saveBtn = document.getElementById('save-btn');
const resetBtn = document.getElementById('reset-btn');
const backBtn = document.getElementById('back-btn');

// Valores por defecto
const defaultOptions = {
    volume: 70,
    music: true,
    effects: true,
    quality: 'medium',
    fullscreen: false,
    sensitivity: 5,
    invertY: false
};

// Cargar opciones guardadas o usar valores por defecto
let gameOptions = loadOptions() || {...defaultOptions};

// Inicializar controles con valores guardados
function initializeControls() {
    volumeSlider.value = gameOptions.volume;
    volumeValue.textContent = `${gameOptions.volume}%`;
    musicCheckbox.checked = gameOptions.music;
    effectsCheckbox.checked = gameOptions.effects;
    qualitySelect.value = gameOptions.quality;
    fullscreenCheckbox.checked = gameOptions.fullscreen;
    sensitivitySlider.value = gameOptions.sensitivity;
    sensitivityValue.textContent = `${gameOptions.sensitivity}`;
    invertYCheckbox.checked = gameOptions.invertY;
}

// Guardar opciones en localStorage
function saveOptions() {
    localStorage.setItem('gameOptions', JSON.stringify(gameOptions));
    alert('Opciones guardadas correctamente');
}

// Cargar opciones desde localStorage
function loadOptions() {
    const savedOptions = localStorage.getItem('gameOptions');
    return savedOptions ? JSON.parse(savedOptions) : null;
}

// Restablecer opciones a valores por defecto
function resetOptions() {
    gameOptions = {...defaultOptions};
    initializeControls();
    saveOptions();
}

// Event listeners para los controles
volumeSlider.addEventListener('input', () => {
    gameOptions.volume = volumeSlider.value;
    volumeValue.textContent = `${volumeSlider.value}%`;
});

musicCheckbox.addEventListener('change', () => {
    gameOptions.music = musicCheckbox.checked;
});

effectsCheckbox.addEventListener('change', () => {
    gameOptions.effects = effectsCheckbox.checked;
});

qualitySelect.addEventListener('change', () => {
    gameOptions.quality = qualitySelect.value;
});

fullscreenCheckbox.addEventListener('change', () => {
    gameOptions.fullscreen = fullscreenCheckbox.checked;
});

sensitivitySlider.addEventListener('input', () => {
    gameOptions.sensitivity = sensitivitySlider.value;
    sensitivityValue.textContent = `${sensitivitySlider.value}`;
});

invertYCheckbox.addEventListener('change', () => {
    gameOptions.invertY = invertYCheckbox.checked;
});

// Event listeners para los botones
saveBtn.addEventListener('click', saveOptions);

resetBtn.addEventListener('click', () => {
    if (confirm('¿Estás seguro de que quieres restablecer todas las opciones a sus valores predeterminados?')) {
        resetOptions();
    }
});

backBtn.addEventListener('click', () => {
    // Aquí puedes agregar la lógica para volver a la pantalla anterior
    // Por ejemplo, redirigir a la página principal del juego
    if (confirm('¿Quieres volver sin guardar los cambios?')) {
        // Redirigir a la página principal (esto es solo un ejemplo)
        // window.location.href = 'index.html';
        alert('Volviendo a la pantalla principal...');
        location.href="index.html";
    }
});

// Inicializar controles al cargar la página
document.addEventListener('DOMContentLoaded', initializeControls);