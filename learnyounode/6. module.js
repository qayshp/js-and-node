module.exports = filterByExtensionModule

function filterByExtensionModule(directoryName, extension, doneFiltering){
  var fs = require('fs')
  var path = require('path')

  fs.readdir(directoryName, doneReading)

  function doneReading(err, list) {
    if (err) {
      doneFiltering(err, null)
    }
    if (!err) {
      var filteredList = list.filter(filterByExtension)
      doneFiltering(null, filteredList)
    }
  }
  function filterByExtension(file) {
    return (path.extname(file)==(".".concat(extension)))
  }
}
