import { Component, OnInit, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styles: [
  ]
})
export class LogoutButtonComponent implements OnInit {

  usuario : Usuario;

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) { }

  ngOnInit(): void {
    this.auth.user$.subscribe(
      (profile) => {
        this.usuario = new Usuario(
          null , profile.email, null, profile.picture
        );
        console.log(this.usuario.tipoUsuario);
        console.log(profile);
      }
    );
  }

  logout(): void {
    this.auth.logout({ returnTo: this.doc.location.origin });
  }

}
