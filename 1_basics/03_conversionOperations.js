let age = "25"

console.log(typeof age); //string

//for conversion

let valueInNumber = Number(age)

console.log(typeof valueInNumber);//string is converted to number
//we get NAN if the string is converted to number
//"33" => 33
//"33abc" => NaN
//true => 1; false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn)
console.log(booleanIsLoggedIn)


emptyString = " "
console.log(typeof emptyString)

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);