//TakeUntil es lo opuesto de TakeWhite, sigue emitiendo
//hasta que eel observer que paso por parametro resiva algo

import { fromEvent, takeUntil } from "rxjs";

const click_event = fromEvent(document, "click");
const keyup_event = fromEvent(document, "keyup");

click_event.pipe(takeUntil(keyup_event)).subscribe({
  next: (event) => console.log(event),
  complete: () => {
    console.log("Completado");
  },
});
