//exhaustMap, al ser un operador de aplanamiento trabaja con otros observables
//se subscrive automaticamente al observable que recive por parametro
//si ya hay un observable emitiendo valores y el subs. inicial emite un nuevo valor
//este sera ignorado (y desecha)
// en caso de que no tenga ningun subs corriendo, ahi si podra tomarlo

//ES como el opuesto al switchMap ya que ejecuta el primero y si otro mas
//sale, es ignorado

import { exhaustMap, fromEvent, interval, take } from "rxjs";

//un interval que luego de emitir 3 valores se completa
const intervar = interval(500).pipe(take(3));

const click = fromEvent(document, "click");

//Supongamos que 3 clicks, se ejecutaran 3 veces el intervalo
// pero solo saldra uno, ya que los otros dos, al ya haber uno ejecutando
//seran ignorados hasta que el primero termine, si hago un 4to click ahi si
//comenzara a emitir ya que no tiene ningun subs emitiendo
click.pipe(exhaustMap(() => intervar)).subscribe({
  next: (val) => {
    console.log(val);
  },
});

