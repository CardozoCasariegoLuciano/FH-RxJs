//ConcatMap, al ser un operador de aplanamiento trabaja con otros observables
//se subscrive automaticamente al observable que recive por parametro
//y si el observable inicial emite otra valor, este no ejecuta el suyo
//hasta que el anterior no haya terminado

import { concatMap, fromEvent, interval, take } from "rxjs";

//un interval que luego de emitir 3 valores se completa
const intervar = interval(500).pipe(take(3));

const click = fromEvent(document, "click");

//Supongamos que 3 clicks, se ejecutaran 3 veces el intervalo pero no
//comenzaran a emitir hasta que el anterior haya terminado
click.pipe(concatMap(() => intervar)).subscribe({
  next: (val) => {
    console.log(val);
  },
});
