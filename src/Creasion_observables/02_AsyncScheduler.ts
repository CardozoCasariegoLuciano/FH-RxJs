import { asyncScheduler } from "rxjs";

const saludar = () => {
  console.log("Hola mundo locoo");
};
const saludar2 = (nombre) => {
  console.log(`Hola mundo locoo ${nombre}`);
};

//Para simular un timeout
asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000, "Luciano");

//Para simular un interval
const subs = asyncScheduler.schedule(
  function (state) {
    console.log({ state });
    this.schedule(state + 1, 1000);
  },
  3000,
  0
);

//setTimeout(() => {
//subs.unsubscribe();
//}, 6000);

asyncScheduler.schedule(() => {
  console.log("Desde otro asyncScheduler");
  subs.unsubscribe();
}, 6000);
