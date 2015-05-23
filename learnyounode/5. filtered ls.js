var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], callback)

function callback(err, list) {
  if (!err) {
    var filteredList = list.filter(filterByExtension)
    filteredList.forEach(printItem)
  }
}
function printItem(item) {
  console.log(item)
}
function filterByExtension(file) {
  return (path.extname(file)==(".".concat(process.argv[3])))
}