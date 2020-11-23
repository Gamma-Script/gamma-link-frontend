import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioContentComponent } from './anuncio-content.component';

describe('AnuncioContentComponent', () => {
  let component: AnuncioContentComponent;
  let fixture: ComponentFixture<AnuncioContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnuncioContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
