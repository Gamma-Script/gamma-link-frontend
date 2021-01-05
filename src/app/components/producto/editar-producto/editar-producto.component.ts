import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router'
import { ProductoService } from '../../../services/producto.service';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  checkForm: FormGroup;
  submitted: boolean = false;
  producto : Producto = this.edithProducto();

  constructor(private router: Router, private fb: FormBuilder, private ps: ProductoService) { 
    this.checkForm =  this.fb.group({
      nombre: [this.producto.name, Validators.required],
      descripcion: [this.producto.descripcion],
      precio: [this.producto.precio, Validators.min(0.00)],
      marca: [this.producto.marca],
      categoria: [this.producto.categoria]
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
    else{
      let producto: Producto = new Producto(
      data.nombre,
      this.producto.id,
      data.marca,
      data.categoria,
      data.descripcion,
      data.precio,
      "foto"
    );
      console.log(producto)
      this.guardarProducto(producto)
      this.cambiar();
    }
  }

   //metodo para cambiar el valor de submitted
   cambiar(){
    if(this.submitted){
      this.submitted = false;
      this.checkForm.reset();
    }
  }

  //metodo que recibe el objeto producto
  edithProducto(){
    let id = localStorage.getItem("id");
    return this.ps.getProducto(id);
  }

  //Metodo del para cancelar y volver a la lista de productos
  cancelar(){
    this.cambiar();
    this.router.navigate(['gestionar-productos']);
  }

  //Metodo para guardar cambios y retornar a la lista de productos
  guardarProducto(producto: Producto){
    this.ps.updateProducto(producto);
    this.router.navigate(['gestionar-productos']);
  }
}
