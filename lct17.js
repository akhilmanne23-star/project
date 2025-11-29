//example 1 : what is higher order function, and how can it be used to process an array with call back function ?  
// provide an example where an array is processed to prodeuce another array with doubled and sqaured valaves?

//Higher order function

function processArray(arr,callback) {
 let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
        
    }
    return result;
    
}
// callback functions

function double(num) {
    return num *2;
    
}
function square(num) {
   return num *num; 
}

//suing the higher order function
let numbers =[1,2,3,4,5];
console.log(processArray(numbers, double));
console.log(processArray(numbers, square));

//higher order functions to be used to filter an array based on specfic contions?
// provide an example of filtering an array for even numbers and numbers greater than three.

//higher order
function filterArray(arr,callback) {
 let result = [];
    for (let i = 0; i < arr.length; i++) {
        if(callback(arr[i])){
         result.push(arr[i]);   
        } 
    }
    return result;
    
}


//callback functions
function isEven(num){
    return num % 2 ===0;
}
function isGreaterThanthree(num){
    return num >3;
}

let num= [1,2,3,4,5];
console.log(filterArray(num,isEven));
console.log(filterArray(num,isGreaterThanthree));

// how can you combine the map ad filrered methods i  javascript to process and filter an array?
// provide an example where an array is tripled and then filtered to iclude an odd number

//higher order combine map and filter
function processAnsFilterArray(arr,transfromCallback, filterCallback) {
    let transformed = arr.map(transfromCallback);
    return transformed.filter(filterCallback);
}


//call back
function tripled(num){
    return num * 3;
}

function isOdd(num){
    return num %2 !== 0;
}

let number = [1,2,3,4,5];
console.log(processAnsFilterArray(numbers, tripled, isOdd));
