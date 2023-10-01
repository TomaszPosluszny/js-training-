// 1. charAt()

// Task 1: Write a function that takes a string as an argument and returns the first letter of that string.

function getFirstLetter(text) {
	return text.charAt(0);
}

const text = 'Sample text';
console.log(getFirstLetter(text));

// Task 2: Write a function that takes a string as an argument and returns the last letter of that string.

function getLastLetter(text) {
	return textOne.charAt(text.length - 1);
}

const textOne = 'Another task';
console.log(getLastLetter(textOne));

// 2. toUpperCase()

//  Task 1: Write a function that takes two strings as arguments and returns a new string where both strings are converted to uppercase. Use the toUpperCase() method.
function mergeAndConvertToUppercase(str1, str2) {
	const mergedString = str1.concat(str2);
	const uppercaseString = mergedString.toUpperCase();
	return uppercaseString;
}

const result = mergeAndConvertToUppercase('Hello', 'World');
console.log(result);

//Task2: Write a program that prompts the user for a string, converts all the letters to uppercase using the toUpperCase() method, and then displays the modified string on the screen

const input = prompt('Enter a string:');
const uppercaseString = input.toUpperCase();

console.log('Modified string:', uppercaseString);

// 3 toLowerCase()

// Task 1:  Write a function that takes two strings as arguments and returns a new string where both strings are converted to lowercase. Use the toLowerCase() method.

function mergeAndConvertToLowerCase(a, b) {
	const mergeString = a.concat(b);
	const lowercaseString = mergeString.toLowerCase();
	return lowercaseString;
}

const resultLower = mergeAndConvertToLowerCase('Hello', 'World');
console.log(resultLower);

// Task 2: Write a program that prompts the user for a string, converts all the letters to lowercase using the toLowerCase() method, and then displays the modified string on the screen.

const inputLover = prompt('Enter a string:');
var lowercaseString = inputLover.toLowerCase();
console.log('Modified string:', lowercaseString);

// split()

//  Task 1: Counting words in a sentence The task is to determine the number of words in a given sentence. We can use the split() method to split the sentence into an array of words, and then count the number of elements in that array.

function countWords(sentence) {
	const words = sentence.split(' ');
	return words.length;
}

const sentence = 'This is an example sentence.';
const wordCount = countWords(sentence);
console.log('Word count: ' + wordCount);

// Task 2: Reversing a string.The task is to reverse a given string. We can use the split() method to convert the string into an array, then use the reverse() method to reverse the order of elements in the array. Finally, we use the join() method to concatenate the reversed characters back into a single string.

function reverseString(inputString) {
	const charArray = inputString.split('');
	const reversedArray = charArray.reverse();
	const reversedString = reversedArray.join('');
	return reversedString;
}

const stringToReverse = 'Hello, World!';
const reversedString = reverseString(stringToReverse);
console.log('Reversed string: ' + reversedString);

// join()

// Task 1: Joining array elements into a string. The task is to concatenate the elements of an array into a single string, separating them with a specified separator. In this case, we can use the join() method to combine the array elements into a string, using the separator as the method's argument.

const fruits = ['apple', 'banana', 'orange'];
const joinedString = fruits.join(', ');
console.log('Joined string: ' + joinedString);

//Task 2: Generating time format. The task is to generate a time format in the form of hour:minute based on two numbers representing the hour and minute. We can use the join() method to concatenate these two numbers into a string, separating them with a colon.

function formatTime(hour, minute) {
	var timeArray = [hour, minute];
	var formattedTime = timeArray.join(':');
	return formattedTime;
}

var hour = 9;
var minute = 30;
var formattedTimeString = formatTime(hour, minute);
console.log('Formatted time: ' + formattedTimeString);

// indexOf

//Task 1 : Check if an element exists in an array.

const array = [1, 2, 3, 4, 5];
const element = 1;

if (array.indexOf(element) !== -1) {
	console.log('The element is present in the array.');
} else {
	console.log('The element is not present in the array.');
}

//Task 2: Find the index of the first occurrence of a specific letter in a string

