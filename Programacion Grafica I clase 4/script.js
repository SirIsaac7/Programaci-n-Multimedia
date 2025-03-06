function buscarPalabra(){
    const texto = document.getElementById('caja').value;
    const palabraAbuscar = document.getElementById('cajita').value;
    const palabras = texto.split(/\s+/);
    const posicion = palabras.indexOf(palabraAbuscar);
    if (posicion !== -1) {
        document.getElementById('res').value = `Palabra encontrada en la posición: ${posicion}`;
    } else {
        document.getElementById('res').value = "Palabra no encontrada";
    }
}