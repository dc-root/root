'use strict'

const fs = require('fs');

const cotent = fs.readFileSync(process.argv[2], 'utf8');
console.log(cotent.split('\n').length -1);
