// let color = prompt("por favor elige alguno de estos colores: Red, Blue, Black");
//let contenedor = document.querySelector("body");

// CONDICIONAL IF/ELSE

// if(color == "Red"){
//     contenedor.style.backgroundColor = color;
// }else if(color == "Blue"){
//     contenedor.style.backgroundColor = color;
// }else if(color == "Black"){
//     contenedor.style.backgroundColor = color;
// }else {
//     alert("Invalid color")
// }

// CONDICIONAL TERNARIO
// let nota = prompt("ingresa la calificacion")
// let estado = nota < 3 ? "reprobado" : nota <= 5 && nota >= 3 ? "aprobado" : "la nota es invalida";


// Ciclo/Bucle While
// let i = 0;
// while( i < 10){
//     console.log(i);
//     i++
// }


// FUNCIONES
// function tablaDelMultiplicar(base){
    // Ciclo/Bucle For
//     for(let i = 1; i<=10 ; i++){
//         let etiqueta = document.createElement('h2');
//         let resultado = base*i;
    
    
//         etiqueta.textContent = base + " X " + i + " = " + resultado;
//         Insertar elementos usando appendChild
//         contenedor.appendChild(etiqueta);       
//           Agregar elementos usando innerHtml
//           contenedor.innerHTML += `<h2>2 x ${i} = ${resultado}</h2>`
//           console.log("2 X " + i + " = " + resultado)
//          2 X 1 = 2
//     }
// }

// Toda funcion se debe ejecutar para usarla
// tablaDelMultiplicar(8);

function imprimirNombre(nombre, apellido){
      contenedor.innerHTML += `<h2>Hola mi nombre es ${nombre} y mi apellido ${apellido}</h2>`
}

imprimirNombre("Gustavo", "Tovar");




