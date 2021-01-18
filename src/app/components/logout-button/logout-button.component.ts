import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styles: [
  ]
})
export class LogoutButtonComponent implements OnInit {

  usuario: Usuario;

  constructor(
    public auth: AuthService,
    private userService : UsuarioService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        if( profile ){
          this.usuario = new Usuario(
            null, profile.email, null, profile.picture,'','',''
          );
          this.userService.getUser(this.usuario.email).subscribe({
            next: (data) => {
              if(data.proveedor) localStorage.setItem('proveedor', JSON.stringify(data.proveedor));
              if(data.cliente) localStorage.setItem('cliente',  JSON.stringify(data.cliente));
            },
            error: (e) => console.log(e)
          });
        }
      }
    );

  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
    localStorage.removeItem('proveedor');
    localStorage.removeItem('cliente');
  }

}
