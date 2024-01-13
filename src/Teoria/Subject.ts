import { Subject } from "rxjs";

//El Subject permite el casteo multiple y ademas es un Observer,
//por lo tanto la constante subject puede emitir valores y ademas se puede subscrivir a ellos
const subject = new Subject();

const ejemplo = new Subject<string>();

ejemplo.next("Lo que emite antes despues de la subscription se pierde")


ejemplo.subscribe({
  next: (valor) => console.log("el valor emitido es", valor),
});

ejemplo.next("Lo que emite despues de la subscription se escucha")