const textTop = 'Sample text';
const letter = 't';

const index = textTop.indexOf(letter);
if (index !== -1) {
	console.log(
		`The index of the first occurrence of the letter "${letter}" is ${index}.`
	);
} else {
	console.log(`The letter "${letter}" does not occur in the text.`);
}

// slice

//Task 1 : Get a subarray from an array

const numbersSlice = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const startNumber = 2;
const endNumber = 7;

const subArray = numbersSlice.slice(startNumber, endNumber);
console.log(subArray);

//Task 2: Get a portion of text from a string

const textSlice = 'Lorem ipsum dolor sit amet';
const start = 6;
const end = 11;

const subText = text.slice(start, end);
console.log(subText);

// concat

//Task 1: Concatenating Two Arrays. Write a function that takes two arrays as arguments and returns a new array that is the result of concatenating those two arrays.

function mergeArrays(array1, array2) {
	return array1.concat(array2);
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = mergeArrays(array1, array2);
console.log(mergedArray);

//  Task 2: Concatenating Strings. Write a function that takes two strings as arguments and returns a new string that is the result of concatenating those two strings.

function mergeStrings(string1, string2) {
	return string1.concat(string2);
}

const string1 = 'Hello';
const string2 = 'World!';
const mergedString = mergeStrings(string1, string2);
console.log(mergedString);

//replace

//Task 1: Replacing all occurrences of a specific character in a string:

const sentence1 = 'Hello, world!';
const modifiedSentence = sentence1.replace('o', 'X');
console.log(modifiedSentence);

//Task 2: Removing all whitespace characters from a string:

const text2 = '   Hello,     world!   ';
const modifiedText = text2.replace(/\s/g, '');
console.log(modifiedText);

//trim

//Task 1: Write a function that takes a password as an argument and checks if the password is valid. The validity conditions are: the password must be at least 8 characters long and cannot contain any leading or trailing spaces. Use the trim() method to remove any whitespace characters at the beginning and end of the password.

function checkPassword(password) {
	if (password.trim().length < 8) {
		return false; // The password is too short
	}

	if (password !== password.trim()) {
		return false;
	}

	return true;
}

console.log(checkPassword('  password '));
console.log(checkPassword('password123'));
console.log(checkPassword('pass word'));

//Task 2: Write a function that takes an array of strings and returns a new array where leading and trailing whitespace characters are removed from each string. Utilize the trim() method to remove whitespace characters.

function removeWhitespace(stringsArray) {
	let newArray = [];

	for (let i = 0; i < stringsArray.length; i++) {
		let string = stringsArray[i].trim();
		newArray.push(string);
	}

	return newArray;
}

let array3 = ['  string 1 ', ' string 2 ', '  string 3 '];
let newArray = removeWhitespace(array3);
console.log(newArray);

//includes()

//Task 1: Checking if an element is present in an array

const arrayNumber = [1, 2, 3, 4, 5];
const elementNumber = 3;

if (arrayNumber.includes(elementNumber)) {
	console.log('The element is present in the array.');
} else {
	console.log('The element is not present in the array.');
}

//Task 2: Checking if a string contains a substring

const string = 'Good morning!';
const substring = 'morning';

if (string.includes(substring)) {
	console.log('The string contains the substring.');
} else {
	console.log('The string does not contain the substring.');
}

//substring()

//Task 1: Extracting a substring from a string

const str2 = 'Hello, World!';
const startIndex = 7;
const endIndex = 12;

const extractedSubstring = str2.substring(startIndex, endIndex);
console.log(extractedSubstring);

//Task 2: Extracting the last characters from a string

const str1 = 'Hello, World!';
const n = 6;

const extractedSubstring1 = str1.substring(str1.length - n);
console.log(extractedSubstring1);

//startsWith()

// Task 1: Checking if a string starts with a specific prefix

const str3 = 'Hello, World!';
const prefix = 'Hello';

if (str3.startsWith(prefix)) {
	console.log('The string starts with the prefix.');
} else {
	console.log('The string does not start with the prefix.');
}

//Task 2: Selecting elements based on a prefix

const words = ['apple', 'banana', 'orange', 'grape'];
const prefix1 = 'b';

const wordsWithPrefix = words.filter((word) => word.startsWith(prefix1));
console.log(wordsWithPrefix);

//endsWith()

//Task 1: Checking if a string ends with a specific suffix.

const str5 = 'Hello, World!';
const suffixx = 'World!';

if (str5.endsWith(suffixx)) {
	console.log('The string ends with the suffix.');
} else {
	console.log('The string does not end with the suffix.');
}

//Task 2: Selecting elements based on a suffix.

const wordss = ['apple', 'banana', 'orange', 'grape'];
const suffix = 'ana';

const wordsWithSuffix = wordss.filter((word) => word.endsWith(suffix));
console.log(wordsWithSuffix);

//toLocaleUpperCase()

//Task 1: Converting text to uppercase in the appropriate language.

const text1 = 'wielka litera';
const language1 = 'pl';

const upperCaseText = text1.toLocaleUpperCase(language1);
console.log(upperCaseText);

//Task 2: Selecting elements based on uppercase letters.

const fruits1 = ['apple', 'Banana', 'Orange', 'grape'];
const language = 'en';

const wordsWithUpperCase = fruits1.filter(
	(word) => word[0].toLocaleUpperCase(language) === word[0]
);
console.log(wordsWithUpperCase);

// toLocaleUpperCase()

//Task 1: Capitalizing Names in Different Languages.

const names = ['maria', 'juan', 'emily', 'hans'];
const language3 = 'es'; // Spanish

const capitalizedNames = names.map((name) => name.toLocaleUpperCase(language3));
console.log(capitalizedNames);

//Task 2: Formatting Currency Values.

const prices = [10.99, 25.5, 5.75, 100.0];
const locale = 'de-DE'; // German (Germany)

const formattedPrices = prices.map((price) =>
	price.toLocaleString(locale, { style: 'currency', currency: 'EUR' })
);
console.log(formattedPrices);

//toString()

//Task 1: Converting a Number to a String.

const number = 42;
const numberAsString = number.toString();

console.log('Number as string:', numberAsString);
console.log('Type of numberAsString:', typeof numberAsString);

//Task 2: Converting an Array to a String with a Custom Separator.

const fruits4 = ['apple', 'banana', 'orange', 'grape'];
const separator = ' | ';

const fruitsAsString = fruits4.toString();
const fruitsWithSeparator = fruits4.join(separator);

console.log('Fruits as comma-separated string:', fruitsAsString);
console.log('Fruits with custom separator:', fruitsWithSeparator);

//toFixed()

//Formatting Decimal Places in a Number.

const number6 = 123.456789;
const decimalPlaces = 2;

const formattedNumber = number6.toFixed(decimalPlaces);
console.log('Formatted number:', formattedNumber);

//Task 2: Calculating the Total Price with Specific Decimals.

const prices3 = [10.99, 25.5, 5.75, 100.0];
const decimalPlaces1 = 2;

const totalPrice = prices3.reduce((sum, price) => sum + price, 0);
const formattedTotalPrice = totalPrice.toFixed(decimalPlaces1);

console.log('Total price:', formattedTotalPrice);

//parseInt()

//Task 1: Converting a String to an Integer.

const numericString = '42';
const integerValue = parseInt(numericString);

console.log('Integer value:', integerValue);
console.log('Type of integerValue:', typeof integerValue);

//Task 2: Converting Binary String to Integer.

const binaryString = '101010';
const integerValue1 = parseInt(binaryString, 2);

console.log('Integer value:', integerValue1);

// parseFloat(string)

// Task 1: Converting a String to a Floating-Point Number.

const floatString = '3.14';
const floatValue = parseFloat(floatString);

console.log('Floating-point value:', floatValue);
console.log('Type of floatValue:', typeof floatValue);

//Task 2: Extracting Price from a String.

const description = 'The price is $19.99.';
const priceString = description.match(/\d+\.\d+/)[0];
const priceValue = parseFloat(priceString);

console.log('Extracted price:', priceValue);

//isArray()

//Task 1: Checking if a Variable is an Array.

const value1 = [1, 2, 3];
const value2 = 'Hello, World!';

console.log('Is value1 an array?', Array.isArray(value1));
console.log('Is value2 an array?', Array.isArray(value2));

//Task 2: Filtering Non-Array Values from an Array.

const mixedValues = [1, 'apple', [2, 3], 'banana', [4, 5], 'grape'];

const arraysOnly = mixedValues.filter((value) => Array.isArray(value));
console.log('Arrays only:', arraysOnly);

//push()

//Task 1: Adding an Element to an Array.

const numbers6 = [1, 2, 3, 4];
const newNumber = 5;

numbers6.push(newNumber);

console.log('Updated numbers array:', numbers6);

//Task 2: Creating a Shopping List.

const shoppingList = [];

shoppingList.push('Apple');
shoppingList.push('Banana');
shoppingList.push('Milk');
shoppingList.push('Bread');

console.log('Shopping list:', shoppingList);

//pop()

//Task 1: Removing the Last Element from an Array.

const fruitsBig = ['apple', 'banana', 'orange', 'grape'];

const removedFruit = fruitsBig.pop();

console.log('Removed fruit:', removedFruit);
console.log('Updated fruits array:', fruits);

//Task 2: Retrieving and Processing Elements from the End of an Array.

const numbers10 = [1, 2, 3, 4, 5];
const reversedNumbers = [];

while (numbers10.length > 0) {
	const poppedNumber = numbers10.pop();
	reversedNumbers.push(poppedNumber);
}

console.log('Reversed numbers:', reversedNumbers);

//shift()

//Task 1: Removing the First Element from an Array.

const fruits7 = ["apple", "banana", "orange", "grape"];

const removedFruit5 = fruits.shift();

console.log("Removed fruit:", removedFruit5);
console.log("Updated fruits array:", fruits7);

//Task 2: Processing Elements from the Beginning of an Array.

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const firstTwoWeekdays = [];

while (weekdays.length > 0 && firstTwoWeekdays.length < 2) {
  const shiftedDay = weekdays.shift();
  firstTwoWeekdays.push(shiftedDay);
}

console.log("First two weekdays:", firstTwoWeekdays);

//unshift()

//Task 1: Adding Elements to the Beginning of an Array.

const numbersAdd = [3, 4, 5];
const addedNumbers = [1, 2];

numbersAdd.unshift(...addedNumbers);

console.log("Updated numbers array:", numbers);

//Task 2: Building a Priority Queue.

const priorityQueue = [];

function enqueueWithPriority(item, priority) {
  priorityQueue.unshift({ item, priority });
}

enqueueWithPriority("Task A", 2);
enqueueWithPriority("Task B", 1);
enqueueWithPriority("Task C", 3);

console.log("Priority Queue:", priorityQueue);

//reverse()


//Task 2: Creating a Palindrome from a String.

const numbers21 = [1, 2, 3, 4, 5];

numbers21.reverse();

console.log("Reversed numbers array:", numbers);

//Task 2: Creating a Palindrome from a String.

const originalString = "radar";
const reversedString1 = originalString.split('').reverse().join('');

console.log("Original string:", originalString);
console.log("Reversed string:", reversedString1);

if (originalString === reversedString1) {
  console.log("It's a palindrome!");
} else {
  console.log("It's not a palindrome.");
}

//sort()

//Task 1: Sorting Numbers in Ascending Order.

const numbers23 = [5, 2, 9, 1, 5];

numbers23.sort(function(a, b) {
  return a - b;
});

console.log("Sorted numbers array (ascending order):", numbers);

//Task 2: Sorting Strings by Length.

const words23 = ["apple", "orange", "banana", "kiwi", "grape"];

words23.sort(function(a, b) {
  return a.length - b.length;
});

console.log("Sorted words array (by length):", words);
