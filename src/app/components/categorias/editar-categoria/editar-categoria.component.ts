import { Component, Input, OnInit, OnChanges, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categorias';
import { AngularFileUploaderComponent } from 'angular-file-uploader';
import { urlBaseImagen } from '../../../services/global';
import { CategoriasService } from 'src/app/services/categorias.service';
import Swal from 'sweetalert2';
import { $ } from 'protractor';
declare var jQuery: any;

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit, OnChanges {
  formulario;
  @Output() eventEmitEditar = new EventEmitter();
  @Input() categoriaEditar: Categoria = new Categoria(0, null, '', '', '', 0);

  // Upload Image
  @ViewChild('fileUpload1') private fileUpload1: AngularFileUploaderComponent;
  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png",
    maxSize: "15",
    uploadAPI: {
      url: `${urlBaseImagen}/uploadImage`,
      method: "POST",
      headers: {
        "Authorization": ``
      },
      params: {
        'type': 4
      }
    },
    theme: "attachPin",
    hideResetBtn: true,
    hideSelectBtn: true,
    replaceTexts: {
      selectFileBtn: 'Seleccione la imagen',
      uploadBtn: 'Subir Imagen',
      dragNDropBox: 'Arrastra la imagen',
      attachPinBtn: 'Selecciona la imagen',
      afterUploadMsg_success: 'Subida Exitosa',
      afterUploadMsg_error: 'Algo ha fallado, intenta nuevamente!'
    }
  };


  constructor(public modal: NgbModal, private formBuilder: FormBuilder, private categoryService: CategoriasService) {
    this.formulario = formBuilder.group({ nombre: ['', Validators.required], descripcion: ['', Validators.required] })
  }
  public options = {
    position: ['middle', 'right'],
    timeOut: 3000,
    animate: 'fade',
    showProgressBar: false,
    maxStack: 1,
    pauseOnHover: true
  };

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.categoriaEditar.currentValue != change.categoriaEditar.previousValue) {
      this.inicializarForm();
    }
  }

  inicializarForm() {
    this.formulario = this.formBuilder.group({
      nombre: [this.categoriaEditar.nombre, Validators.required],
      descripcion: [this.categoriaEditar.descripcion, Validators.required]
    })
  }

  cancelar() {
    this.formulario.reset();
    this.inicializarForm();
    this.fileUpload1.resetFileUpload();
  }

  onSubmit(data) {
    this.categoriaEditar.nombre = data.nombre;
    this.categoriaEditar.descripcion = data.descripcion;
    console.log(this.categoriaEditar);
    this.categoryService.updateCategory(this.categoriaEditar).subscribe({
      next: () => {
        (function ($) {
          "use strict";
          $('#editarCategoriaModal').modal('hide');
        })(jQuery);
        this.eventEmitEditar.emit();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'La categoria se actualizo de manera exitosa',
          showConfirmButton: false,
          timer: 2000
        });
        this.cancelar();
      },
      error: (e) => console.log(e)
    });
  }

  imageUpload(datos) {
    this.categoriaEditar.imagen = datos.body.image;
  }
}
