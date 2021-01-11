import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { Anuncio } from 'src/app/models/anuncio';
import { AnuncioService } from 'src/app/services/anuncio.service';
import Swal from 'sweetalert2';
import { anuncios } from './anuncio-data';
import { $ } from 'protractor';
import { OutgoingMessage } from 'http';
declare var jQuery:any;

@Component({
  selector: 'app-anuncio-list',
  templateUrl: './anuncio-list.component.html',
  styleUrls: ['./anuncio-list.component.css']
})
export class AnuncioListComponent implements OnInit {

  anuncios : Anuncio[];
  @Output() idEdit = new EventEmitter <number>();

  constructor(
    private anuncioService : AnuncioService,
    public formBuilder : FormBuilder
    ) {}

//----------------inicio del componente-------------------------------
  ngOnInit(): void {
    this.anuncios = this.anuncioService.getsAnunciosPrueba();
  }
//-----------------metodo para la propiedad click de editar------------------------------------
  getAnuncio(idAnuncio : number)
  {

    console.log("Estoy en el metodo y se emitio algo");
    this.idEdit.emit(idAnuncio);
    
    (function($){
      "use strict";
      $('#exampleModal').modal('show');
  })(jQuery);
    
  //--------------------------Metodo que da de baja los anuncios al hacer click------------------------------------
    this.anuncioService.getsAnuncios().subscribe(
      anuncios => {
        this.anuncios = anuncios;
        console.log(this.anuncios);
      },
      (error : any) => {
        console.log(error);
      }
    )
    
  }

  darDeBaja(anuncio:Anuncio)
  {
    Swal.fire({
      title: 'Dar de baja',
      text: "Estas seguro que deseas dar de baja este anuncio",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, dar de baja!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Anuncio dado de baja:',
          'El anuncio se ha dado de baja de manera exitosa',
          'success'
        )
        anuncio.estado = 0;
        this.anuncioService.update(anuncio);
      }
    })




  }

}
