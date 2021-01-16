import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categorias';
import { urlBaseImagen } from '../../../services/global';
import { AngularFileUploaderComponent } from 'angular-file-uploader';
import { CategoriasService } from 'src/app/services/categorias.service';
import Swal from 'sweetalert2';
import { $ } from 'protractor';
declare var jQuery: any;

@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {
  formulario;
  @Output() eventEmitCrear = new EventEmitter();
  categoria: Categoria = new Categoria(0, null, '', '', '', 0);
  proveedor = JSON.parse(localStorage.getItem('proveedor'));

  // Upload Image
  @ViewChild('fileUpload2') private fileUpload2: AngularFileUploaderComponent;
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
  inicializarForm() {
    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    })
  }
  cancelar() {
    this.formulario.reset();
    this.inicializarForm();
    this.categoria = new Categoria(0, null, '', '', '', 0);
    this.fileUpload2.resetFileUpload();
  }

  onSubmit(data) {
    this.categoria.nombre = data.nombre;
    this.categoria.descripcion = data.descripcion;
    this.categoria.proveedor_id = this.proveedor.id;

    this.categoryService.addCategory(this.categoria).subscribe({
      next: () => {

        (function ($) {
          "use strict";
          $('#crearCategoriaModal').modal('hide');
        })(jQuery);

        this.eventEmitCrear.emit();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'La categoria se creó de manera exitosa',
          showConfirmButton: false,
          timer: 2000
        });
        this.cancelar();
      },
      error: (e) => console.log(e)
    });

  }

  imageUpload(datos) {
    this.categoria.imagen = datos.body.image;
  }

  ngOnInit(): void {
  }

}
