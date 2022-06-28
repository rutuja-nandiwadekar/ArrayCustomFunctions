/**
 * Custom forEach function 
 */
function customForEach(arr, fun) {
    for (var index = 0; index < arr.length; index++) {
        fun(arr[index], index, arr)
    }
}

/**
 * To printout each array element along with its index 
 */
const arr = [2, 3, 5, 7, 11, 13, 17, 19];
customForEach(arr, (element, index) => {
    console.log(`${index + 1}: ${element} `);
});

//output
//1: 2 
//2: 3 
//3: 5
//4: 7
//5: 11
//6: 13
//7: 17
//8: 19
