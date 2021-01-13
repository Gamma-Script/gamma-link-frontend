import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeshabilitarCategoriaComponent } from './deshabilitar-categoria.component';

describe('DeshabilitarCategoriaComponent', () => {
  let component: DeshabilitarCategoriaComponent;
  let fixture: ComponentFixture<DeshabilitarCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeshabilitarCategoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeshabilitarCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
