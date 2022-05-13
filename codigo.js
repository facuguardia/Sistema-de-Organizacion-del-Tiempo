//En este sistema podremos organizar las tareas diarias y saber cuantos minutos corresponde a cada tarea (OBSERVAR RESULTADO EN CONSOLA)

let tp = "100 minutos para trabajos practicos";
let estudio = "100 minutos para estudiar";
let trabajos = "240 minutos para trabajar";
let homework = "30 minutos para tareas del hogar";
let descanso = "10 minutos de descanso";

console.log("TAREAS");

for (var i = 0; i < 14; i++) {
    if (i == 0){
        console.group("Semana 1")
    }
console.group("Dia " + (i+1));
console.log(trabajos);
console.log(descanso);
console.log(estudio);
console.log(tp);
console.log(homework);
console.groupEnd();
if (i == 7) {
        console.groupEnd();
        console.group("Semana 2")
    }
}

console.groupEnd();
console.groupEnd();