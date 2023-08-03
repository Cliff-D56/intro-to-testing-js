// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }

const helloWorld = () => "Hello, World!";
const sayHello = (name)=>(typeof name!="string")||(typeof Number(name)!=="number")?"Hello, World!":"Hello, "+name+"!";
// function sayHello(x){
//     if (x==="Wifey"){
//         return "Hello, Wifey!";
//     }
//     else if (x==="Alex"){
//         return "Hello, Alex!";
//     }
//     else {
//         return "Hello, Clifford!";
//     }
// }
// function isFive(x){
//     if(x===5||x==="5") {
//         return true;
//     }
//     else{
//         return false;
//     }
// };
const isFive=(x)=>(x===5||x==="5");
//const isEven=(x)=>(x===3||x==="banana"||x===Infinity||x===true||x===false||x==="")?false:true;
const isEven=(x)=>{
    if(isNaN(x)||typeof x==='boolean'||x===""){
        return false;
    }
    else{
        return x%2===0;
    }
}

