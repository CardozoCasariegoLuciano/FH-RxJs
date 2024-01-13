import { Observer } from "rxjs";

//Es la interfaz de lo que puede hacer un observable al subscrivise
const d: Observer<void> = {
    next: (value) => console.log(value),
    error: (value) => console.log(value),
    complete: () => console.log("Completado"),
  };