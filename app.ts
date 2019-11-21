interface Xmen{
  nombre:string,
  poder:string
}

function enviarMision(xmen:Xmen){
  console.log(`Enviando a: ${xmen.nombre}`);
}

function enviarCuartel(xmen:Xmen){
  console.log(`Enviando al Cuartel: ${xmen.nombre}`);
}

let wolverine:Xmen = {
  nombre: "wolverine",
  poder: "regeneracion"
}

enviarMision(wolverine);
enviarCuartel(wolverine);

// let prom1 = new Promise(function(resolve,reject){
//   setTimeout(()=>{
//     console.log("Promesa Terminada")
//     // resolve();
//     reject();
//   },1500)
// });
//
// console.log("paso 1");
// prom1.then(function(){
//   console.log("ejecutar si termino bien");
// },
// function(){
//   console.log("algo salio mal");
// })
// console.log("paso 2");



// let avenger:string[] = ["Thor","Steve","Tonny"];
//
// let [thor,capi,aironman] = avenger;
//
// console.log(thor,capi,aironman);


// let avenger = {
//   nombre: "Steve",
//   clave: "Capitan America",
//   poder: "Droga"
// }
//
// // let nombre = avenger.nombre;
// // let clave = avenger.clave;
// // let poder = avenger.poder;
//
// let { nombre,clave,poder } = avenger;
//
// console.log(nombre,clave,poder);

// let hulk = {
//   nombre: "hulk",
//   smash(){
//     setTimeout(()=>console.log(this.nombre +" smash!!"),1500);
//   }
// }
//
// hulk.smash();


//
// let nombre:string = "Peter";
// let numero:number = 123;
// let booleano:boolean = true;
// let hoy:Date = new Date();
//
// hoy = new Date('2020-10-21');
//
// // console.log(hoy);
//
// let cualquiera:any;
//
// cualquiera = nombre;
//
//
// let spiderman = {
//   nombre: "peter",
//   edad: 20
// }


// let nombre:string = "Juan"
// let apellido:string = "Perez"
// let edad:number = 32
// // let texto = "Hola"+nombre+ " "+apellido+" "+edad;
//
// let texto = `Hola, ${nombre} ${apellido} y tengo ${edad} años de edad`;
// let texto2:string = `${2+2}`;
// console.log(texto2);

//
// function activar(quien:string,
//                  objeto:string = "batiseñal",
//                  momento?:string){
//   let mensaje:string;
//
//   if(momento) mensaje = `${quien} activo la ${objeto} en la ${momento}`
//   else mensaje = `${quien} activo la ${objeto} `
//
//   console.log(mensaje);
// }
//
//
// activar("gordon","batisss","tarde");
//
// let miFuncion = function (a){
//   return a;
// }
//
// let miFuncionF = (a) => a;
//
// // console.log(miFuncion("Normal"));
// // console.log(miFuncionF("Flecha"));
//
// let miFuncion2 = function(a:number,b:number){
//   return a+b;
// }
//
// let miFuncion2F = (a:number,b:number)=> a+b;
//
//
// let miFuncion3 = function(nombre:string){
//     nombre = nombre.toUpperCase();
//     return nombre;
// }
//
// let miFuncion3F = (nombre:string)=>{
//   nombre = nombre.toUpperCase();
//   return nombre;
// }
