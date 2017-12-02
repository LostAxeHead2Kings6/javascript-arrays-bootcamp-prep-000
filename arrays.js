chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  new_array =  [element, ...array]
  return new_array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}

function addElementToEndOfArray(array, element) {
  new_array = [...array, element]
  return new_array
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
