import { Component, OnInit } from '@angular/core';
import { Anuncio } from 'src/app/models/anuncio';
import { AnuncioService } from 'src/app/services/anuncio.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-anuncio-list',
  templateUrl: './anuncio-list.component.html',
  styleUrls: ['./anuncio-list.component.css']
})
export class AnuncioListComponent implements OnInit {

  anuncios : Anuncio[];
  constructor(private anuncioService : AnuncioService) { }


  ngOnInit(): void {
    this.anuncios = this.anuncioService.getsAnuncios();
    console.log(this.anuncios);
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
