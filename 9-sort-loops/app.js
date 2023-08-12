const arr = [1, 400 , -5, 10, 0];

function dumbSorting (arr) {
    const newArr = [...arr];
    for (let i = 0; i < newArr.length - 1; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            if (newArr[i] < newArr[j]) {
                [newArr[i],newArr[j]] = [newArr[j], newArr[i]];
            }
        }
    }

    return newArr;
}

console.log(dumbSorting(arr));