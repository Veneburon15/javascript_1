//ARREGLO PRINCIPAL
let estudiantes = []
//CICLO PRINCIPAL
let permiso = prompt ("Si desea ingresar las notas de un alumno, escriba 'Si'. De lo contrario, escriba cualquier letra para salir")
while (permiso.toLowerCase() == "si"){
    studentProm()
    permiso = prompt("Si desea continuar promediando escriba `Si`, de lo contrario, escriba cualquier letra")
};

//Devolución final de datos
const OPCION_ALUMNOS = 1   
const OPCION_ALUMNOS_PROMEDIOS = 2;
const OPCION_ALUMNOS_INGRESADOS = 3;
const OPCION_SALIR = 4;

switch (mostrarMenu()) {
    case OPCION_ALUMNOS: 
        namesDev();
        break;
    case OPCION_ALUMNOS_PROMEDIOS:
        namesProm();
        break;
    case OPCION_ALUMNOS_INGRESADOS:
      showData();
      break;
    case OPCION_SALIR:
      alert("Saliendo del programa");
      break;
    default:
      alert("Opción inválida");
      break;
};

//FUNCIONES
//CORE FUNCTION
function studentProm() {
    alert ("Gracias por usar nuestra plataforma de promediación");
    dataSolicitation();
};
//Solicitud de datos
function dataSolicitation(){
    let nombreAlumno = nameInput();
    let nota_1 = pedirNota(1);
    let nota_2 = pedirNota(2);
    let nota_3 = pedirNota(3);
    let promedio = calcularPromedio(nota_1, nota_2, nota_3);
    studentAdd (nombreAlumno, nota_1, nota_2, nota_3, promedio);
    alert(`El promedio del alumno ${nombreAlumno} es: ${promedio}`);
};


//Pedir el nombre
function nameInput(){
    let alumno = "";
    let regex = /^[a-zA-Z\s]+$/;
    while (!regex.test(alumno)) {
      alumno = prompt("Ingrese el nombre del alumno");
      if (!regex.test(alumno)) {
        alert(
          "Error: El nombre del alumno debe contener solo letras y espacios"
        );
      }
    }
    return alumno;
};
//Solicitud de nota y validación
function pedirNota(notaNum){
    let nota = Number(prompt(`Ingrese la nota del ${notaNum}º examen:`));
    while (isNaN(nota) || nota < 0 || nota > 20) {
        alert("Error: La nota debe estar entre 0 y 20");
        nota = Number(prompt(`Ingrese nuevamente la nota del ${notaNum}º examen:`));
    }
    return nota;
};
//Cálculo del promedio
function calcularPromedio(nota_1, nota_2, nota_3){
    let promedio = (nota_1 + nota_2 + nota_3) / 3;
    return promedio.toFixed(2);
};
//Adición de datos al arreglo
function studentAdd(nombre, nota_1, nota_2, nota_3, promedio){
    let estudiante = {nombre: nombre, nota1: nota_1, nota2: nota_2, nota3: nota_3, promedio: promedio};
    estudiantes.push(estudiante);
};


//FUNCIONES DEL SWITCH
//CICLO PRINCIPAL
function mostrarMenu() {
    let opcion = 0;
    while (opcion < OPCION_ALUMNOS || opcion > OPCION_SALIR){
        opcion = Number(prompt(`Ingrese una opción:
        ${OPCION_ALUMNOS}. Mostrar nombres de los alumnos ingresados
        ${OPCION_ALUMNOS_PROMEDIOS}. Mostrar nombres de los alumnos y sus promedios
        ${OPCION_ALUMNOS_INGRESADOS}. Datos de todos los alumnos ingresados
        ${OPCION_SALIR}. Salir`));
    };
    return opcion;
  }

//FUNCIONES DE DEVOLUCIÓN
//Devolución de nombres
function namesDev(){
    let mensaje = estudiantes.map(estudiante => estudiante.nombre).join("\n");
    alert(mensaje);
};

//Devolución de nombres y promedios
function namesProm(){
    let mensaje = estudiantes.map(estudiante => estudiante.nombre + " ---- " + estudiante.promedio).join("\n");
    alert(mensaje);
};

//Devolucion de cada estudiante
function showData(){
    let mensaje = "";
    for (let i = 0; i < estudiantes.length; i++) {
        mensaje += "Estudiante #" + (i + 1) + ":\n" +
                   "Nombre: " + estudiantes[i].nombre + "\n" +
                   "Nota 1: " + estudiantes[i].nota1 + "\n" +
                   "Nota 2: " + estudiantes[i].nota2 + "\n" +
                   "Nota 3: " + estudiantes[i].nota3 + "\n" +
                   "Promedio: " + estudiantes[i].promedio + "\n\n";
    };
    alert(mensaje);
};