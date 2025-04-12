import { Component } from '@angular/core';
import { HolaMundoEstilosoComponent } from './hola-mundo-estiloso/hola-mundo-estiloso.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HolaMundoEstilosoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tu-proyecto';
}
