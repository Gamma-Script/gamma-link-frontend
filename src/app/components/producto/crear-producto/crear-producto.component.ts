import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  checkForm: FormGroup;
  submitted: boolean = false;
  producto: Producto;

  constructor(private router: Router, private fb: FormBuilder, private ps: ProductoService) { 
    this.checkForm =  fb.group({
      nombre: ["", Validators.required],
      descripcion: [""],
      precio: [0.00, Validators.min(0.00)],
      marca: [""],
      categoria: [""]
    }
    );
  }

  ngOnInit(): void {
  }

  //obtencion de los errores
  get name(){ return this.checkForm.controls; }
  get price(){ return this.checkForm.controls; }

  //metodo para controlar los datos ingresados en el formulario
  onSubmit(data){
    this.submitted = true;
    if (this.checkForm.invalid) {
      return;
    }
    else{let producto: Producto = new Producto(
        data.nombre,
        "id",
        data.marca,
        data.descripcion,
        data.categoria,
        data.precio,
        "foto"
      );
      this.crearProducto(producto);
      this.cambiar();
    }
  }

   //metodo para cambiar el valor de submitted
   cambiar(){
    if(this.submitted == true){
      this.submitted = false;
      this.checkForm.reset();
    }
  }

  //Metodo para cancelar la accion y volver a la lista de productos
  cancelar(){
    this.cambiar();
    this.router.navigate(["gestionar-productos"])
  }

  addProducto(producto: Producto){
    this.ps.addProducto(producto).subscribe(
      producto => {
        this.producto = producto;
        console.log(this.producto);
      },
      (error : any) =>{
        console.log(error);
      }
    );
  }

  //Metodo para crear un nuevo producto y volver a la lista de productos
  crearProducto(producto: Producto){
    this.addProducto(producto);
    this.router.navigate(["gestionar-productos"])
  }
}
