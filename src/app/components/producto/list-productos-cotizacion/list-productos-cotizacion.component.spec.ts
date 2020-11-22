import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductosCotizacionComponent } from './list-productos-cotizacion.component';

describe('ListProductosCotizacionComponent', () => {
  let component: ListProductosCotizacionComponent;
  let fixture: ComponentFixture<ListProductosCotizacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductosCotizacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductosCotizacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
