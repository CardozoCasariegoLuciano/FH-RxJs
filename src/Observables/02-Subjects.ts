import {
    Observable,
    Subject,
  } from "rxjs";
  
  const obs$ = new Observable<number>((subs) => {
    const interval = setInterval(() => {
      subs.next(Math.random());
    }, 1000);
  
    return () => {
      clearInterval(interval);
      console.log("intervalo terminado");
    };
  });
  
  /* const sub1 = obs$.subscribe((e) =>
    console.log("Sub1 -- Son distintos --- " + e)
  );
  const sub2 = obs$.subscribe((e) =>
    console.log("Sub2 -- Son distintos --- " + e)
  ); */
  
  //En cada subscripcion se consologean numeros distintos, osea que no se comparten valores en cada subscripcion
  
  const subject$ = new Subject();
  const subs = obs$.subscribe(subject$);
  
  //Ahora al estar subscripto a un subject comparten el mismo valor
  
  const sub3 = subject$.subscribe((e) =>
    console.log("Sub3 -- Son iguales --- " + e)
  );
  const sub4 = subject$.subscribe((e) =>
    console.log("Sub4 -- Son iguales --- " + e)
  );
  
  
  setTimeout(() => {
      subject$.next("123123");
      subject$.complete();
      subs.unsubscribe();
    }, 4000);