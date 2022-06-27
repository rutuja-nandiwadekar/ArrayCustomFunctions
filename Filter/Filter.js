Array.prototype.customFilter = function (fun) {
    const arr = [];
    for (let index = 0; index < this.length; index++) {
        if (fun(this[index]) == true) {
            arr.push(this[index]);
        }
    }
    return arr;
};

const array = [20, 30, 60, 90, 120, 190];
const result = array.customFilter(i => i < 50);
console.log(result);

