import { Component } from '@angular/core';
import { $ } from 'protractor';
declare var jQuery:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'gamma-link-frontend';
  cliente = JSON.parse(localStorage.getItem('cliente'));
  proveedor = JSON.parse(localStorage.getItem('proveedor'));

  ngOnInit(){
    // SCRIPT PARA SIDE BAR TOGGLE
    // NO ELIMINAR
    (function($) {
      "use strict";
      // Toggle the side navigation
      $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
    })(jQuery);
  }
}
