function skiTrip(days, type, rate) {
    let daysCount = days;
    let roomType = type;
    let rateType = rate;

    let night = daysCount - 1;
    let totalSum = 0;

    switch (roomType) {
        case 'room for one person':
            totalSum = night * 18;
            break;
        case 'apartment':
            totalSum = night * 25;
            if (night < 10) {
                totalSum *= 0.70;
            } else if (night <= 15) {
                totalSum *= 0.65;
            } else {
                totalSum *= 0.50;
            }
            break;
        case 'president apartment':
            totalSum = night * 35;
            if (night < 10) {
                totalSum *= 0.90;
            } else if (night <= 15) {
                totalSum *= 0.85;
            } else {
                totalSum *= 0.80;
            }
            break;
    }
    if (rateType === 'positive'){
totalSum *= 1.25;
    } else {
        totalSum *= 0.90;
    }
    console.log(totalSum.toFixed(2));
}
skiTrip(14, "apartment", "positive");