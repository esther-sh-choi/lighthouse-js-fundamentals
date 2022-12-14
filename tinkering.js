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

/*
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
*/

/*
const checkAir = function (samples, threshold) {
  let numClean = 0;
  let numDirty = 0;

  for (let sample of samples) {
    sample === "clean" ? numClean++ : numDirty++;
  }

  return numDirty / numClean <= threshold ? "Clean" : "Polluted";
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
*/

/*
const repeatNumbers = function (data) {
  const repeatNumbersHelper = (number, repeat) => {
    let repeatedNumber = "";
    for (let i = 0; i < repeat; i++) {
      repeatedNumber += number;
    }
    return repeatedNumber;
  };

  let renderedData = "";
  for (let dataIndex = 0; dataIndex < data.length; dataIndex++) {
    if (!renderedData) {
      renderedData += repeatNumbersHelper(
        data[dataIndex][0],
        data[dataIndex][1]
      );
    } else {
      renderedData +=
        ", " + repeatNumbersHelper(data[dataIndex][0], data[dataIndex][1]);
    }
  }

  return renderedData;
};

console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
*/

/*
const camelCase = function (input) {
  const inputArr = input.split(" ").map((word, idx) => {
    if (idx > 0) {
      return word[0].toUpperCase() + word.slice(1);
    }
    return word;
  });

  return inputArr.join("");
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));
*/

/*
const multiplicationTable = function (maxValue) {
  let rows = "";
  for (let j = 1; j <= maxValue; j++) {
    if (j > 1) {
      rows += "\n";
    }

    for (let i = 1; i <= maxValue; i++) {
      rows += i === 1 ? i * j : " " + i * j;
    }
  }

  return rows;
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
*/
/*
const PI = 3.14159;

const sphereVolume = function (radius) {
  return (4 / 3) * PI * Math.pow(radius, 3);
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return PI * Math.pow(radius, 2) * (height / 3);
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return height * width * depth;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let total = 0;
  for (let solid of solids) {
    if (solid.type === "sphere") {
      total += sphereVolume(solid.radius);
    } else if (solid.type === "cone") {
      total += coneVolume(solid.radius, solid.height);
    } else if (solid.type === "prism") {
      total += prismVolume(solid.height, solid.width, solid.depth);
    }
  }
  return total;
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
*/

/*
const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  for (let recipe of recipes) {
    if (
      (bakeryA.includes(recipe.ingredients[0]) ||
        bakeryB.includes(recipe.ingredients[0])) &&
      (bakeryA.includes(recipe.ingredients[1]) ||
        bakeryB.includes(recipe.ingredients[1]))
    ) {
      return recipe.name;
    }
  }
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));
*/

/*
const getLongMonthOptionOne = (date) => {
  const options = { month: "long" };
  const newDate = new Date(date);
  const month = new Intl.DateTimeFormat("en-US", options).format(newDate);
  return month;
};

const getLongMonthOptionTwo = (month) => {
  const monthIndex = Number(month) - 1;
  const monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthList[monthIndex];
};

const getDay = (day) => {
  let removeZero = Number(day).toString();
  if (day === "11" || day === "12" || day === "13") {
    removeZero += "th";
  } else if (day[1] === "1") {
    removeZero += "st";
  } else if (day[1] === "2") {
    removeZero += "nd";
  } else if (day[1] === "3") {
    removeZero += "rd";
  } else {
    removeZero += "th";
  }
  return removeZero;
};

const talkingCalendar = function (date) {
  const dateArr = date.split("/");
  const month = getLongMonthOptionOne(date);
  // const month = getLongMonthOptionTwo(dateArr[1]);
  const day = getDay(dateArr[2]);
  const year = dateArr[0];

  return `${month} ${day}, ${year}`;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
*/

