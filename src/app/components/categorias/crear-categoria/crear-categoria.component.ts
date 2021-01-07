import { Component, OnInit } from '@angular/core';
import{NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-crear-categoria',
  templateUrl: './crear-categoria.component.html',
  styleUrls: ['./crear-categoria.component.css']
})
export class CrearCategoriaComponent implements OnInit {
  formulario;
  constructor(public modal:NgbModal,private formBuilder:FormBuilder) {
    this.formulario=formBuilder.group({nombre:['',Validators.required],descripcion:['',Validators.required]})
  }

  ngOnInit(): void {
  }

}
