import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HAMMER_LOADER } from '@angular/platform-browser';
import { publish } from 'rxjs-compat/operator/publish';
import { Anuncio } from 'src/app/models/anuncio';
import { Proveedor } from 'src/app/models/proveedor';
import { Usuario } from 'src/app/models/usuario';
import { AnuncioService } from 'src/app/services/anuncio.service';

@Component({
  selector: 'app-anuncio-new',
  templateUrl: './anuncio-new.component.html',
  styleUrls: ['./anuncio-new.component.css']
})
export class AnuncioNewComponent implements OnInit {

  //variable que almacenara los parametros del formBuilder
  checkForm;

  constructor(
    public formBuilder :FormBuilder,
    public anuncioservices: AnuncioService

  ) { 
    //Validators para los datos de los imputs con los nombres de los elementos del formulario
    this.checkForm = formBuilder.group
   ({
     nombre : ['',Validators.required],
    descripcion :  ['',Validators.required],
    fechaPublicacion :  ['',Validators.required],
    fechaDeBaja : ['', Validators.required],
    urlImagen : ['', Validators.required]
   })
  }
   //metodo que limpia el formulario
clear()
{
this.checkForm.reset();  
}

  ngOnInit(): void {
  }

 //Metodo para el ingreso de un anuncio 
onSubmit (data)
{

let uNew = new Usuario
(
0,
"hola@gmail.com",
"1234",
"Proveedor"
);

let pNew = new  Proveedor(
0,
1,
"pedro",
"",
""
);

let aNew = new Anuncio
(
0,
data.nombre,
data.descripcion,
data.urlImagen,
data.fechaPublicacion,
data.fechaDeBaja,
0,
pNew
);



  this.anuncioservices.addAnuncio(aNew);
  this.clear();
}
}
