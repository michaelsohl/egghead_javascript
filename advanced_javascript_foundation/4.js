let name = "Michael";

{
  let name = "Sofie";
  // let name = "Peta"; This is not allowed. Cannot overwrite let
  console.log(name);
}

console.log(name);

/**
 * In comparison to var, let refers to the block scope
 */
