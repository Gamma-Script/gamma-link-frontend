import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotizacionContainerComponent } from './cotizacion-container.component';

describe('CotizacionContainerComponent', () => {
  let component: CotizacionContainerComponent;
  let fixture: ComponentFixture<CotizacionContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CotizacionContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CotizacionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
