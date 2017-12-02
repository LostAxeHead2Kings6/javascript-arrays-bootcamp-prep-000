chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, element) {
  new_array =  [element, ...array]
  return new_array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}
destructivelyAddElementToBeginningOfArray()

function addElementToEndOfArray(array, element) {
  new_array = [...array, element]
  return new_array
}
destructivelyAddElementToEndOfArray()

function destructivelyAddElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
}

function accessElementInArray(array, index) {
  var value = array[index]
  return value
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  array
}

function removeElementFromBeginningOfArray(array) {
  
}
