const xyz = require('./people');

// so we can access xyz.people & xyz.ages
console.log(xyz.ages);

//or destructuring:
const {people, ages} = require('./people');
console.log(people, ages);

//os have a lot of methods(info about the os);
const os = require('os');
console.log(os.platform(), os.homedir());