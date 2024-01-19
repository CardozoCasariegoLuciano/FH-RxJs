import { fromEvent, map, range } from "rxjs";

const range$ = range(1, 5).pipe(map((val) => val * 10));
range$.subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, "keyup").pipe(
  map((val) => val.code)
);
keyUp$.subscribe(console.log);
