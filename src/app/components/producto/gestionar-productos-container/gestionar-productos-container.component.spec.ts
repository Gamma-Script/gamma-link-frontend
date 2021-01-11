import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarProductosContainerComponent } from './gestionar-productos-container.component';

describe('GestionarProductosContainerComponent', () => {
  let component: GestionarProductosContainerComponent;
  let fixture: ComponentFixture<GestionarProductosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarProductosContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarProductosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
