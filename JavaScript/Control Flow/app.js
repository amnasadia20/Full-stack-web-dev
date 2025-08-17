/*
if you have a money,
buy some stuff
else don't have any money,
Bring some money dude
*/
let age = 22;
if (age == 18) {
   // console.log("You are not allowed to attend the party");
    
} else if(age == 21) {
   // console.log("You can attend the party.");
    
} else {
    //console.log("Go home bro");
    
}

let a = 100;
let b = 100;

if(a>b) {
    console.log("a is greater than b")
} else if(a === b) {
    console.log("a is equal to b");
    
} else {
    console.log("a is less than b");
    
};

let time =10;
if(time < 10) {
    console.log("Good Morning");
    
} else if(time > 10) {
    console.log("Its too late to wake up!");
    
} else if(time > 20) {
    console.log("Good Evening");
    
} else {
    console.log("Error waking you up!");
    
}

// cONDITIONAL STATMENTS.
let password;
password = 1;
if(password == 8) {
    console.log("Welcome");
    
} else if(password <= 8) {
    console.log("Password is too short");
    
} else if (password >= 8) {
    console.log("Password too long");
    console.log("Password should be of 8 characters.");
    
    
} else {
    console.log("Please provide a password.");
    
}

//switch
// switch (expression) {
// case x:
      //print
      //break;
// case y;
      //prnt
      //break;

    //}

let x = 0;
let text;
switch (x) {
    case 0:
        text = "off";
        console.log(text);
        
        break;
    case 1:
        text = "On";
        console.log(text);
        break;
    case 3:
        text = "No value found";
        console.log(text);

}

// Challenge
let fruit;
fruit = "banana";
switch(fruit) {
    case "banana":
        console.log("Banana is a good fruit");
        break;
    case "Orange":
        console.log("I am not a fan of orange");
        break;
    case "Apple":
        console.log("How you like them Apples.");
        break;
    default:
        console.log("I have never heard of that fruit.");
        
        
}

// for loop: Don't Repeat Yourself.
/*console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
console.log("Salam Amna");
*/

//Let's convert the above code to for loop.
//for loop
/*
for (initialExpression; condition; incrementExpression) {
console.log()
}
*/
//for (let i = 0; i <= 25; i++) {
   // console.log("Salam Amna");
//}
//nested loop

for (let i = 0; i <= 25; i++) {
   // console.log("Outer Loop");

    for(let j = 1; j <=5; j++) {
        //console.log("Salam Amna");
        
    }
    
}

for (let idx = 0; idx <= 1000; idx++) {
    //console.log("Amna Sadia", idx);
    
};

//While loop
/*
While (condition) {
 code block to b executed.
}
*/
let i = 1;
while (i <= 5) {
   // console.log("Amna");
    i++;
}

//challenge problem.
let me = 10;
while (me <= 100) {
    //console.log("Amna", me);
    me++;

}

//Do While Loop. Do while loop will exactly do the same thing but syntax will be different.
let index =1;
do {
    console.log("Hello World", index);
    i++
    
} while (i<=5);

let myName = 20;
do {
  //  console.log("Amna Sadia", myName)
    myName++
    
} while(myName<=50);

// Logical Operations
/*
Logical AND (&&)
True if both the operands boolean values are true, else evaluates to false.
*/

/*const c = true;
const d = false;
const e =4;

console.log(c && d);
*/

/*
Logical OR(||)
True if either of the operand/boolean values is true.
evaluates to false if both are false.
*/
/*const c = true;
const d = true;
const e =4;

console.log(c || d);
*/

/*
Logical NOT(!)
True if the operands are false and vice versa.
*/

const c = true;
const d = false;
const e =4;

console.log(!c);

let passsWord = "amnaDeveloper"
if (passsWord.length >= 8 || passsWord.includes("amna")) {
    console.log("Valid Password");
    
    
} else {
    console.log("Invalid Password");
    
}