import { Component, OnInit } from '@angular/core';
import{NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { AnuncioService } from 'src/app/services/anuncio.service';
import Swal from 'sweetalert2';
import { Input } from '@angular/core';

@Component({
  selector: 'app-anuncio-delete',
  templateUrl: './anuncio-delete.component.html',
  styleUrls: ['./anuncio-delete.component.css']
})
export class AnuncioDeleteComponent implements OnInit {

  constructor(private as: AnuncioService) { }

  @Input() anuncio;

  ngOnInit(): void {
  }

/*
  eliminarAnuncio(){
    this.as.deleteAnuncio(this.anuncio.id);
    this.onSuccess();
  }
*/
onSuccess(){
    Swal.fire({
        position: 'center',
        title: 'Eliminar',
        text: `El Anuncio ${this.anuncio.name} ha sido eliminado`,
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
    })
}


  

}
