// Activity1: Arithmetic Operations
// Task 1: Write a program to add two number or log the result to the console.
let a = 10 ;
let b = 20;
let c = a+b;
console.log("sum is ",c);

// Task 2: WRP to subtract two numbers or log the result to the console.
c = b-c;
console.log("subtraction is ",c);

//Taske 3: WRP to Multiply two numbers or log the result to the consol.
c = a*b;
console.log("multiplication is ",c);

// Taske 4:  WRP to Divide two numbers or log the result to the consol.
c = b/a;
console.log("quesnet  is ",c);

// Taske 5: WRP to find the reminder when one number is divided by another and log the result to the consol.
c = b%a;
console.log("remainder is ",c);


// Activity 2: Assignment Operators
//Task 6: Use the += operatora to add a number to a varabl and log the result to the console.
a += b;
console.log("sum is ",a);

//Task 7: Use the -= operatora to subtact a number to a varabl and log the result to the console.
b -= a;
console.log("subtracted is",b);


//Activity3: Comparison Operators
//Taske 8: WRP to compare two numbers using '>' and '<' and log the result to the console.
a = 10;
b = 20;
c = b>a;
console.log("is b grater then a",c);

c = a>b;
console.log("is a grater then b",c);

//Task 9: WRP to compare two numbers using '>=' and '<=' and log the result to the console.
c = a >= b;
console.log("is a grater then b",c);

c = b>=a;
console.log("is b grater then a",c);

//Task 10: WRP to compare two numbers using '==' and '===' and log the result to the console.
console.log("is a equal to b ", a==b );
console.log("is b equal to b ", b===b );


//Activity 4: Logical Operators
//Task 11: WRP that uses the '&&' operator to combine two conditions and log the result to the console.
console.log("",a>15 && b>15);

//Task 12: WRP that uses the '||' operator to combine two conditions and log the result to the console.
console.log("",a>15 || b>15);

//Task 13: WRP that uses the '||' operator to combine two conditions and log the result to the console.
// console.log("",a>15  b>15);

//Task 14: WRP that uses the ternary operator to check if a number is positive or negative and log the result to the console
function getresult(x){
    return 2*x>10 ? 'Grater then 10' : 'Less then 10'
}
x = 7;
console.log("is x ",getresult(x));

