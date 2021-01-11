import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeshabilitarProductoComponent } from './deshabilitar-producto.component';

describe('DeshabilitarProductoComponent', () => {
  let component: DeshabilitarProductoComponent;
  let fixture: ComponentFixture<DeshabilitarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeshabilitarProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeshabilitarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
