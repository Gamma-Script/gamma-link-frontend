import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { publish } from 'rxjs-compat/operator/publish';
import { Anuncio } from 'src/app/models/anuncio';
import { Proveedor } from 'src/app/models/proveedor';
import { Usuario } from 'src/app/models/usuario';
import { AnuncioService } from 'src/app/services/anuncio.service';
import Swal from 'sweetalert2';
import { $ } from 'protractor';
import { Router } from '@angular/router';
import { AngularFileUploaderComponent } from 'angular-file-uploader';
import { urlBaseImagen } from '../../../services/global';
declare var jQuery: any;

@Component({
  selector: 'app-anuncio-new',
  templateUrl: './anuncio-new.component.html',
  styleUrls: ['./anuncio-new.component.css']
})
export class AnuncioNewComponent implements OnInit {

  //variable que almacenara los parametros del formBuilder
  @Output() eventEmitter = new EventEmitter();
  checkFormCreate;
  aNew : Anuncio = new Anuncio(0,'','','','','',0,0);

  // Upload Image
  @ViewChild('fileUpload2') private fileUpload2:  AngularFileUploaderComponent;
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
    public formBuilder: FormBuilder,
    public anuncioservices: AnuncioService,
    public router : Router
  ) {
    //Validators para los datos de los imputs con los nombres de los elementos del formulario
    this.checkFormCreate = formBuilder.group
      ({
        nombreNew: ['', Validators.required],
        descripcionNew: ['', Validators.required],
        fechaPublicacionNew: ['', Validators.required],
        fechaDeBajaNew: ['', Validators.required],
        urlImagenNew: ['',]
      })
  }

  ngOnInit(): void { }

  //Metodo para el ingreso de un anuncio 
  onSubmit(data) {
    let proveedor = JSON.parse(localStorage.getItem('proveedor'));
    this.aNew.nombre = data.nombreNew;
    this.aNew.descripcion = data.descripcionNew;
    this.aNew.fecha_publicacion = data.fechaPublicacionNew;
    this.aNew.fecha_baja = data.fechaDeBajaNew;
    this.aNew.proveedor_id = proveedor.id;

    (function ($) {
      "use strict";
      $('#newUserModal').modal('hide');
    })(jQuery);

    this.anuncioservices.addAnuncio(this.aNew).subscribe({
      next: (data) =>{
        this.clear();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El anuncio ha sido creado correctamente.',
          showConfirmButton: false,
          timer: 2000
        });
      },
      error: (e) => {
        console.log(e);
      }
    });
    this.clear();
    this.eventEmitter.emit();
  }

  imageUpload(datos){
    this.aNew.imagen = datos.body.image;
    console.log(this.aNew.imagen)
  }
  
  //metodo que limpia el formulario
  clear() {
    this.checkFormCreate.reset();
    this.fileUpload2.resetFileUpload();
  }
}
