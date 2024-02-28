let age = "25"

// console.log(typeof age); //string

//for conversion

let valueInNumber = Number(age)

// console.log(typeof valueInNumber);//string is converted to number
//we get NAN if the string is converted to number
//"33" => 33
//"33abc" => NaN
//true => 1; false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof booleanIsLoggedIn)
// console.log(booleanIsLoggedIn)


emptyString = " "
// console.log(typeof emptyString)

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);




/*************** OPERATIONS *****************/

let value = 4
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2/2);
// console.log(2*2);
// console.log(2**3);
// console.log(2%3);

let str1 = "hello"
let str2 = " rakshith"

let str3 = str1+str2
// console.log(str3);

// console.log(+true); //gives 1

let num1, num2, num3
num1 = num2 = num3 =2+2

let roundCounter = 100
roundCounter++
// console.log(roundCounter);


let x = 3
let y = x++

console.log(`x:${x},y:${y}`);



let a = 3
let b = ++a

console.log(`a:${a},b:${b}`);