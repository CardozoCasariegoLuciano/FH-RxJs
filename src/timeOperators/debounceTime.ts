import { debounceTime, fromEvent } from "rxjs";

const clcik = fromEvent(document, "click");

clcik.pipe(debounceTime(1000)).subscribe({
  next: (val) => {
    console.log(val);
  },
});
