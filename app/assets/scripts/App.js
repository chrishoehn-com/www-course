var $ = require('jquery');
var Person = require('./modules/Person');

alert('Stats?');


var john = new Person("John Doe", "blue");
john.greet();

var jane = new Person("Jane Smith", "green");
jane.greet();