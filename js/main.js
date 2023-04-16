//Promedios ingresados
let promedios = [];

//Ciclo 
let permiso = prompt ("Si desea promediar a un alumno escriba `Si`, de lo contrario, escriba cualquier letra)")
while (permiso === "Si"){
    alert ("Gracias por usar nuestra plataforma de promediación");
    studentProm()
    permiso = prompt("Si desea continuar promediando escriba `Si`, de lo contrario, escriba cualquier letra")
}

//Función principal
function studentProm (){
    let alumno = prompt ("Ingrese el nombre del alumno");
    alert ("El nombre del alumno es: " + alumno);
    promedio();
}
    //Función de promediación
function promedio (){
    let nota1 = Number(prompt ("Ingrese la nota del primer exámen: "));
    let nota2 = Number(prompt ("Ingrese la nota del segundo exámen: "));
    let nota3 = Number(prompt ("Ingrese la nota del tercer exámen: "));
    let sumatoria = nota1 + nota2 + nota3;
    let promedioTotal = sumatoria / 3;
    promedios.push(promedioTotal);
    alert ("El promedio del alumno es: " + promedioTotal);
}

// Promedio de todos los valores almacenados en la variable "promedios"
let sumaPromedios = 0;
for (let i = 0; i < promedios.length; i++) {
    sumaPromedios += promedios[i];
}
let promedioFinal = sumaPromedios / promedios.length;

//Devolución final de datos
alert ("La cantidad de alumnos ingresados es: " + promedios.length)
alert("El promedio final de todos sus alumnos es: " + promedioFinal);
