var sum = 0;
process.argv.forEach(function(item) {
  if (!isNaN(Number(item))) {
    sum += Number(item);
  }
});
console.log(sum);