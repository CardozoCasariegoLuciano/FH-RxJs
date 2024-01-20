import { of, startWith } from "rxjs";

const numeros = of(1, 2, 3, 4).pipe(startWith("Arranca con este valor"));

numeros.subscribe({
  next: (nume) => {
    console.log(nume);
  },
  error: () => {},
  complete: () => {},
});

