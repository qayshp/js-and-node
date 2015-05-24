var fs = require('fs')
var buffer = fs.readFileSync(process.argv[2])
var content = buffer.toString()
var newlines = (content.split("\n").length) - 1
console.log(newlines)