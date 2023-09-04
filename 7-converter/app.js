function convertToUSD(cur, amount) {
    let usd;
    switch (cur) {
        case 'USD':
            usd = amount;
            break;
        case 'RUB':
            usd = amount * 0.013;
            break;
        case 'EUR':
            usd = amount * 1.09;
            break;
        case 'GBP':
            usd = amount * 1.234;
            break;
        case 'JPY':
            usd = 0.075;
    }
    return usd;
}

function convertToCur(cur, amount) {
    let exchanged;
    switch (cur) {
        case 'USD':
            exchanged = amount;
            break;
        case 'RUB':
            exchanged = amount * 78;
            break;
        case 'EUR':
            exchanged = amount * 0.92;
            break;
        case 'GBP':
            exchanged = amount * 0.81;
            break;
        case 'JPY':
            exchanged = amount * 132.78;
    }
    return exchanged;
}

const exchanger = function (curFrom, curTo, amount) {
    return convertToCur(curTo, convertToUSD(curFrom, amount))
}

console.log(exchanger('RUB','JPY', 75000));