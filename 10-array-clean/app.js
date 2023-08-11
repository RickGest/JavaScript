const array = [0, 123, 23, 23, 45, 4, 6, 1, 3, 9, 10];

const moreThan = function (el, num) {
    return el > num;
}

const lessThan = (el, num) => el < num;

function clearArr(arr, fn, num) {
    const filtredArr = [];

    for (el of arr) {
        if (!fn(el, num)) {
            filtredArr.push(el);
        }
    }
    return filtredArr;
}

console.log(array);
console.log(clearArr(array, lessThan, 10));