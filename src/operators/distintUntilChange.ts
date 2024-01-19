//DistinctUntilChange solo valida que el anterior sea distinto,
//no mantiene los valores emitidos previamente

import { distinctUntilChanged, from, of } from "rxjs";

const numeros = of(1, 1, 2, 3, 3, 2, 4, 1);

numeros.pipe(distinctUntilChanged()).subscribe({
  next: (val) => {
    console.log(val);
  },
});

interface Persona {
  nombre: string;
}

const nombres: Persona[] = [
  { nombre: "juan" },
  { nombre: "juan" },
  { nombre: "Xman" },
  { nombre: "Lucas" },
  { nombre: "Lucas" },
  { nombre: "Xman" },
  { nombre: "Xman" },
  { nombre: "Xman" },
  { nombre: "juan" },
];

const nombres$ = from(nombres);

nombres$
  .pipe(distinctUntilChanged((prev, curr) => prev.nombre === curr.nombre))
  .subscribe({
    next: (val) => {
      console.log(val);
    },
  });
