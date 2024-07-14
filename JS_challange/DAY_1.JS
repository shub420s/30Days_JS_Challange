// Activity 1: Variable Declearation 
// Taske 1 : Decleare a variable using var assigne the value and log the value to the console.
var Taske1 = 69;
console.log("The out put the ", Taske1);

// Taske 2: Decleare a variable using let  assigne the striing and log the value to the console.
let Taske2 = "Shubham";
console.log("The string is ", Taske2);


//Activity2: constant Declearation 
// Taske 3: Declare a variable using const, assign it a boolean value , and log the value to the console.
const Taske3 = false;
console.log("The boolean  is ", Taske3);


//Activity3 : Data type 
// Taske4: Create a variable of diffirent data type.
let  Taske4a = "Shubham";
let  Taske4b = 69;
let  Taske4c = true;
let  Taske4d = {
        a:10, b:20
};
let  Taske4e = [1,2,3,4,5];
console.log(typeof Taske4a);
console.log(typeof Taske4b);
console.log(typeof Taske4c);
console.log(typeof Taske4d);
console.log(typeof Taske4e); // here the output shoud be array but output is object , Is array a object?? 
// console.log("Element of the Taske4e is ",Taske4e);


// Activity 4: Reassigning Variables.
// Taske5: Declear a variable using 'let' , assign it an initial value , reassign a new value , and log both values both
// values to the console.
let Taske5 = 10;
function reassign(){
    Taske5 =  300;
    return console.log("reassigne value is ",Taske5);
}
console.log("initial value is ",Taske5);
reassign();
Taske5 = 20;
console.log("Reassigne value is ",Taske5);


//Activity5: Understanding 'const'
// Taske6: Try reassigining a variable declared with const and observe the error.
const Taske6 = "10";
// Taske6 = "bhardwaj";
console.log("The value is ",Taske6);
//TypeError: Assignment to constant variable

// But we reassigne the value of Object 
const Taske6Obj = {
    x:10,y:20
};
console.log("initial is ",Taske6Obj);
Taske6Obj.x = 40;
Taske6Obj.y = 50;
console.log("Reassigne value is ",Taske6Obj);

//This is happene because of here we do not refering to another object.
//One the other hand here we are changing the value. 