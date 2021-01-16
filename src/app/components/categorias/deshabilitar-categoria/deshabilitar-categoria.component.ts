import { Component, OnInit, Input } from '@angular/core';
import { CategoriasService } from '../../../services/categorias.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { Categoria } from 'src/app/models/categorias';

@Component({
  selector: 'app-deshabilitar-categoria',
  templateUrl: './deshabilitar-categoria.component.html',
  styleUrls: ['./deshabilitar-categoria.component.css']
})
export class DeshabilitarCategoriaComponent implements OnInit {

  constructor(private cs: CategoriasService) { }

  @Input() categoria;

  ngOnInit(): void {
  }

  onSuccess() {
    Swal.fire({
      position: 'center',
      title: 'Deshabilitar',
      text: `La Categoria ${this.categoria.name} se ha deshabilitado correctamente`,
      icon: 'success',
      showConfirmButton: true
    })
  }

}
