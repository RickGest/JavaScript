const query = {
    search: 'Bob',
    take: 10,
    offset: 123,
    limit: 500
}

// option 1
function useForIn(obj) {
    let result = '';
    for (const key in query) {
        result += key + '=' + query[key] + '&';
    }
    return result.substring(0, result.length-1)
}

// option 2
function useMap(obj) {
    return Object.keys(obj).map(key => key + '=' + obj[key]).join('&');
}

console.log(useForIn(query));
console.log(useMap(query));