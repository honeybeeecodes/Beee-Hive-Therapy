

const therapies = require('./therapies')

console.log(therapies.getType(4))
// invoking


 // Don't specify path when module is in node_modules
 const request = require('request');
 request(
   'http://jsonplaceholder.typicode.com/users',
   function(err, res, body) {
     console.log(body);
   }
 );
