import { concat, interval, take } from "rxjs";

const iter = interval(500).pipe(take(4));
const list =concat(iter, iter, iter);


list.subscribe({
  next: (val) => {console.log(val)},
  error: () => {},
  complete: () => {console.log('Completado')},
})
