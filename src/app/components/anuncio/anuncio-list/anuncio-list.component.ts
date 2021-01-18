import { Component, ComponentFactoryResolver, ComponentRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Anuncio } from 'src/app/models/anuncio';
import { AnuncioService } from 'src/app/services/anuncio.service';
import Swal from 'sweetalert2';
import { OutgoingMessage } from 'http';
import { DynamicDirective } from 'src/app/directives/dynamic.directive';
import { AnuncioEditComponent } from '../anuncio-edit/anuncio-edit.component';
import { $ } from 'protractor';
declare var jQuery: any;

@Component({
  selector: 'app-anuncio-list',
  templateUrl: './anuncio-list.component.html',
  styleUrls: ['./anuncio-list.component.css']
})
export class AnuncioListComponent implements OnInit {

  @ViewChild(DynamicDirective, { static: false }) appDynamic: DynamicDirective;

  anuncios: Anuncio[] = [];
  componentRef: ComponentRef<any> = null;
  cliente = JSON.parse(localStorage.getItem('cliente'));
  proveedor = JSON.parse(localStorage.getItem('proveedor'));


  constructor(
    private anuncioService: AnuncioService,
    public formBuilder: FormBuilder,
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  //----------------inicio del componente-------------------------------
  ngOnInit(): void {
    this.getAnuncios();
  }

  //-----------------metodo para la propiedad click de editar------------------------------------
  getAnuncio(idAnuncio: number) {
    // Se agrego componente dinamico para poder manejar la edicion
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(AnuncioEditComponent);
    const viewContainerRef = this.appDynamic.viewContainerRef;

    if (this.componentRef == null) this.componentRef = viewContainerRef.createComponent<AnuncioEditComponent>(componentFactory);
    this.anuncioService.getAnuncio(idAnuncio).subscribe(
      (anuncio) => {
        this.componentRef.instance.anuncioEdit = anuncio;
        this.componentRef.instance.loadData();
      }
    );
  }

  darDeBaja(anuncio: Anuncio) {
    let mensaje =''
    if(anuncio.estado == 0){ 
      mensaje = 'Publicar'
    }else {
      mensaje = 'Dar de baja';
    }
    Swal.fire({
      title: `${mensaje}`,
      text: `Estas seguro que deseas ${mensaje} este anuncio`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `Si, ${mensaje}` 
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'La accion se efectuo de manera exitosa',
          showConfirmButton: false,
          timer: 2000
        });
        
        if(anuncio.estado == 0){
          this.anuncioService.subidaAnuncio(anuncio.id).subscribe({
            next: () => {
              this.getAnuncios();
            }
          });
        }else {
          this.anuncioService.bajadaAnuncio(anuncio.id).subscribe({
            next: () => {
              this.getAnuncios();
            }
          });
        }
      }
    })
  }

  deleteAnuncio(anuncio) {
    Swal.fire({
      title: 'Eliminar Anuncio',
      text: `¿Esta seguro que desea eliminar el anuncio ${anuncio.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.anuncioService.deleteAnuncio(anuncio.id).subscribe({
          next: (data) => {
            this.getAnuncios();
          },
          error: (e) => console.log(e)
        });
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El anuncio ha sido eliminado de manera exitosa',
          showConfirmButton: false,
          timer: 2000
        });
      }
    })
  }

  getAnuncios(data?) {
    if(this.proveedor){
      this.anuncioService.getAnuncios(this.proveedor.id).subscribe({
        next: (list) => {
          if (this.componentRef != null) this.componentRef.instance.anunciosList = null;
          this.anuncios = list;
        },
        error: (e) => console.log(e)
      });
    }
    this.anuncioService.getAnuncios().subscribe({
      next: (list) => {
        this.anuncios = list;
      },
      error: (e) => console.log(e)
    });
  }

  ngAfterContentChecked() {
    if (this.componentRef != null) {
      if(this.componentRef.instance.anunciosList != null) {
        this.anuncios = this.componentRef.instance.anunciosList;
      }
    }

  }

  ngOnDestoy() {
    this.componentRef.destroy();
  }
}
