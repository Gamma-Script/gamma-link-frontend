import { Component, OnInit } from '@angular/core';
import { AnuncioService } from 'src/app/services/anuncio.service';

@Component({
  selector: 'app-anuncio-content',
  templateUrl: './anuncio-content.component.html',
  styleUrls: ['./anuncio-content.component.css']
})
export class AnuncioContentComponent implements OnInit {

  constructor(
    private anuncioService : AnuncioService
  ) { }

  ngOnInit(): void {
  }

}
