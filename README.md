# Anything To Uppercase

> Convert String in  Object,Array or Plain String to  `uppercase`.

## Installation

```
npm install upper-cases --save
```

## Usage

```js
const Upper= require('upper-cases');
```

#### [UPPERCASE]

> Convert String in Object, Array or String variable to uppercase. Specific type of requirement can be addressed like Object Keys or Object values to be uppercased, Retrieve Object keys or values uppercased as array. Find below example for your best needs.

```js
console.log(Upper.isUpperCased("shahul B")); 
//OUTPUT: false

console.log(Upper.getStringUpperCased("jAckl")); 
//OUTPUT: JACKL

console.log(Upper.getStringUpperCasedWithPos("shahul hameed buhari", 4, 5)); 
// OUTPUT: shahUl hameed buhari

console.log(Upper.getObjectUpperCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]})); 
// OUTPUT: {"T":1,"U":{"K":["JKO","OPL"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"FAMILY":["SHAHUL","FAROOK"]}

console.log(Upper.getObjectKeysUpperCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]}));
//OUTPUT:{"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"FAMILY":["shahul","farook"]}

console.log(Upper.getObjectvaluesUpperCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]}));
//OUTPUT:{"T":1,"U":{"K":["JKO","OPL"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["SHAHUL","FAROOK"]}

console.log(Upper.getKeysUpperCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]})); 
//OUTPUT:["T","U","K","SHAHUL","B","JILL_JACK","BANANA","JILL_JACK","FAMILY"]

console.log(Upper.getValuesUpperCased({"T":1,"U":{"K":["JKO","opl"],"SHAHUL":"PIANO","B":{"JILL_JACK":[{"BANANA":"JILL_JACK"},{"JILL_JACK":"APPLE"}]}},"Family":["shahul","farook"]})); 
//OUTPUT:[1,"JKO","OPL","PIANO","JILL_JACK","APPLE","SHAHUL","FAROOK"]

console.log(Upper.getArrayUpperCased([{ "Shahul": "hAmeed" }]));
//OUTPUT: [ { shahul: 'hameed' } ]

console.log(Upper.getArrValUpperCasedByIndex([{ "Shahul": "hAmeed" },{ abu: 'fazil' } ], 0));
//OUTPUT: [ { SHAHUL: 'HAMEED' }, { abu: 'fazil' } ]

```

## License

MIT
