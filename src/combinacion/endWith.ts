import { endWith, of } from "rxjs";

const numeros = of(1, 2, 3, 4).pipe(endWith("termina con este valor"));

numeros.subscribe({
  next: (nume) => {
    console.log(nume);
  },
  error: () => {},
  complete: () => {},
});


