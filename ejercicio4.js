function findArrayIndex(array, text) {
  const indexes = []
  array.forEach((item, index) => {
    if (item === text) {
      indexes.push(index)
    }
  })
  return indexes
}

const mainCharacters = [
  'Luke',
  'Leia',
  'Han Solo',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

console.log(findArrayIndex(mainCharacters, 'Luke'))

console.log(findArrayIndex(mainCharacters, 'Chewbacca'))

console.log(findArrayIndex(mainCharacters, 'Anakin'))

function removeItem(array, text) {
  const indexes = findArrayIndex(array, text)

  for (let i = indexes.length - 1; i >= 0; i--) {
    array.splice(indexes[i], 1)
  }

  return array
}
//Ejemplo 1 con solo 1 nombre
console.log(removeItem(mainCharacters, 'Anakin'))

//Ejemplo 2 con 2 nombres iguales
const mainCharacters2 = [
  'Luke',
  'Leia',
  'Anakin',
  'Chewbacca',
  'Rey',
  'Anakin',
  'Obi-Wan'
]

console.log(removeItem(mainCharacters2, 'Anakin'))
