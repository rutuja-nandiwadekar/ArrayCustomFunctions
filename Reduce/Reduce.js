/**
 * Custom reduce function 
 */
Array.prototype.customReduce = function (fun) {
    //Declaration of an accumulator
    var accumulator = 0;
    for (let index = 0; index < this.length; index++) {
        fun(accumulator = accumulator + this[index])
    }
    return accumulator;
}

const array = [7, 9, 34, 90, 3, 43];
//To find sum of all element in array 
const result = array.customReduce((acc, item) => acc + item);
console.log(result)
//output 186