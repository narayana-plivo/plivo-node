let plivo = require('plivo');
let client = new plivo.Client('', '');

client.lookup.get(
    "",
    "carrier" // default info
).then(function(response) {
    console.log(response);
}).catch(function(error) {
    console.log(error);
});
