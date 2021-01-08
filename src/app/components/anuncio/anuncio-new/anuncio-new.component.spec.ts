import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnuncioNewComponent } from './anuncio-new.component';

describe('AnuncioNewComponent', () => {
  let component: AnuncioNewComponent;
  let fixture: ComponentFixture<AnuncioNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnuncioNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnuncioNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
