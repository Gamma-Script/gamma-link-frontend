import { Component, OnInit } from '@angular/core';
import{NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categorias';
@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {
  formulario;
  categoria:Categoria;
  constructor(public modal:NgbModal,private formBuilder:FormBuilder) {
    this.formulario=formBuilder.group({nombre:['',Validators.required],descripcion:['',Validators.required]})
  }
  inicializarForm(){
    this.formulario=this.formBuilder.group({
      nombre:['',Validators.required],
      descripcion:['',Validators.required]})
  }
  cancelar(){
    this.formulario.reset();
    this.inicializarForm();
  }

  crear(categoria:Categoria){

  }
  ngOnInit(): void {
  }

}
