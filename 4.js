/* 
'this' in functions
*/

function func() {
  console.log(this === global);
}

func();
