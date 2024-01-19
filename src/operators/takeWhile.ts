//TakeWhite Sigue emitiendo hasta que la condicion de cumple

import { of, takeWhile } from "rxjs";

const numbers = of(1, 2, 3, 4, 5, 6, 7);

numbers.pipe(takeWhile((val) => val < 4)).subscribe({
  next: (val) => {
    console.log(val);
  },
});
