import { delay, forkJoin, interval, of, take } from "rxjs";

//Tengo 3 observables FINITOS, que cada uno termina
//en un momento distinto
const num = of(1, 2, 3, 4); //inmediato
const int = interval(500).pipe(take(4)); //en 2000ms
const del = of(1, 2, 3, 4).pipe(delay(1500)); //en 6000ms

//El forkJoin retorna los ultimos valores emitidos
//de todos los observables asociados
forkJoin({
  of: num,
  interval: int,
  delay: del,
}).subscribe({
  next: (result) => {
    console.log(result);
  },
  complete: () => {
    console.log("terminado");
  },
});

//Caso de uso
//Cuando tenemos que hacer muchas peticiones HTTP y tenemos que hacer algo
//una vez tenemos el resultado de todas ellas
