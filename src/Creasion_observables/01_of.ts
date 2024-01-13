import { of } from "rxjs";

//El of crea un observable que emite todos los elementos que 
// pasemos entre parentesis de forma sincrona
const obs$ = of<number[]>(1, 2, 3, 4, 5, 6, 7);

obs$.subscribe({
  next: (a) => {
    console.log("next", a);
  },
  error: () => {},
  complete: () => {
    console.log("Completado");
  },
});