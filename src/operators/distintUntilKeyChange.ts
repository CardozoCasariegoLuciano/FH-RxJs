//DistinctUntilKeyChange es igual al distinctUntilChanged
//Solo que funciona solo para objetos

import { distinctUntilKeyChanged, from } from "rxjs";

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

nombres$.pipe(distinctUntilKeyChanged("nombre")).subscribe({
  next: (val) => {
    console.log(val);
  },
});
