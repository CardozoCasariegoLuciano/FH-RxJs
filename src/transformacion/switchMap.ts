import { Observable, fromEvent, map, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { Users } from "../../inferfaces";

const textInput = document.createElement("input");
const body = document.querySelector("body");
body.append(textInput);

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");
//switchMap, al ser un operador de aplanamiento trabaja con otros observables

//El switchMap es util cuando un observable retorna otro
// emite todas las emiciones del ultimo valor emitido

//NOTA, el switchMap y el mergeMap son iguales, solo que
//el primero solo permite una uncia subscripcion activa,
//las demas las va cerrando

input$
  .pipe(
    map((resp) => resp.target["value"] as string),
    switchMap<string, Observable<Users>>((txt) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${txt}`)
    ),
    // la linea de arriba retorna un observable, con el switchMap
    //Me estoy subscribiendo a esta para que en el .subscribe se tome directamente
    //su valor emitido, si el input dispara otra peticion, la anterior se cancela
    //Nashee
    map((resp) => resp.items)
  )
  .subscribe({
    next: (resp) => {
      console.log(resp);
    },
  });
