import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
//////////////////////////////////////////////////////////////////////
import { Proveedor } from 'src/app/models/proveedor';
import{ProveedorService} from '../../../services/proveedor.service'
//////////////////////////////////////////////////////////////////////
@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  calificacion=0;
  proveedor:Proveedor;
  formulario;
//  @Input() proveedor:Proveedor;
  constructor(private formBuilder:FormBuilder/*para prueba*/,private proveedorService:ProveedorService/*se eliminara posteriormente*/) {
    this.formulario=this.formBuilder.group({
      comentario:['',Validators.required]
    })
    this.proveedorService.getProveedor(1);
   }

  ngOnInit(): void {
  }

}
