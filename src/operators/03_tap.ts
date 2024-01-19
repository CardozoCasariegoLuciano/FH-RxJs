import { range, tap } from "rxjs";

const range$ = range(1, 30).pipe(
  tap((val) => console.log("se imprime desde el operador tap", val))
);

range$.subscribe();
