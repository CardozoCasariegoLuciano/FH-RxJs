/* Eventos del DOM */

import { fromEvent } from "rxjs";

const src1$ = fromEvent<PointerEvent>(document, "click");
const src2$ = fromEvent<KeyboardEvent>(document, "keyup");

src1$.subscribe((val) => {
  console.log(val.x, val.y);
});

src2$.subscribe((val) => {
  console.log(val.key);
});
