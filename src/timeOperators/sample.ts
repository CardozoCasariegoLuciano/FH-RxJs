//Sample, emiete el ultimo valor emitido por el observable hasta
// que el observable que le pasamos por parametro emita algo
//Los 2 tuvieron que haber emitido algo

import { fromEvent, sample } from "rxjs";

const clcik = fromEvent(document, "click");
const key = fromEvent(document, "keyup");

clcik.pipe(sample(key)).subscribe({
  next: (val) => {
    console.log(val);
  },
});
