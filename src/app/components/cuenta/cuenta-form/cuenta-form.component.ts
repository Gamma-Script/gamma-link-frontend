import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/models/Cliente';
import { Proveedor } from 'src/app/models/Proveedor';
import { Usuario } from 'src/app/models/Usuario';
import { ClienteService } from 'src/app/services/cliente.service';
import { ProveedorService } from 'src/app/services/proveedor.service';
import { UsuarioService } from 'src/app/services/usuario.service';


@Component({
  selector: 'app-cuenta-form',
  templateUrl: './cuenta-form.component.html',
  styleUrls: ['./cuenta-form.component.css']
})
export class CuentaFormComponent implements OnInit {

  //variable que almacenara los parametros del formBuilder
  checkForm;

  constructor(
    public formBuilder :FormBuilder,
    private usuarioService: UsuarioService,
    private clienteService: ClienteService,
    private proveedorService: ProveedorService

  ) { 
    //Validators para los datos de los imputs con los nombres de los elementos del formulario
    this.checkForm = formBuilder.group
   ({
     nombre : ['',Validators.required],
    nUsuario :  ['',Validators.required],
    correo :  ['',[Validators.required,Validators.pattern(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/)]],
    contraseña : ['', Validators.required],
    cContraseña : ['', Validators.required],
    tipo : ['',Validators.required] 
   })
  }

ngOnInit(): void { 
  }

  //metodo que limpia el formulario
clear()
{
this.checkForm.reset();  
}
//metodo que valida los datos de entrada del formulario y envia los objetos a sus servicios correspondientes
  onSubmit(data)
  {
   
    //Se valida que las contraseñas en el formulario sean iguales 
      if(data.contraseña == data.cContraseña)
      {

        //se crea el objeto de tipo usuario
        let uNew = new Usuario 
        (
          "",
          data.correo,
          data.contraseña,
          data.tipo
        );
    
        console.log(uNew);
    
      //Se crea el objeto dependiendo el tipo de cuenta que sera el usuario     
      //------------Cliente------------------------- 
          if(data.tipo == "Cliente")
          {
            let cNew = new Cliente
            (
              "",
              uNew,  
              data.nombre  
            )
          this.clienteService.addCliente(cNew);
          }
      //-------------Proveedor------------------------  
          else if(data.tipo == "Proveedor")
          {
           let pNew = new Proveedor
           (
            "",  
            uNew,
            data.nombre,
            ""  
           )   
             this.proveedorService.addProveedor(pNew); 
          }
      //Se invoca el metodo que limpia el formulario    
          this.clear();
      }
      //Si las contraseñas no coinciden se muestra la alerta
      else
    {
     this.usuarioService.errorNew()
    }

    
  
  }

}