/*
const calculateChange = function (total, cash) {
  let change = cash - total;
  let changeObject = {};

  while (change > 0) {
    if (change / 2000 >= 1) {
      changeObject.twentyDollar = Math.floor(change / 2000);
      change = change % 2000;
    } else if (change / 1000 >= 1) {
      changeObject.tenDollar = Math.floor(change / 1000);
      change = change % 1000;
    } else if (change / 500 >= 1) {
      changeObject.fiveDollar = Math.floor(change / 500);
      change = change % 500;
    } else if (change / 200 >= 1) {
      changeObject.twoDollar = Math.floor(change / 200);
      change = change % 200;
    } else if (change / 100 >= 1) {
      changeObject.oneDollar = Math.floor(change / 100);
      change = change % 100;
    } else if (change / 25 >= 1) {
      changeObject.quarter = Math.floor(change / 25);
      change = change % 25;
    } else if (change / 10 >= 1) {
      changeObject.dime = Math.floor(change / 10);
      change = change % 10;
    } else if (change / 5 >= 1) {
      changeObject.nickel = Math.floor(change / 5);
      change = change % 5;
    } else {
      changeObject.penny = change;
      change = 0;
    }
  }

  return changeObject;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
*/

/*
const organizeInstructors = function (instructors) {
  let organizeByCourse = {};

  for (let instructor of instructors) {
    if (!organizeByCourse[instructor.course]) {
      organizeByCourse[instructor.course] = [instructor.name];
    } else {
      organizeByCourse[instructor.course].push(instructor.name);
    }
  }

  return organizeByCourse;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);
*/

/*
const makeCase = function (input, casings) {
  const toCamelCase = (input) => {
    const inputArr = input.split(" ").map((word, idx) => {
      if (idx > 0) {
        return word[0].toUpperCase() + word.slice(1);
      }
      return word;
    });
    return inputArr.join("");
  };

  const toPascalCase = (input) => {
    const inputArr = input.split(" ").map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    });
    return inputArr.join("");
  };

  const toSnakeCase = (input) => {
    return input.split(" ").join("_");
  };

  const toKebabCase = (input) => {
    return input.split(" ").join("-");
  };

  const toTitleCase = (input) => {
    const inputArr = input.split(" ").map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    });
    return inputArr.join(" ");
  };

  const toVowelCase = (input) => {
    const vowels = ["a", "e", "i", "o", "u"];
    let strCopy = input.slice();
    for (let i = 0; i < input.length; i++) {
      if (vowels.includes(input[i])) {
        strCopy =
          strCopy.slice(0, i) + strCopy[i].toUpperCase() + strCopy.slice(i + 1);
      }
    }
    return strCopy;
  };

  const toConsonantCase = (input) => {
    const vowels = ["a", "e", "i", "o", "u"];
    let strCopy = input.slice();
    for (let i = 0; i < input.length; i++) {
      if (!vowels.includes(input[i])) {
        strCopy =
          strCopy.slice(0, i) + strCopy[i].toUpperCase() + strCopy.slice(i + 1);
      }
    }
    return strCopy;
  };

  const toUpperCase = (input) => {
    return input.toUpperCase();
  };

  const casingOptions = [
    { type: "camel", method: toCamelCase },
    { type: "pascal", method: toPascalCase },
    { type: "snake", method: toSnakeCase },
    { type: "kebab", method: toKebabCase },
    { type: "title", method: toTitleCase },
    { type: "vowel", method: toVowelCase },
    { type: "consonant", method: toConsonantCase },
    { type: "upper", method: toUpperCase },
  ];

  // More than one case type
  if (typeof casings === "object") {
    for (let casing of casings) {
      casingOptions.forEach((option) => {
        if (option.type === casing) {
          input = option.method(input);
        }
      });
    }
    return input;
  }

  // One case type
  casingOptions.forEach((option) => {
    if (option.type === casings) {
      input = option.method(input);
    }
  });

  return input;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
*/

/*
const urlDecode = function (text) {
  let keyValueArray = text.split("&");

  for (let i = 0; i < keyValueArray.length; i++) {
    keyValueArray[i] = keyValueArray[i].split("=");
  }

  for (let j = 0; j < keyValueArray.length; j++) {
    keyValueArray[j][1] = keyValueArray[j][1].split("%20").join(" ");
  }

  const keyValueObj = {};

  for (let keyValue of keyValueArray) {
    keyValueObj[keyValue[0]] = keyValue[1];
  }

  return keyValueObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);
*/

