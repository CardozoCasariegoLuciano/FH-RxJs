//El take, luego de emitir el ultimo valor, completa
// la subscripcion (aunque el obsebable siga emitiendo, el objeto no
// seguira escuchando)

import { from, take } from "rxjs";

const numeros = from([1, 2, 3, 4, 5, 6, 7]);

numeros.pipe(take(3)).subscribe({
  next: (val) => {
    console.log(`Emite el valor ${val}`);
  },
  complete: () => {
    console.log("Se completo");
  },
});
