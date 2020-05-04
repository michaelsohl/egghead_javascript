console.log("I'm learning about 'this' in Javascript");

/* Works only in browser
'this' is equivalent to the global object. In the browser this === window
*/
res = this === window;
console.log(`this === window: ${res}`);
