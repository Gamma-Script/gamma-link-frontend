import { Component, OnInit } from '@angular/core';
import{NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AnuncioService } from 'src/app/services/anuncio.service';

@Component({
  selector: 'app-anuncio-delete',
  templateUrl: './anuncio-delete.component.html',
  styleUrls: ['./anuncio-delete.component.css']
})
export class AnuncioDeleteComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }


  eliminarAnuncio(){
   
  }

}
