var fs = require('fs')
fs.readFile(process.argv[2], callback)

function callback (err, data) {
  if (!err) {
    var content = data.toString()
    var newlines = (content.split("\n").length) - 1
    console.log(newlines)
  }
}