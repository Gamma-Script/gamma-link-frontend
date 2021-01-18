import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/producto';
import { AngularFileUploaderComponent } from 'angular-file-uploader';
import { urlBaseImagen } from '../../../services/global';
import Swal from 'sweetalert2';
import { $ } from 'protractor';
import { Categoria } from 'src/app/models/categorias';
import { Marca } from 'src/app/models/marca';
import { CategoriasService } from 'src/app/services/categorias.service';
declare var jQuery: any;

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  @Output() createEmit = new EventEmitter();
  @Input() producto: Producto;
  proveedor = JSON.parse(localStorage.getItem('proveedor'));
  checkFormCreate: FormGroup;
  categorias: Categoria[] = [];
  marcas: Marca[] = [];

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
        'type': 1
      }
    },
    theme: "attachPin",
    hideResetBtn: true,
    hideSelectBtn: true,
    replaceTexts: {
      selectFileBtn: 'Seleccione la imagen',
      uploadBtn: 'Subir Imagen',
      attachPinBtn: 'Selecciona la imagen',
      afterUploadMsg_success: 'Subida Exitosa',
      afterUploadMsg_error: 'Algo ha fallado, intenta nuevamente!'
    }
  };

  constructor(
    private fb: FormBuilder,
    private productoService: ProductoService,
    private categoriaService: CategoriasService,
  ) {
    this.checkFormCreate = fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: [0.00, [Validators.min(0.00), Validators.required]],
      marca: [''],
      categoria: ['']
    });
  }

  ngOnInit(): void { }

  //metodo para controlar los datos ingresados en el formulario
  onSubmit(data) {
    this.producto.nombre = data.nombre;
    this.producto.marca_id = data.marca;
    this.producto.categoria_id = data.categoria;
    this.producto.descripcion = data.descripcion;
    this.producto.precio = data.precio
    this.addProducto(this.producto);
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.producto.currentValue != change.producto.previousValue) {
      this.inicializarForm();
    }
  }

  inicializarForm() {
    this.categoriaService.getCategoriasByProvider(this.proveedor.id).subscribe({
      next: (categorias) => this.categorias = categorias,
      error: (e) => console.log(e)
    });

    this.productoService.getMarcas().subscribe({
      next: (marcas) => this.marcas = marcas,
      error: (e) => console.log(e)
    });
  }

  clear() {
    this.checkFormCreate.reset();
    this.inicializarForm();
    this.fileUpload2.resetFileUpload();
  }

  imageUpload(datos) {
    this.producto.imagen = datos.body.image;
  }

  addProducto(producto: Producto) {
    this.productoService.addProducto(producto).subscribe({
      next: (data) => {
        (function ($) {
          "use strict";
          $('#agregarProducto').modal('hide');
        })(jQuery);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Se registro el producto de manera exitosa',
          showConfirmButton: false,
          timer: 2000
        });

        this.createEmit.emit();
        this.clear();
      },
      error: (e) => console.log(e) 
    });
  }
}