const arr = [1, 400 , -5, 10, 0];

function dumbSorting (arr) {
    const newArr = [...arr];
    for (let i = 1; i < newArr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (newArr[i] < newArr[j]) {
                [newArr[i],newArr[j]] = [newArr[j], newArr[i]];
            }
        }
    }

    return newArr;
}

console.log(dumbSorting(arr));