const list = [1, 2, 3, 4, 5];
console.log(list.slice(1, 4));
console.log(list.slice.call(list, 1, 4)); // (c)all needs a comma seperated list
console.log(list.slice.apply(list, [1, 4])); // (a)pply needs an (a)rray
