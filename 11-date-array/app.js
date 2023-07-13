const arr = ['10-02-2022', 'test', '11/12/2023', '31/31/1990', '99-00-99','01/14/44','16/06/2023', '10'];

function isValid(date) {
    let isValid;
    const regex = /^(\d{2}).(\d{2}).(\d{4})$/;
    const match = date.match(regex);
    if(!regex.test(date)) {
        return isValid =false;
    } else if (!checkDate(match[1]) || !checkMonth(match[2])) {
        return isValid =false;
    }
    return true;
}

const checkDate = date => (date < 0 || date > 31) ? false : true
const checkMonth = date => (date < 1 || date > 12) ? false : true

const res = arr.filter(data => isValid(data));

console.log(res);