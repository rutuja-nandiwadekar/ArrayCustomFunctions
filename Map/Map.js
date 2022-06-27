Array.prototype.customMap = function (fun) {
    const arr = [];
    for (let index = 0; index < this.length; index++) {
        arr.push(fun(this[index]));
    }
    return arr;
}

const array = [1, 2, 3, 4, 5];
const result = array.customMap(item => item * item);
console.log(result);




