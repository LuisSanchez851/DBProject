import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasDevolucionesComponent } from './compras-devoluciones.component';

describe('ComprasDevolucionesComponent', () => {
  let component: ComprasDevolucionesComponent;
  let fixture: ComponentFixture<ComprasDevolucionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComprasDevolucionesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComprasDevolucionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
