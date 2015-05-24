var mymodule = require('./6. module.js')

var x = mymodule(process.argv[2], process.argv[3], callback)

function callback(err, data) {
  if (err){
    console.log(err)
  } else {
    data.forEach(printItem)
  }
  function printItem(item) {
    console.log(item)
  }
}
