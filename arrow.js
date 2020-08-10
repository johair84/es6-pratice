// function doubleIt(num) {
//     return num * 2;
// }

// const doubleIt = function myFun(num) {
//     return num * 2;
// }
//singel perameter
const doubleIt = num => num * 2;
//douvble perameter
const add = (x, y)=> x + y;
//empty perameter
const give5 = () => 5;

//bishal funtion
const doMath = (x,y)=>{
    const sum = x + y;
    const diff = x -y;
    const result = sum * diff;
    return result;
}

const result = give5();
console.log(result);

const result1= doMath(7,5);
console.log(result1);