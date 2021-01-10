import { Component, Input, OnInit ,OnChanges, SimpleChanges} from '@angular/core';
import { from } from 'rxjs';
import{NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Categoria } from 'src/app/models/categorias';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit ,OnChanges{
  formulario;
  @Input() categoriaEditar:Categoria;
  
  constructor(public modal:NgbModal,private formBuilder:FormBuilder) {
    this.formulario=formBuilder.group({nombre:['',Validators.required],descripcion:['',Validators.required]})
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
  ngOnChanges(change:SimpleChanges){
    if(change.categoriaEditar.currentValue!=change.categoriaEditar.previousValue){
      this.inicializarForm();
    }
  }
  inicializarForm(){
    this.formulario=this.formBuilder.group({
      nombre:[this.categoriaEditar.nombre,Validators.required],
      descripcion:[this.categoriaEditar.descripcion,Validators.required]})
  }
  cancelar(){
    this.formulario.reset();
    this.inicializarForm();
  }
  editar(nombre:String){

  }
  

}
