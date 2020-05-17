const name = "Michael";

{
  const name = "Sofie";
  // const name = "Peta" This is not allowed. But a const {} can be mutable since
  // it does not do a deep equal
  console.log(name);
}
console.log(name);
