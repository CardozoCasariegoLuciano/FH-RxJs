//El first, es algo asi como el take (si no se le pasa argumento)
//pero si sí se le pasa, va a ignorar todos los que den false y
//solo emitira el primer elemento que de true (y lugo hace el complete)

import { first, from } from "rxjs";

const numeros = from([1, 2, 3, 4, 5, 6, 7]);

numeros.pipe(first((val) => val >= 3)).subscribe({
  next: (val) => {
    console.log(`Emite el valor ${val}`);
  },
  complete: () => {
    console.log("Se completo");
  },
});
