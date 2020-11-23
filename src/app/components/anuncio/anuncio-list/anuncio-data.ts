import { Anuncio } from 'src/app/models/anuncio';
import { Proveedor } from 'src/app/models/Proveedor';
import { Usuario } from 'src/app/models/Usuario';


//para la prueba se crean 4 objetos de tipo usuario
let u1 = new Usuario(1,"123@gmail.com","1234","Proveedor");
let u2 = new Usuario(2,"123@gmail.com","1234","Proveedor");
let u3 = new Usuario(3,"123@gmail.com","1234","Proveedor");
let u4 = new Usuario(4,"123@gmail.com","1234","Proveedor");

//para la prueba se crean 4 objetos de tipo proveedor
let p1 = new Proveedor(1,1,"juan","abcd.com","Juan el proveedor");
let p2 = new Proveedor(2,1,"juan","abcd.com","Juan el proveedor");
let p3 = new Proveedor(3,1,"juan","abcd.com","Juan el proveedor");
let p4 = new Proveedor(4,1,"juan","abcd.com","Juan el proveedor");

//para la prueba se crea un array de tipo anuncios
export let anuncios : Anuncio[];
anuncios = [
    new Anuncio(1,"promocion 1","Promocion del 50% en compras","https://personalshopperconsulting.files.wordpress.com/2012/06/captura-de-pantalla-2012-06-05-a-las-14-25-06.png","","",1,p1),
    new Anuncio(2,"promocion 2","Promocion del 30% en producto seleccionado","https://www.pieldetoro.com/site/wp-content/uploads/2013/12/cartel-promocion-diciembre-portada.jpg","","",0,p2),
    new Anuncio(3,"promocion 3","Promocion del 80% en compras","https://bestadvice.co.uk/wp-content/uploads/2016/02/80percent-750x536.jpg","","",1,p3),
    new Anuncio(4,"promocion 4","Promocion del 2x1 en compras","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfJPJcctLovhMzfM4wfu-8Bfx80sxqIZ_j_A&usqp=CAU","","",0,p4)
]