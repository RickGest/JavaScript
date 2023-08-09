const array = [0, 123, 23, 23, 45, 4, 6, 1, 3, 9, 10];

////////////////////////////////////////////////////////////////////////////

// option 1

// function clearArr (num) {
//     return function (arr) {
//         for (index in arr) {
//             if (arr[index] < num) {
//                 arr.splice(index, 1);
//             }
//         }
//         return arr;
//     }
// }

// let more5 = clearArr(5);
// console.log(more5(array));

////////////////////////////////////////////////////////////////////////////

// option 2

// const clearArr = num => arr => {
//     for (index in arr) {
//         if (arr[index] < num) {
//             arr.splice(index, 1);
//         }
//     }
//     return arr;
// }

// let more5 = clearArr(5);
// console.log(more5(array));

////////////////////////////////////////////////////////////////////////////

// option 3

const more = function (el, num) {
    return el > num;
}

const less = (el, num) => el < num;

function clearArr(arr, num, fn) {
    for (el of arr) {
        if (!fn(el, num)) {
            arr.splice(arr.indexOf(el), 1);
        }
    }
    return arr;
}

console.log(clearArr(array, 10, less))

////////////////////////////////////////////////////////////////////////////