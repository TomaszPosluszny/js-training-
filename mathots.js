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
  console.log("The element is present in the array.");
} else {
  console.log("The element is not present in the array.");
}

//Task 2: Checking if a string contains a substring

const string = "Good morning!";
const substring = "morning";

if (string.includes(substring)) {
  console.log("The string contains the substring.");
} else {
  console.log("The string does not contain the substring.");
}