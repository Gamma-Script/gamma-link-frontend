import { Component, Host, Input, OnInit, Optional } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Anuncio } from 'src/app/models/anuncio';
import { Usuario } from 'src/app/models/Usuario';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { AnuncioContentComponent } from '../anuncio-content/anuncio-content.component';
import { AnuncioListComponent } from '../anuncio-list/anuncio-list.component';

@Component({
  selector: 'app-anuncio-edit',
  templateUrl: './anuncio-edit.component.html',
  styleUrls: ['./anuncio-edit.component.css']
})
export class AnuncioEditComponent implements OnInit {

anunciolist : AnuncioListComponent;

  idEdit : number;
  anuncioEdit : Anuncio;
  checkForm;

  constructor(
    private anuncioService : AnuncioService,
    public formBuilder :FormBuilder
  ) {
    //Validators para los datos de los imputs con los nombres de los elementos del formulario
    this.checkForm = this.formBuilder.group
    ({
      nombre : [,Validators.required],
     descripcion :  [,Validators.required],
     fechaPublicacion :  [,Validators.required],
     fechaDeBaja : [, Validators.required],
     urlImagen : ['', Validators.required]
    });
    

  } 

  //metodo que limpia el formulario
clear()
{
this.checkForm.reset();  
}

  ngOnInit(): void {

    console.log("Se inicio el componente");
  }

  
//-----------metodo que inicializa el formulario pero con los datos del objeto a editar------
private inicio()
{

//Validators para los datos de los imputs con los nombres de los elementos del formulario
this.checkForm = this.formBuilder.group
({
  nombre : [this.anuncioEdit.nombre,Validators.required],
 descripcion :  [this.anuncioEdit.descripcion,Validators.required],
 fechaPublicacion :  [this.anuncioEdit.fechaPublicacion,Validators.required],
 fechaDeBaja : [this.anuncioEdit.fechaBaja, Validators.required],
 urlImagen : [, Validators.required]
});

}

//------------------------------Metodo que asigna el objeto anuncio a edita, en funcion de su id-------------------------
public asignar(id:number)
{
this.idEdit = id;
this.anuncioEdit = this.anuncioService.getAnuncio(this.idEdit); 

console.log("se recibio esto:");
console.log(this.anuncioEdit);

this.inicio();
}


  //Metodo que manda los parametros para crear un nuevo anuncio y actualizarlo de un anuncio 
onSubmit (data)
{
  //por defecto, al crear y al editar un anuncio, el estado (si esta publicado o en baja, es de 0, es decir en baja)
let aNew = new Anuncio
(
this.anuncioEdit.idAnuncio,
data.nombre,
data.descripcion,
data.urlImagen,
data.fechaPublicacion,
data.fechaDeBaja,
0,
this.anuncioEdit.proveedor
);

this.clear();

this.anuncioService.update(aNew);

}



}
