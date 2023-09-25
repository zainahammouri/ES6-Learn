// variables
    // var
        //function scope
        // can be redeclared
        // Undefined when accessing variables before its declared
        // creat a proparites in the window object
    // let
        // block scope
        // can't be redeclared
        // Refrance Error when accessing variables before its declared
        //Dose not creat a proparites in the window object
    // const
        //block scope
        // can't be redeclared
        // Refrance Error when accessing variables before its declared
        //Dose not creat a proparites in the window object

///////////////////////
// window object as this object:
//for example:
var name =1;
let z=2;

console.log(window.name);
console.log(window.z);
console.log(this.name);
console.log(this.z);
console.log(window);
///////////////////////////////
// Arrow functions
//Regular function With No prameters
let test=function(){
    return 4;
}
//the same of this statment
   //with No prameter
let test1=() =>4;
let test3= _ => 5

console.log(test());
console.log(test1());
console.log(test3());
//Regular function with One prameter
let r2=function(pram) { 
    return pram*2;
}

console.log(r2(3));

//Arrow function with one parameter
let a1=(pram)=> pram*2;

console.log(a1(10));

//Arrow function with multi parameters

let a2=(pram1,pram2)=> pram1+pram2;

console.log(a2(10,20));
///////////////////////////////////////////////////
// let d=function(){
//     document.getElementById('show').innerHTML=this;
// }
// //window object called the function
// window.onload=d;
// //Button object called the function
// document.getElementById('button').addEventListener('click',d);


//Arrow with this object 
let q=()=>document.getElementById('show').innerHTML=this;

window.onload=q;

() => document.getElementById('#button').addEventListener('click');