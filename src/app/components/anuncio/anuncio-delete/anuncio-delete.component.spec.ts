import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioDeleteComponent } from './anuncio-delete.component';

describe('AnuncioDeleteComponent', () => {
  let component: AnuncioDeleteComponent;
  let fixture: ComponentFixture<AnuncioDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnuncioDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
