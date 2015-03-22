var inspect = require('util').inspect;

var person = {name :'Saad', age : 26, department : {ID : 15, name : "R&D"} };
console.log(inspect(person, { depth: null }));

var jsonStringFromPerson = JSON.stringify(person);
console.log('jsonStringFromPerson=%s', jsonStringFromPerson);

var personFromJsonString = JSON.parse(jsonStringFromPerson);
console.log(inspect(personFromJsonString, { depth: null }));
