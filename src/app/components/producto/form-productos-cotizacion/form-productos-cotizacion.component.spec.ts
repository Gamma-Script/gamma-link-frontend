import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductosCotizacionComponent } from './form-productos-cotizacion.component';

describe('FormProductosCotizacionComponent', () => {
  let component: FormProductosCotizacionComponent;
  let fixture: ComponentFixture<FormProductosCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProductosCotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductosCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
