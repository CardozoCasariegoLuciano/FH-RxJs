import { filter, range } from "rxjs";

//Filtra los numeros que son pares y solo deja pasar los impares
const keyUp$ = range(0, 10).pipe(filter((val) => val % 2 === 1));
keyUp$.subscribe(console.log);
