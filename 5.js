/* 
'this' in functions
*/
"use strict";

function func() {
  console.log(this === undefined);
}

func();
