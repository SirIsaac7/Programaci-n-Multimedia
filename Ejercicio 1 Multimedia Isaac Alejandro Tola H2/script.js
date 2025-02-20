// Escena y renderizador
const escena = new THREE.Scene();
const renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);

// Cámara ortográfica para 2D
const ancho = window.innerWidth;
const alto = window.innerHeight;
const camara = new THREE.OrthographicCamera(ancho / -2, ancho / 2, alto / 2, alto / -2, 0.1, 1000);
camara.position.z = 10;

// Crear un hexágono
const tamaño = 50; // Radio del hexágono
const hexShape = new THREE.Shape();
for (let i = 0; i < 6; i++) {
    const angulo = (Math.PI / 3) * i;
    const x = tamaño * Math.cos(angulo);
    const y = tamaño * Math.sin(angulo);
    if (i === 0) {
        hexShape.moveTo(x, y);
    } else {
        hexShape.lineTo(x, y);
    }
}
hexShape.closePath();

// Convertir el hexágono en geometría
const geometry = new THREE.ShapeGeometry(hexShape);
const material = new THREE.MeshBasicMaterial({ color: 0xffff00, side: THREE.DoubleSide });
const hexagono = new THREE.Mesh(geometry, material);
hexagono.position.x = -80; 
escena.add(hexagono);

// Crear una estrella
const estrellaShape = new THREE.Shape();
const radioExterno = 50;
const radioInterno = 20;
for (let i = 0; i < 10; i++) {
    const angulo = (Math.PI / 5) * i;
    const radio = i % 2 === 0 ? radioExterno : radioInterno;
    const x = radio * Math.cos(angulo);
    const y = radio * Math.sin(angulo);
    if (i === 0) {
        estrellaShape.moveTo(x, y);
    } else {
        estrellaShape.lineTo(x, y);
    }
}
estrellaShape.closePath();

const estrellaGeometry = new THREE.ShapeGeometry(estrellaShape);
const estrellaMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, side: THREE.DoubleSide });
const estrella = new THREE.Mesh(estrellaGeometry, estrellaMaterial);
estrella.position.x = 80;
escena.add(estrella);


// Animación (opcional)
function animacion() {
    requestAnimationFrame(animacion);
    hexagono.rotation.z += 0.01; // Rotación en 2D
    estrella.rotation.z += 0.01; // Rotación en 2D
    renderizador.render(escena, camara);
}
animacion();

// Ajuste al redimensionar ventana
window.addEventListener('resize', () => {
    const ancho = window.innerWidth;
    const alto = window.innerHeight;
    camara.left = ancho / -2;
    camara.right = ancho / 2;
    camara.top = alto / 2;
    camara.bottom = alto / -2;
    camara.updateProjectionMatrix();
    renderizador.setSize(ancho, alto);
});

