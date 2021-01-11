import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosProveedorComponent } from './filtros-proveedor.component';

describe('FiltrosProveedorComponent', () => {
  let component: FiltrosProveedorComponent;
  let fixture: ComponentFixture<FiltrosProveedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltrosProveedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosProveedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
