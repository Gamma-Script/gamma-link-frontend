import { Component, OnInit, Input, SimpleChanges, ViewChild, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/producto';
import { Categoria } from 'src/app/models/categorias';
import { Marca } from 'src/app/models/marca';
import { CategoriasService } from 'src/app/services/categorias.service';
import { urlBaseImagen } from '../../../services/global';
import { AngularFileUploaderComponent } from 'angular-file-uploader';
import Swal from 'sweetalert2';
import { $ } from 'protractor';
declare var jQuery: any;

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  @Input() producto: Producto = new Producto(0, '', 0, 0, '', 0, '');
  @Output() editEmit = new EventEmitter();
  proveedor = JSON.parse(localStorage.getItem('proveedor'));
  categorias: Categoria[] = [];
  marcas: Marca[] = [];
  checkForm: FormGroup;

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
    private router: Router,
    private fb: FormBuilder,
    private productoService: ProductoService,
    private categoriaService: CategoriasService,
  ) {
    this.checkForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      precio: ['', Validators.min(0.00)],
      marca: [''],
      categoria: ['']
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(change: SimpleChanges) {
    if (change.producto.currentValue != change.producto.previousValue) {
      this.inicializarForm();
    }
  }

  inicializarForm() {
    this.checkForm = this.fb.group({
      nombre: [this.producto.nombre, Validators.required],
      descripcion: [this.producto.descripcion, Validators.required],
      precio: [this.producto.precio, [Validators.min(1), Validators.required]],
      marca: [this.producto.marca_id],
      categoria: [this.producto.categoria_id]
    });

    this.categoriaService.getCategoriasByProvider(this.proveedor.id).subscribe({
      next: (categorias) => this.categorias = categorias,
      error: (e) => console.log(e)
    });

    this.productoService.getMarcas().subscribe({
      next: (marcas) => this.marcas = marcas,
      error: (e) => console.log(e)
    });
  }


  //metodo para controlar los datos ingresados en el formulario
  onSubmit(data) {
    let editProducto: Producto = new Producto(
      this.producto.id,
      data.nombre,
      data.marca,
      data.categoria,
      data.descripcion,
      data.precio,
      this.producto.imagen
    );

    this.productoService.updateProducto(editProducto).subscribe({
      next: (data) => {
        (function ($) {
          "use strict";
          $('#editarProducto').modal('hide');
        })(jQuery);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El producto se actualizo de manera exitosa',
          showConfirmButton: false,
          timer: 2000
        });

        this.editEmit.emit();
        this.clear();

      }
    });
  }

  clear() {
    this.checkForm.reset();
    this.inicializarForm();
    this.fileUpload1.resetFileUpload();
  }

  imageUpload(datos) {
    this.producto.imagen = datos.body.image;
  }
}
