import { fromEvent, merge } from "rxjs";

const key = fromEvent(document, "keyup");
const click = fromEvent(document, "click");

//Escucha al mismo tiempo a los dos observables
const mer = merge(key, click)

mer.subscribe({
  next: (val) => {console.log(val)},
  error: () => {},
  complete: () => {},
})


