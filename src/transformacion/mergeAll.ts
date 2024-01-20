import { Observable, debounceTime, fromEvent, map, mergeAll } from "rxjs";
import { ajax } from "rxjs/ajax";
import { Users } from "../../inferfaces";

const textInput = document.createElement("input");
const body = document.querySelector("body");
body.append(textInput);

const input$ = fromEvent<KeyboardEvent>(textInput, "keyup");

//mergeAll, al ser un operador de aplanamiento trabaja con otros observables

//El mergeAll es util cuando un observable retorna otro
// emite todas las emiciones de todos las subscripciones

input$
  .pipe(
    debounceTime(500),
    map((resp) => resp.target["value"] as string),
    map<string, Observable<Users>>((txt) =>
      ajax.getJSON(`https://api.github.com/search/users?q=${txt}`)
    ),
    mergeAll(), // la linea de arriba retorna un observable, con el mergeAll
    //Me estoy subscribiendo a esta para que en el .subscribe se tome directamente
    //su valor emitido
    map((resp) => resp.items)
  )
  .subscribe({
    next: (resp) => {
      console.log(resp);
    },
  });
