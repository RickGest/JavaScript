const rawDates = ['10-02-2022', 'test', '11/12/2023', '31/31/1990', '99-00-9999','01/14/2023','16/06/2023', '10'];



function isValid(data) {
    let dateIsValid = false;
    let date = '';
    let month = '';

    if (data.charAt(2) === '-' && data.charAt(5) === '-') {
        date = data.substring(0,2);
        month = data.substring(3,5);
    };
    if (data.charAt(2) === '/' && data.charAt(5) === '/') {
        date = data.substring(3,5);
        month = data.substring(0,2);
    };

    switch (month) {
        default: 
            dateIsValid = false;
            break;
        case "01": case "03": case "05": case "07": case "08": case "10": case "12":
            if (Number(date) > 0 && Number(date) <= 31) {
                dateIsValid = true;
            }
            break;
        case "04": case "06": case "09": case "11":
            if (Number(date) > 0 && Number(date) <= 30) {
                dateIsValid = true;
            }
            break;
        case "02":
            if (Number(date) > 0 && Number(date) <= 28) {
                dateIsValid = true;
            }
            break;
    }
    return dateIsValid;
}

function checkArray(arr) {
    let newArr = [];
    
    newArr = arr.filter(date => {
        return isValid(date);
    })

    return newArr;
}

console.log(checkArray(rawDates));