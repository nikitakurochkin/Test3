// let num = 20;

// function showFirstMessage(text) {
//     alert(text);
//     let num = 10;
//     console.log(num);
// }
// showFirstMessage("Hello World");
// console.log(num);

// let calc = function calc(a,b) {
//     return (a+b);
// }

let calc = (a,b) => (a + b)

console.log(calc(3,4));

console.log(calc(8,4));
 

function retVar() {
    let num = 50;
    return num;

}

let anotherNum = retVar();
console.log(anotherNum);
