import { BehaviorSubject, Subject } from "rxjs";

//El BehaviorSubject es similar a un Subject, solo que este requiere el valor inicial que sera emitido
//y ademas cuando se subscriva tiene acceso al ultimo valor emitido (cosa que el Subject no)
const behaviorSubject = new BehaviorSubject(1);

const ejemplo = new BehaviorSubject<string>("Init value");

ejemplo.subscribe({
  next: (valor) => console.log("el valor emitido es", valor),
});

ejemplo.next("Lo que emite despues de la subscription se escucha")