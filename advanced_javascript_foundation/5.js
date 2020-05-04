const name = "Michael";

{
  const name = "Sofie";
  // const name = "Peta" This is not allowed. But a const {} can be mutable since
  // something something deep copy
  console.log(name);
}
console.log(name);
