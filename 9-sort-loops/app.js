const arr = [1, 400 , -5, 10, 0];

function dumbSorting (arr) {
    for (i in arr) {
        for (j in arr) {
            if (arr[i] < arr[j]) {
                const tmp = arr[i]
                arr[i] = arr[j];
                arr [j] = tmp;
            }
        }
    }
    return arr;
}


console.log(dumbSorting(arr));