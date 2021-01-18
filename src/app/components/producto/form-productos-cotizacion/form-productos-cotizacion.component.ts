import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications'
import { CotizacionService } from '../../../services/cotizacion.service';
import { Producto } from '../../../models/producto';
import Swal from 'sweetalert2';
import { $ } from 'protractor';
declare var jQuery: any;

@Component({
  selector: 'app-form-productos-cotizacion',
  templateUrl: './form-productos-cotizacion.component.html',
  styleUrls: ['./form-productos-cotizacion.component.css']
})
export class FormProductosCotizacionComponent implements OnInit {
  //variables
  @Input() producto: Producto;
  checkForm: FormGroup;
  submitted: boolean = false;

  //objeto de atributos para la notificacion de verificacion de que a sido agregado el producto
  //a cotizacion
  public options = {
    position: ['middle', 'right'],
    timeOut: 3000,
    animate: 'fade',
    showProgressBar: false,
    maxStack: 1,
    pauseOnHover: true
  };

  constructor(private nService: NotificationsService, private ptService: CotizacionService, private fBuil: FormBuilder) { 
    this.checkForm = fBuil.group({
      cantidad: [0]
    });
  }

  ngOnInit(): void {
    this.checkForm = this.fBuil.group({
    cantidad: [0, [Validators.required, Validators.pattern('^([1-9]|[1-2][0-9]|[0-2][1-9])$')]]
    });
  }


  //metodopara mostrara el mensaje de exito
  onSuccess(){
    this.nService.success('', 'Articulos agregados a cotización', this.options);
    (function ($) {
      "use strict";
      $('#cotizacionModal').modal('hide');
    })(jQuery);
  }

  //metodo para obtener los errores de validacion
  get f(){ return this.checkForm.controls; }

  //metodo para procesar los datos a la lista de productos cotizados
  onSubmit(data){
    this.submitted = true;
    if (this.checkForm.invalid) {
      return;
    }
    else{
      this.ptService.addProductoCotizacion(this.producto, data.cantidad);
      this.onSuccess();
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
}
