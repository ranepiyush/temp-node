const path = require('path');

const filepath = path.join('/content','subfolder','test.txt');

console.log(filepath);

console.log(path.basename(filepath));

const absolute = path.resolve(__dirname,'content','subfolder','test.txt')

console.log(absolute)
