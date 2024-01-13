import { Subscription } from "rxjs";

//Es lo que retornan todos los Observables (cuando se le hace un .subscrive a un Subject, BehaviorSubject, etc)
const a = new Subscription();
const b = new Subscription();

//Metodos que acepta:
a.add(b) //Vincula como hija a otra Subscription, si esta se desuscribe, sus hijas tambien
a.remove(b) //remueve a otra Subscription de sus hijas
 
a.unsubscribe() //Se desuscribe (deja de escuchar emiciones del observable)
a.closed //Indica si ya se cerro la subscripcion
