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

/*
const sumLargestNumbers = function (numbers) {
  let numbersCopy = numbers.slice();
  let sum = 0;

  const helperIndexOfLargestNum = (array) => {
    let largestIndex = 0;
    for (let i = 1; i < array.length; i++) {
      if (array[i] > array[largestIndex]) {
        largestIndex = i;
      }
    }
    sum += array[largestIndex];
    array.splice(largestIndex, 1);
  };

  helperIndexOfLargestNum(numbersCopy);
  helperIndexOfLargestNum(numbersCopy);

  return sum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
*/

/*
const conditionalSum = function (integers, oddOrEven) {
  let sum = 0;

  for (let integer of integers) {
    if (oddOrEven === "odd" && integer % 2 === 1) {
      sum += integer;
    } else if (oddOrEven === "even" && integer % 2 === 0) {
      sum += integer;
    }
  }

  return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
*/

/*
const numberOfVowels = function (string) {
  let vowelCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < string.length; i++) {
    vowelCount += vowels.includes(string[i]) ? 1 : 0;
  }
  return vowelCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
*/

/*
const instructorWithLongestName = function (instructors) {
  let longestNameIndex = 0;
  for (let i = 0; i < instructors.length; i++) {
    if (
      instructors[i].name.length > instructors[longestNameIndex].name.length
    ) {
      longestNameIndex = i;
    }
  }
  return instructors[longestNameIndex];
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
*/

/*
const urlEncode = function (text) {
  let newText = text.trim();
  let counter = 0;

  while (counter < newText.length) {
    if (/\s/.test(newText[counter])) {
      newText = newText.slice(0, counter) + "%20" + newText.slice(counter + 1);
      counter += 3;
    } else {
      counter++;
    }
  }

  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
*/

const whereCanIPark = function (spots, vehicle) {
  // Code here!
  const isSpotAvailable = (spot, vehicle) => {
    if (vehicle === "regular") {
      return spot === "R";
    } else if (vehicle === "small") {
      return spot === "R" || spot === "S";
    } else if (vehicle === "motorcycle") {
      return spot === "R" || spot === "S" || spot === "M";
    }
  };

  for (let row = 0; row < spots.length; row++) {
    for (let column = 0; column < spots[row].length; column++) {
      if (isSpotAvailable(spots[row][column], vehicle)) {
        return [column, row];
      }
    }
  }

  return false;
};

console.log(
  whereCanIPark(
    [
      // COLUMNS ARE X
      // 0    1    2    3    4    5
      ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
      ["s", "M", "s", "S", "r", "M"], // 1
      ["s", "M", "s", "S", "r", "m"], // 2
      ["S", "r", "s", "m", "r", "M"], // 3
      ["S", "r", "s", "m", "r", "M"], // 4
      ["S", "r", "S", "M", "M", "S"], // 5
    ],
    "regular"
  )
);

console.log(
  whereCanIPark(
    [
      ["M", "M", "M", "M"],
      ["M", "s", "M", "M"],
      ["M", "M", "M", "M"],
      ["M", "M", "r", "M"],
    ],
    "small"
  )
);

console.log(
  whereCanIPark(
    [
      ["s", "s", "s", "s", "s", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["s", "m", "s", "S", "r", "s"],
      ["S", "r", "s", "m", "r", "s"],
      ["S", "r", "s", "m", "R", "s"],
      ["S", "r", "S", "M", "m", "S"],
    ],
    "motorcycle"
  )
);
