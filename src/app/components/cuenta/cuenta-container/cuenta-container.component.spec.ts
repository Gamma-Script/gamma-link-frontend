import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaContainerComponent } from './cuenta-container.component';

describe('CuentaContainerComponent', () => {
  let component: CuentaContainerComponent;
  let fixture: ComponentFixture<CuentaContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
