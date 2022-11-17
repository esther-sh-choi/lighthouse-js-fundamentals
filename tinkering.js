/* function multiply(a, b) {
  return a * b;
}

const result = multiply(2, 4);

console.log(result);
console.log("four" / 5);

const loopyLighthouse = (range, multiples, words) => {
  for (let number = range[0]; number <= range[1]; number++) {
    if (number % multiples[0] === 0 && number % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (number % multiples[0] === 0) {
      console.log(words[0]);
    } else if (number % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(number);
    }
  }
};

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);

const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let mergedArray = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  if (i < arr1.length) {
    mergedArray.push(...arr1.slice(i));
  } else if (j < arr2.length) {
    mergedArray.push(...arr2.slice(j));
  }

  return mergedArray;
};

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
console.log(merge([1, 2, 5, 8], [9])); 

/* ---------------------------------------------------------------- */

/* const judgeVegetable = function (vegetables, metric) {
  let bestIndex = 0;
  for (let i = 1; i < vegetables.length; i++) {
    if (vegetables[i][metric] > vegetables[bestIndex][metric]) {
      bestIndex = i;
    }
  }
  return vegetables[bestIndex].submitter;
};

const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "redness";

judgeVegetable(vegetables, metric);*/

/* ---------------------------------------------------------------- */

/*const sumLargestNumbers = function (numbers) {
  let numbersCopy = numbers.slice();
  let largestIndex = 0;

  const helperIndexOfLargestNum = (array) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[largestIndex]) {
        largestIndex = i;
      }
    }
    return largestIndex;
  };

  largestIndex = helperIndexOfLargestNum(numbersCopy);
  let largestNum1 = numbersCopy[largestIndex];

  numbersCopy.splice(largestIndex, 1);
  largestIndex = 0;

  largestIndex = helperIndexOfLargestNum(numbersCopy);
  let largestNum2 = numbersCopy[largestIndex];

  return largestNum1 + largestNum2;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
*/
