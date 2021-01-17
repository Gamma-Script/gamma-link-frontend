import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Proveedor } from 'src/app/models/proveedor';
import { Puntuacion } from 'src/app/models/puntuacion';
import { PuntuacionService } from 'src/app/services/puntuacion.service';
import { ProveedorService } from '../../../services/proveedor.service'
import Swal from 'sweetalert2';
import { clear } from 'console';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  cliente = JSON.parse(localStorage.getItem('cliente'));
  @Input() proveedor: Proveedor;
  @Output() eventEmitComentario = new EventEmitter();
  calificacion = 0;
  formulario;

  constructor(
    private formBuilder: FormBuilder,
    private proveedorService: ProveedorService,
    private puntuacionService: PuntuacionService
  ) {
    this.formulario = this.formBuilder.group({
      comentario: ['', Validators.required]
    });
  }

  ngOnInit(): void {

  }

  onSubmit(data) {
    let puntuacion = new Puntuacion(0,
      this.proveedor.id,
      this.cliente.id,
      data.comentario,
      this.calificacion
    );

    this.puntuacionService.addComment(puntuacion).subscribe({
      next: (data) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Gracias por tu valoración.',
          showConfirmButton: false,
          timer: 2000
        });
        this.clear();
        this.eventEmitComentario.emit();
      }
    });
  }

  clear() {
    this.formulario.reset();
    this.calificacion = 0;
  }
}
