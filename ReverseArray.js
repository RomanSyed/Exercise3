revrseArray = array => {
  let newArray = [];
  for (i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
};
array = ["A", "B", "C"];
console.log(revrseArray(array));

reverseArrayInPlace = arrayPlace => {
  for (i = 0; i < arrayPlace.length / 2; i++) {
    let temp = arrayPlace[i];
    arrayPlace[i] = arrayPlace[arrayPlace.length - 1 - i];
    arrayPlace[arrayPlace.length - 1 - i] = temp;
  }
  return arrayPlace;
};

let arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));
