import { from } from "rxjs";

//const subs = from([1,2,3]);
const subs = from(fetch("https://api.github.com/users/klerith"));

subs.subscribe(async (value) => {
  const data = await value.json();
  console.log({ data });
});
