function crypto(password) {
    const stringPassword = String(password);
    let arr = stringPassword.split('');
    arr.reverse();
    let tmp = arr.pop();
    arr.unshift(tmp);
    tmp = arr.pop();
    arr.unshift(tmp);
    if (arr.length > 3) {
        arr = arr.concat(arr);
    }
    return arr.join('');
}

function check(crypted, password) {
    const stringPassword = String(crypted);
    let arr = stringPassword.split('');
    if (arr.length > 3) {
        const index = (arr.length)/2;
        arr.splice(index);
    }

    arr.push(arr.shift(arr[0]));
    arr.push(arr.shift(arr[0]));
    arr.reverse()

    if (arr.join('') === password) {
        return true;
    }
    return false;
}

const psw = 'PQ@#EA';
const crypted = crypto(psw);
console.log(crypted)
console.log(check(crypted, psw));
