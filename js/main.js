//FUNCIONES
let estudiantes = []
//CICLO PRINCIPAL
let permiso = prompt ("Si desea promediar a un alumno escriba `Si`, de lo contrario, escriba cualquier letra)")
while (permiso.toLowerCase() == "si"){
    alert ("Gracias por usar nuestra plataforma de promediación");
    studentProm()
    permiso = prompt("Si desea continuar promediando escriba `Si`, de lo contrario, escriba cualquier letra")
}

//Función principal
function studentProm(){
    let alumno = prompt ("Ingrese el nombre del alumno");
    alert ("El nombre del alumno es: " + alumno);
    let nota1 = Number(prompt ("Ingrese la nota del primer exámen: "));
    let nota2 = Number(prompt ("Ingrese la nota del segundo exámen: "));
    let nota3 = Number(prompt ("Ingrese la nota del tercer exámen: "));
    let promedioTotal = (nota1 + nota2 + nota3) / 3;
    let estudiante = {nombre: alumno, nota1: nota1, nota2: nota2, nota3: nota3, promedios: promedioTotal};
    estudiantes.push(estudiante);
    alert ("El promedio del alumno es: " + promedioTotal);
}
    //Función de promediación


for (let i = 0; i < estudiantes.length; i++) {
    console.log("Estudiante #" + (i + 1) + ":");
    console.log("Nombre: " + estudiantes[i].nombre);
    console.log("Nota 1: " + estudiantes[i].nota1);
    console.log("Nota 2: " + estudiantes[i].nota2);
    console.log("Nota 3: " + estudiantes[i].nota3);
    console.log("Promedio: " + estudiantes[i].promedios);
  }

//Devolución final de datos
let permiso_2 = prompt ("¿Desea ver un resumen de la cantidad de alumnos ingresados y el promedio total entre ellos? Si es ese el caso escriba `Si`, de lo contrario, escriba cualquier letra");
if (permiso_2.toLowerCase() == "si"){
    alert ("La cantidad de alumnos ingresados es: " + promedios.length)
    alert("El promedio final de todos sus alumnos es: " + promedioFinal);
}
else{
    alert("Muchas gracias por utilizar nuestra plataforma de promediación");
}

//Devolución detallada de estudiantes y sus promedios
// let permiso_3 = prompt ("¿Desea ver una lista detallada de cada estudiante ingresado y sus respectivas notas y promedios? Si es ese el caso escriba `Si`, de lo contrario, escriba cualquier letra");
// if (permiso_3.toLowerCase() == "si"){
//     alert ()
//     for (let i = 0; i < promedios.length; i++) {
//         console.log(`Nombre: ${promedios[i].nombre}`);
//         console.log(`Nota 1: ${promedios[i].nota_1}`);
//         console.log(`Nota 2: ${promedios[i].nota_2}`);
//         console.log(`Nota 3: ${promedios[i].nota_3}`);
//         console.log(`Promedio: ${promedios[i].promedio}`);
//       }
// }



// // Promedio de todos los valores almacenados en la variable "promedios"
// let sumaPromedios = 0;
// for (let i = 0; i < promedios.length; i++) {
//     sumaPromedios += promedios[i];
// }
// let promedioFinal = sumaPromedios / promedios.length;
