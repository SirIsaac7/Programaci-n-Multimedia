<template>
  <div class="space-background">
    <div class="shooting-star" v-for="n in 50" :key="n" :style="{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 5}s` }"></div>
    
    <!-- Hoyo negro animado detrás del texto -->
    <div class="earth-background"></div>

    <!-- Texto por delante -->
    <h1 class="galaxy-text">¡Hola Mundo!</h1>
      <p class="galaxy-text" style="font-size: 30px; bottom: 10px">Por Isaac Alejandro Tola</p>
  </div>
</template>
<style>
html, body {
  margin: 0;
  padding: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}
</style>

<style scoped>
.space-background {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: url('@/assets/space.jpg') no-repeat center center;
  background-size: cover;
  overflow: hidden;
}

/* Estrellas fugaces de fondo */
.shooting-star {
  position: absolute;
  width: 2px;
  height: 80px;
  background: linear-gradient(-45deg, white, transparent);
  opacity: 0.8;
  animation: shooting 5s linear infinite;
}

@keyframes shooting {
  0% {
    transform: translate(0, 0) rotate(45deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translate(-1000px, 1000px) rotate(45deg);
    opacity: 0;
  }
}

/* Texto con animación tipo tormenta galáctica */
.galaxy-text {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 5rem;
  font-weight: 800;
  background: linear-gradient(120deg, #ffffff, #00f0ff, #6b00ff, #ffffff);
  background-size: 300% 300%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: spaceFlow 5s ease-in-out infinite;
  text-align: center;
  text-shadow: 0 0 20px #ffffff33;
}

/* Movimiento del fondo dentro del texto */
@keyframes spaceFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.earth-background {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  transform: translate(-50%, -50%);
  background: url('https://upload.wikimedia.org/wikipedia/commons/9/97/The_Earth_seen_from_Apollo_17.jpg') no-repeat center center;
  background-size: cover;
  border-radius: 100%;
  animation: rotateEarth 60s linear infinite;
  filter: brightness(0.9) saturate(1.2) drop-shadow(0 0 10px #00ccff88);
  z-index: 0;
}

@keyframes rotateEarth {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

</style>
