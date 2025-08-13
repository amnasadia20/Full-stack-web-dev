console.log("Assalamualaykum, I am Amna Sadia, and this is my last time learning JavaScript from a tutorial."); //Console is a object. and there are many other methods in it and i used log method, and it became console.log.
console.warn("This is warning!");
console.table({name: "Amna", age: 21});
console.clear(); // clears all above this line, nothing below this line is cleared.
// console.log("laalalala"); This is a simple text, because it is commented right now!
// log -> console.log
// This was all about consoles and comments in JavaScript.

// Now we are going to learn about Variables.
//Variables: A quantity which value can be changed during the execution of program is called variabale or we can just say variable is like a box, where we store our data and later if we want to reuse that data and maybe change that data so we can totally do that.
//Pseudo Code: A psuedo code is a code which is used for just implementation purposes like just for a diagram or somrthing like that but  it will not work.
// First thing to write when writing a variable is write a reserved keyword, then some sort of a name for variable and then type of value.
// (reserved keyword) (variable name) (type of value.)
// let var or const keyword.
// var is not used much.
//Declared Variable.
// let name; //initialize
// name = "Amna"; // declare, assigning a value to our variable.
// console.log(name);

let fruitName; //Declared Variable.
fruitName = "Apple"; //Assigned a value to my variable.
console.log(fruitName); 

/*We cannot use reserved keywords as name to our variables. We cannot leave whitespaces in variable names, we cannot write first name of our variable as a number, we can also not write - dashes. We can use underscore but not dashes. camelCase notation  common convention among developers.*/

let youtubeChannel;
youtubeChannel = "Amna Sadia";
console.log(youtubeChannel);

// Create variable with a name (name) and store your own name value.
let name;
name ="Amna";

//2.
let myDream;
myDream = "Successful Programmer";

//3.
let myGender;
myGender = "Female";

//4.twitter handle
let twitterHandle;
twitterHandle = "ireadanddevelop";

console.log(name);
console.log(myDream);
console.log(myGender);
console.log(twitterHandle);

//Primitive Types.
//Number.

let num = -21;
let nUm = 0.20;
let Num = 100000000;
console.log(num);
console.log(nUm);
console.log(Num);

console.log(typeof num);
console.log(typeof nUm);
console.log(typeof Num);

// Basic Maths or Arithmetic Operations in JavaScript.
let numOne = 15;
let numTwo = 6;
console.log(numOne + numTwo);
console.log(numOne - numTwo);
console.log(numOne * numTwo);
console.log(num / numTwo);
console.log(numOne++);
console.log(numOne++);
console.log(numTwo--);
console.log(numTwo--);
console.log(numOne ** numTwo);

let counter = 0;
console.log(counter);
counter++; //increment operator.
counter--; //decrement operator.
console.log(counter);

let firstFavNum = 19;
let secondFavNum = 20;
console.log(firstFavNum + secondFavNum);
console.log(firstFavNum * secondFavNum);
console.log(firstFavNum - secondFavNum);
console.log(firstFavNum / secondFavNum);
console.log(firstFavNum % secondFavNum);
console.log(firstFavNum ** secondFavNum);
firstFavNum++;
secondFavNum--;
console.log(firstFavNum);
console.log(secondFavNum);

// Boolean in Javascript: Boolean is a value which is either true or false.
let isTrue = NaN;
let Number = 23;
console.log(Number + undefined);


/*
falsy Values.
-> false
-> Null
-> undefined
-> 0
-> -0
-> NaN
-> '', "", ``, (empty quotes)
*/
let notDefined = null;
console.log(notDefined);

let isJsProgrammingLanguage;
isJsProgrammingLanguage = true;
console.log(isJsProgrammingLanguage);

let isJsHard;
isJsHard = false;
console.log(isJsHard);

let favNum;
favNum = 20;
console.log(favNum);

console.log(favNum + undefined);

/*
Comparasion Operator: Comparasion Operator is still devided into two categories:
1. Relational Operators.
-> > Greater than.
-> < Less than.
-> >= Greater than equal to.
-> <= Less than equal to.
2. Equality Operators.
*/

console.log(10 > 10);
console.log(10 < 10);
console.log(10 >= 10);
console.log(10 <= 10);

/*
Equality Operators.
=== strich equality (type + value.)
!== strict non-equality operator. (type + value)
= lose equality operator.
!= operator.
*/

console.log(10 === 10);
console.log(10 !== '10');
console.log(10 != '10');

let myFavNum = 19;
let mySecondFav = 20;
console.log(myFavNum > mySecondFav);
console.log(myFavNum < mySecondFav);
console.log(myFavNum >= mySecondFav);
console.log(myFavNum <= mySecondFav);
console.log(myFavNum === mySecondFav);
console.log(myFavNum !== mySecondFav);
console.log(myFavNum != mySecondFav);

//Strings.
let favPersonFirstName = "Arfa ";
let favPersonLastName = "Karim";
let fullname;
fullname = favPersonFirstName + favPersonLastName;
console.log(fullname); // This is concatenation of strings.

let upperCase = fullname.toUpperCase();
console.log(upperCase);

let message;
message =  ` my fav celeb is ${upperCase} and she was a really intelligent girl.`
console.log(message);
message += `Her fav place was Silicon Valley.`;
console.log(message);

//Type Conversion.

let money = "50";
console.log(typeof money);
//Convert String to Number.

money = parseInt(money); //way 1 of conversion.
money =+ money; // way two of conversion.
//money = Number(money); //Third way of conversion
console.log(typeof money);
console.log(money);

//Number to string.
money = money.toString();
console.log(money);
console.log(typeof money);

// Convert String to Decimal.
money = parseFloat(money);
console.log(money);
console.log(typeof money);

























