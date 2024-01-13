import { Observable } from "rxjs";

const obs$ = new Observable<number>((subs) => {
  let value = 0;
  const interval = setInterval(() => {
    subs.next(value);
    value++;
  }, 1000);

  return () => {
    clearInterval(interval);
    console.log("intervalo terminado");
  };
});

const sub1 = obs$.subscribe(console.log);
const sub2 = obs$.subscribe(console.log);
const sub3 = obs$.subscribe(console.log);

sub1.add(sub2);
sub1.add(sub3);

setTimeout(() => {
  sub1.unsubscribe(); //Tambien se desuscriben sus 'hijos' (agregados con el add)
}, 4000);
