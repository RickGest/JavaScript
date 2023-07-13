const card = "6165165165173513646451";

console.log(card);

function hideCard(card) {
    const res = card.slice(-4)
                    .padStart(card.length, '*');

    return res;
}


console.log(hideCard(card));