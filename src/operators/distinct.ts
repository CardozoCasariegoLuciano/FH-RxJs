//Distinct no emite valores emitidos previamente

import { distinct, from, of } from "rxjs";

const numeros = of(1, 1, 2, 3, 3, 2, 4, 1);

numeros.pipe(distinct()).subscribe({
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
  { nombre: "Lucas" },
  { nombre: "Xman" },
  { nombre: "juan" },
];

const nombres$ = from(nombres);

nombres$.pipe(distinct(val => val.nombre)).subscribe({
  next: (val) => {
    console.log(val);
  },
});
