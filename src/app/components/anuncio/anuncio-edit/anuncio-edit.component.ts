import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Anuncio } from 'src/app/models/anuncio';
import { AnuncioService } from 'src/app/services/anuncio.service';
import Swal from 'sweetalert2';
import { $ } from 'protractor';
import { AngularFileUploaderComponent } from 'angular-file-uploader';
import { urlBaseImagen } from '../../../services/global';
declare var jQuery: any;

@Component({
  selector: 'app-anuncio-edit',
  templateUrl: './anuncio-edit.component.html',
  styleUrls: ['./anuncio-edit.component.css']
})
export class AnuncioEditComponent implements OnInit {

  @Input() anuncioEdit: Anuncio = new Anuncio(0,'','','','','',0,0);
  anunciosList: Anuncio[] = null;
  checkForm;

  // Upload Image
  @ViewChild('fileUpload1') private fileUpload1:  AngularFileUploaderComponent;
  public afuConfig = {
    multiple: false,
    formatsAllowed: ".jpg,.png",
    maxSize: "15",
    uploadAPI:  {
      url: `${urlBaseImagen}/uploadImage`,
      method: "POST",
      headers: {
        "Authorization" : ``
      },
      params: {
        'type': 3
      }
    },
    theme: "dragNDrop",
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

  constructor(
    private anuncioService: AnuncioService,
    public formBuilder: FormBuilder
  ) {

    //Validators para los datos de los imputs con los nombres de los elementos del formulario
    this.checkForm = this.formBuilder.group
      ({
        nombre: [, Validators.required],
        descripcion: [, Validators.required],
        fechaPublicacion: [, Validators.required],
        fechaDeBaja: [, Validators.required],
        urlImagen: ['',]
      });
  }

  ngOnInit(): void {
  }

  loadData() {
    this.anunciosList = null;
    this.checkForm = this.formBuilder.group({
      nombre: [this.anuncioEdit.nombre, Validators.required],
      descripcion: [this.anuncioEdit.descripcion, Validators.required],
      fechaPublicacion: [this.anuncioEdit.fecha_publicacion, Validators.required],
      fechaDeBaja: [this.anuncioEdit.fecha_baja, Validators.required],
      urlImagen: [,]
    });

    (function ($) {
      "use strict";
      $('#editModal').modal('show');
    })(jQuery);
  }

  //Metodo que manda los parametros para crear un nuevo anuncio y actualizarlo de un anuncio 
  onSubmit(data) {
    this.anuncioEdit.nombre = data.nombre;
    this.anuncioEdit.descripcion = data.descripcion;
    this.anuncioEdit.fecha_baja = data.fechaDeBaja;
    this.anuncioEdit.fecha_publicacion = data.fechaPublicacion;
    this.clear();

    (function ($) {
      "use strict";
      $('#editModal').modal('hide');
    })(jQuery);

    this.anuncioService.updateAnuncio(this.anuncioEdit).subscribe({
      next: (data) => {
        this.getAnuncios();
        this.clear();
        this.anunciosList = null;
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El anuncio ha sido actualizado correctamente.',
          showConfirmButton: false,
          timer: 2000
        });
      },
      error: (e) => console.log(e)
    });
  }

  imageUpload(datos){
    this.anuncioEdit.imagen = datos.body.image;
  }

  //metodo que limpia el formulario
  clear() {
    this.checkForm.reset();
    this.fileUpload1.resetFileUpload();
  }

  getAnuncios(){
    let proveedor = JSON.parse(localStorage.getItem('proveedor'));
    this.anuncioService.getAnuncios(proveedor.id).subscribe({
      next: (list) => this.anunciosList = list,
      error: (e) => console.log(e)
    });
  }
}
