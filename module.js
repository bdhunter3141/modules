
function sum(arr, precision) {
  let total = 0
  for (let number of arr) {
    total += number
  }
  return toDecimal(total, precision)
}


function toDecimal(number, precision) {
  return Number(number.toFixed(precision))
}

var r = sum([1, 8, 23.90348590438], 5)
console.log(r)

module.exports = {
  "sum": sum
}