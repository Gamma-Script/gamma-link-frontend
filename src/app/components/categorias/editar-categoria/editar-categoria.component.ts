import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import{NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {
  formulario;
  
  constructor(public modal:NgbModal,private formBuilder:FormBuilder) {
    this.formulario=formBuilder.group({nombre:['',Validators.required],descripcion:['',Validators.required]})
  }

  ngOnInit(): void {
  }
  

}
