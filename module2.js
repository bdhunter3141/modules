function uppercaseIt(str) {
  const upperStr = str.toUpperCase()
  return printToConsole(upperStr)
}

function printToConsole(str) {
  console.log(str)
}

module.exports = {
  uppercaseIt
}