import { Component } from '@angular/core';
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';
import {NgFor, NgStyle } from '@angular/common';

@Component({
  selector: 'app-hola-mundo-estiloso',
  templateUrl: './hola-mundo-estiloso.component.html',
  styleUrls: ['./hola-mundo-estiloso.component.css'],
  imports: [NgFor, NgStyle],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        animate('1s ease-out', keyframes([
          style({ opacity: 0, transform: 'translateY(20px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ])),
      ]),
    ]),
  ],
})
export class HolaMundoEstilosoComponent {
  drops: any[] = [];

  ngOnInit(): void {
    // Crear burbujas
    for (let i = 0; i < 100; i++) {
      const left = Math.random() * 100; // Posición horizontal aleatoria
      const size = Math.random() * 20 + 10; // Tamaño aleatorio entre 10px y 30px
      const delay = Math.random() * 3; // Retraso aleatorio antes de que empiece la animación
      const duration = 4 + Math.random() * 4; // Duración aleatoria entre 4s y 8s

      this.drops.push({
        style: {
          left: `${left}vw`, // Debería estar en porcentajes para estar dentro de la pantalla
          bottom: `0px`, // Hace que las burbujas comiencen desde el fondo visible
          width: `${size}px`, // Ancho de la burbuja
          height: `${size}px`, // Alto de la burbuja
          borderRadius: '50%',
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
        },
      });
    }
    console.log(this.drops);
  }
}
