chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  [element, ...array]

}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.shift(element)
}

function addElementToEndOfArray(array, element) {
  array.push(element)
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.splice(0)
}

function removeElementFromBeginningOfArray(array) {
  [...array.slice(1)]
}