/*
const squareCode = function (message) {
  const noSpaceMessage = message.replace(/ /g, "");
  const column = Math.ceil(Math.sqrt(noSpaceMessage.length));

  const squareArr = [];
  let start = 0;
  let end = column;

  while (end < noSpaceMessage.length + column) {
    squareArr.push(noSpaceMessage.slice(start, end));
    start += column;
    end += column;
  }

  const rotateSquare = [];

  for (let j = 0; j < column; j++) {
    let word = "";
    for (let i = 0; i < squareArr.length; i++) {
      if (squareArr[i][j]) {
        word += squareArr[i][j];
      }
    }
    rotateSquare.push(word);
  }

  return rotateSquare;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);
*/

/*
//Replace coordinates with any other value 0-8
let whiteQueen = [1, 5];
let blackQueen = [2, 3];

let generatedBoard = (whiteQueen, blackQueen) => {
  let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
  ];

  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  return board;
};

const queenThreat = (board) => {
  let queenPositions = [];
  for (let row = 0; row < 8; row++) {
    for (let column = 0; column < 8; column++) {
      if (board[row][column] === 1) {
        queenPositions.push([row, column]);
      }
    }
  }

  const anotherQueenIsDiagonal = (x, y) => {
    let upLeft = [x - 1, y - 1];
    let upRight = [x - 1, y + 1];
    let downLeft = [x + 1, y - 1];
    let downRight = [x + 1, y + 1];

    while (upLeft[0] >= 0 && upLeft[1] >= 0) {
      if (board[upLeft[0]][upLeft[1]] === 1) {
        return true;
      }
      upLeft[0]--;
      upLeft[1]--;
    }

    while (upRight[0] >= 0 && upRight[1] < 8) {
      if (board[upRight[0]][upRight[1]] === 1) {
        return true;
      }
      upRight[0]--;
      upRight[1]++;
    }

    while (downLeft[0] < 8 && downLeft[1] >= 0) {
      if (board[downLeft[0]][downLeft[1]] === 1) {
        return true;
      }
      downLeft[0]++;
      downLeft[1]--;
    }

    while (downRight[0] < 8 && downRight[1] < 8) {
      if (board[downRight[0]][downRight[1]] === 1) {
        return true;
      }
      downRight[0]++;
      downRight[1]++;
    }

    return false;
  };

  if (queenPositions[0][0] === queenPositions[1][0]) {
    // If queens are in the same row
    return true;
  } else if (queenPositions[0][1] === queenPositions[1][1]) {
    // If queens are in the same column
    return true;
  }

  // Can use either queenPositions[0] or queenPositions[1]
  return anotherQueenIsDiagonal(queenPositions[0][0], queenPositions[0][1]);
};

console.log(queenThreat(generatedBoard(whiteQueen, blackQueen)));
*/

const blocksAway = function (directions) {
  let x = 0;
  let y = 0;
  let directionObj = [
    {
      direction: "north",
      move: function (distance) {
        y += distance;
      },
    },
    {
      direction: "east",
      move: function (distance) {
        x += distance;
      },
    },
    {
      direction: "south",
      move: function (distance) {
        y -= distance;
      },
    },
    {
      direction: "west",
      move: function (distance) {
        x -= distance;
      },
    },
  ];

  let directionIndex;
  if (directions[0] === "right") {
    directionIndex = 1;
    directionObj[1].move(directions[1]);
  } else if (directions[0] === "left") {
    directionIndex = 0;
    directionObj[0].move(directions[1]);
  }

  for (let i = 2; i < directions.length; i += 2) {
    if (directions[i] === "right") {
      directionIndex = directionIndex === 3 ? 0 : directionIndex + 1;
      directionObj[directionIndex].move(directions[i + 1]);
    } else if (directions[i] === "left") {
      directionIndex = directionIndex === 0 ? 3 : directionIndex - 1;
      directionObj[directionIndex].move(directions[i + 1]);
    }
  }

  const finalDestination = { east: x, north: y };
  return finalDestination;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(
  blocksAway([
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
    "left",
    1,
    "right",
    1,
  ])
);
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));
