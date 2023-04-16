// let alumno = prompt ("Ingrese el nombre del alumno: (o escriba `ESC` o `0` para salir en cualquier momento)")
// while ((alumno != "ESC") && (alumno != "0")){
//     alert ("Alumno: " + alumno);





//     alumno = prompt ("Ingrese el nombre del siguiente alumno (o escriba ESC `0` para salir)");

// }

// let promedios = prompt ("A continuación mostraremos el promedio de cada estudiante: (o escriba ESC o `0` para salir en cualquier momento)" /n, alumno + promedio )
// while ((promedios != "ESC") && (promedios != "0")){
//     alert ("");
//     entrada = prompt ("El promedio de (o escriba ESC `0` para salir)");
// }
studentProm()
function studentProm (){
    let alumno = prompt ("Ingrese el nombre del alumno");
    alert ("El nombre del alumno es: " + alumno);
    promedio();

    function promedio (){
        let nota1 = Number(prompt ("Ingrese la nota del primer exámen: "));
        let nota2 = Number(prompt ("Ingrese la nota del segundo exámen: "));
        let nota3 = Number(prompt ("Ingrese la nota del tercer exámen: "));
    
        let sumatoria = nota1 + nota2 + nota3;
        let promedioTotal = sumatoria / 3;
        alert ("El promedio del alumno es: " + promedioTotal);
    }
}

