import { interval, map, mergeMap, of, take } from "rxjs";

const letras = of("a", "b", "c", "d");
//mergeMap, al ser un operador de aplanamiento trabaja con otros observables

//Cada vez que el observable principal emita un valor
//se ejecuta otra subscripcion y automaticamente se subscribe
// mantiene a todas las subscriciones hasta que estas se completan!

//NOTA, el switchMap y el mergeMap son iguales, solo que
//el primero solo permite una uncia subscripcion activa,
//las demas las va cerrando

letras.pipe(
  mergeMap((letra) => {
    return interval(1000).pipe(
      map((l) => letra + l),
      take(3)
    );
  })
);
//.subscribe({
//next: (val) => {
//console.log(val);
//},
//complete: () => {
//console.log("Complete");
//},
//});
