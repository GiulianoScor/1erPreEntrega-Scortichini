// function Items(no, i, v, d, g){
//   this.nombre = no,
//   this.imagen = i,
//   this.valor = v,
//   this.descripcion = d,
//   this.grupo = g
// }

// const it1 = new Items("no1", "im1", "100", "lorem", "monetario" )
// const it2 = new Items("no2", "im2", "90", "lorem", "monetario")
// const it3 = new Items("no3", "im3", "80", "lorem", "monetario")
// const it4 = new Items("no4", "im4", "70", "lorem", "monetario")
// const it5 = new Items("no5", "im5", "60", "lorem", "monetario")
// const it6 = new Items("no6", "im6", "10", "lorem", "monetario")
let contador1 = 0;
function contador(){
  
  for (let i = 0; i < 1; i++) {
    // Lógica de la operación
    contador1++;
    console.log("Usted ha hecho " + contador1 + " operaciones")
    return contador1;
  }
}

function menu(){
  contador();
  let op = confirm ("Quiere seguir operando?")
  if(op){
    let itemv = prompt("Objeto a vender: ");
if(itemv == "n1" || itemv == "n2" || itemv == "n3" || itemv == "n4" || itemv == "n5" || itemv == "n6"){
  let pseudoContador = Number(prompt("Ingrese la cantidad a intercambiar (debe ser menor a 1000): "))
  if (pseudoContador <= 1000 && pseudoContador != 0) {
  let itemc = prompt("Objeto a comprar: ")
  if (itemc == "n1" || itemc == "n2" || itemc == "n3" || itemc == "n4" || itemc == "n5" || itemc == "n6") {
    alert("Intercambio realizado")
    }
    menu();
  } else{
    alert("Verifique que los datos sean correctos");
    
    menu();
  }
  
}else{
  console.log ("Ups! Algo ha salido mal");
  alert ("Verifique que los datos sean correctos");

  menu();
}
  } else{
    alert("Muchas gracias, hasta pronto!")
  }
}



///////////////////////////////////////////////////////////////////////////////////
console.log ("Los objetos disponibles son: n1, n2, n3, n4, n5, n6")
let itemv = prompt("Objeto a vender: ");
if(itemv == "n1" || itemv == "n2" || itemv == "n3" || itemv == "n4" || itemv == "n5" || itemv == "n6"){
  let pseudoContador = Number(prompt("Ingrese la cantidad a intercambiar (debe ser menor a 1000): "))
  if (pseudoContador <= 1000){
  let itemc = prompt("Objeto a comprar: ")
  if (itemc == "n1" || itemc == "n2" || itemc == "n3" || itemc == "n4" || itemc == "n5" || itemc == "n6") {
    alert("Intercambio realizado")
    menu ();
  } else{
    alert("Ingrese un producto valido");
    menu ();
  }
  
}else{
  console.log ("Ups! Algo ha salido mal");
  alert ("Verifique que los datos sean correctos");
  menu ();
}
}

