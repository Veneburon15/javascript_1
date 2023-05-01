//FUNCIONES
let estudiantes = []
//CICLO PRINCIPAL
let permiso = prompt ("Si desea ingresar las notas de un alumno, escriba 'Si'. De lo contrario, escriba cualquier letra para salir")
while (permiso.toLowerCase() == "si"){
    alert ("Gracias por usar nuestra plataforma de promediación");
    studentProm()
    permiso = prompt("Si desea continuar promediando escriba `Si`, de lo contrario, escriba cualquier letra")
};

//Devolución final de datos
let permiso_2 = prompt ("¿Desea ver los datos de todos los alumnos ingresados? Si es ese el caso escriba `1`" + "\n" + 
"Si desea ver el número total de estudiantes que ingresó y el promedio total entre ellos, escriba `2`" + "\n" +
"Si desea salir de la plataforma, escriba `3`");

switch (permiso_2){
    case "1": 
        showData();
    break;
    case "2":
        showData_2();
    break;
    case "3":
        alert("Muchas gracias por usar nuestra plataforma de promediación");
    break;
    default:
        alert("Muchas gracias por usar nuestra plataforma de promediación");
    break;
};

//FUNCIONES
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
};
//Función de devolución
function showData(){
    let mensaje = "";
    for (let i = 0; i < estudiantes.length; i++) {
        mensaje += "Estudiante #" + (i + 1) + ":\n" +
                   "Nombre: " + estudiantes[i].nombre + "\n" +
                   "Nota 1: " + estudiantes[i].nota1 + "\n" +
                   "Nota 2: " + estudiantes[i].nota2 + "\n" +
                   "Nota 3: " + estudiantes[i].nota3 + "\n" +
                   "Promedio: " + estudiantes[i].promedios + "\n\n";
    }
    alert(mensaje);
};

function showData_2(){
    let promedioFinal = 0;
    let mensaje_2 = "";
    for (let i = 0; i < estudiantes.length; i++) {
        promedioFinal += estudiantes[i].promedios;
    }
    promedioFinal = promedioFinal/estudiantes.length;
    mensaje_2 += "Cantidad total de estudiantes ingresados: " + estudiantes.length + "\n" +
                "Promedio final de todos los estudiantes: " + promedioFinal;
    alert(mensaje_2);
};

