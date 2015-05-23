var fs = require('fs')
fs.readFile(process.argv[2], callback)

function callback (err, buffer) {
  if (!err) {
    var content = buffer.toString()
    var newlines = (content.split("\n").length) - 1
    console.log(newlines)
  }
}