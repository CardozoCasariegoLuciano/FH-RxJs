//throttleTIme, es similar al debounceTime, solo que al reves
//Primero emite, y luego bloquea las siguientes emisiones por el
//tiempo dado

import { fromEvent, throttleTime } from "rxjs";

const clcik = fromEvent(document, "click");

clcik.pipe(throttleTime(1000)).subscribe({
  next: (val) => {
    console.log(val);
  },
});
