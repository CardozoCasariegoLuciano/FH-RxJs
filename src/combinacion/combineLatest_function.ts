import { combineLatest, fromEvent } from "rxjs";

const key = fromEvent(document, "keyup");
const click = fromEvent(document, "click");

//Emite los ultimos valores emitidos por todas las subs del array
//no hace nada hasta que todas hayan emitido algun valor
const combine = combineLatest([key, click]);

combine.subscribe({
  next: (val) => {
    console.log(val);
  },
  //el val es un array, con el mismo orden en el que lo defini en la linea 8
  //val[0] es el valor de key
  //val[1] es el valor de click
  error: () => {},
  complete: () => {},
});
