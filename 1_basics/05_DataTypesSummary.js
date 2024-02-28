// Premitive
// 7 types
// string, number, boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.33

const isLoggedIn = true

const outsideTemp = null
let userEmail; 

const id = Symbol('123')
const id2 = Symbol('123')


console.log(id == id2);








//Reference (Non premitive)
//Types: Array, Objects, Functions 


const heros = ["iron man","raksh","flash"]//array


//objects look like below
let myObject = {
    name: "Rakshith",
    age: 22
}

function myFunction(){
    console.log("Hello")   
}    //datatype is function










// ****************************************************************************
//Two types of memory 
//Stack and heap
//primitive types use stack memory
//non-primitive types use heap memory


let myName = "Rakshith"
let myfirstName = myName
myfirstName = "PV"



let user1 = {
    email: "rakshith@gmail.com",
    pass: "12234"
}

console.log(user1.email);