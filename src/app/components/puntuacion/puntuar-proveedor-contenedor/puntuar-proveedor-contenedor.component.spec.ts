import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuntuarProveedorContenedorComponent } from './puntuar-proveedor-contenedor.component';

describe('PuntuarProveedorContenedorComponent', () => {
  let component: PuntuarProveedorContenedorComponent;
  let fixture: ComponentFixture<PuntuarProveedorContenedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PuntuarProveedorContenedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PuntuarProveedorContenedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
