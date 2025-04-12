import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolaMundoEstilosoComponent } from './hola-mundo-estiloso.component';

describe('HolaMundoEstilosoComponent', () => {
  let component: HolaMundoEstilosoComponent;
  let fixture: ComponentFixture<HolaMundoEstilosoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolaMundoEstilosoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HolaMundoEstilosoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
