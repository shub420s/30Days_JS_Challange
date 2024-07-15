// Activity 1: If Else Statements
//Task 1: WRP to check if a number is positive, negative ,or zero,and log the result to the console.
let x = 34; 
if(x>=0){
    console.log("number is positive",x);
} else{
    console.log("number is negative",x);
}

//Task 2: WRP to check if a persion is eligible to vote(age>=18) and log the result to the console.
age = 20;
if (age>=18) {
    console.log("You are eligible for voting");
} else {
    console.log("You are not eligible for voting");
}


 //Activity 2: Nested If-Else Statements
 //Task 3: WRP to find the largest of three number using nested if-else statment.
let a = 10;
let b = 20;
let c = 30;
if (c<=a) {
    console.log("c is less then a");
} else if(c<=b) {
    console.log("c is less then b");
} else{
    console.log("c is gratest all three among");
}


 //Activity 3: Switch Case
 //Task 4: WRP that uses a switch case to determine the day of week based on a number(1-7) and log the day name to the consle.
let number = 2;
switch(number){
case 1:
    console.log("Monday");
    break;
case 2:
    console.log("Tusday");
    break;
case 3:
    console.log("Wednesday");
break;
case 4:
    console.log("Thursday");
break;
case 5:
    console.log("Friday");
break;
case 6:
    console.log("Saturday");
break;
case 7:
    console.log("Sundy");
break;
default: 
console.log("Sorry you give the wrong number");
}
 //Task 5: WRP that uses a switch case to assign a grade ('A','B','C','D','F') based on score and log the day name to the consle.
let score = 89;
switch(score){
case score<35:
    console.log("F");
    break;
case 35<=score<50:
    console.log("D");
    break;
case 50<=score<65:
    console.log("C");
break;
case 65<=score<80:
    console.log("B");
break;
case 89:
    console.log("A");
break;
default: 
console.log("Please enter your score");
}


//Activity 4: Conditional (Ternary) Operator
//Task 6: WRP that uses the ternary operator to check if a number is even or odd and log the result to the console.
let num = 4;
console.log(num%2 == 0?'Even':'odd');


//Activity 5: Combinig Conditions
//Task 7: WRP to check if a year is a leap year using multiple conditions(divisible by 4,bu not 100 unless also divisible by 400) and log the result to the console.
let year = 2024;
if (year%4 == 0) {
    console.log("This year is a leap-year");
} else {
    console.log("This year is not a leap-year");
}