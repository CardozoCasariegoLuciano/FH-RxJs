import { catchError, map, of } from "rxjs";
import { ajax } from "rxjs/ajax";

//el ajax convierte el resultado de una petición http a un
//observable

//El catch error atrapa errores en las peticiones http
// y retorna o un error o un nuevo observable que se
// recibirá en el .subscribe

const url = "https://api.github.XXcom/users?per_page=5";

ajax(url)
  .pipe(
    map((item) => {
      return item.response;
    }),
    catchError((err) => {
      console.warn("Error en:", err);
      return of([]);
    })
  )
  .subscribe({
    next: (val) => {
      console.log(val);
    },
  });

//ajax.getJSON(url)
//ajax.post(url, {body}, {headers})
//ajax.put(url, {body}, {headers})
//ajax.delete(url, {headers})
//ajax.patch(url, {body}, {headers})

