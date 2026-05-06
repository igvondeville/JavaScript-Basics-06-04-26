function hotelRoom(month, nights) {
    let monthFromYear = month;
    let nightsCount = nights;
    let studio = 0;
    let apartment = 0;

    switch (monthFromYear) {
        case 'May':
        case 'October':
            studio = nightsCount * 50;
            apartment = nightsCount * 65;
            {
                if (nightsCount > 14) {
                    studio *= 0.70;
                    apartment *= 0.90;
                } else if (nightsCount > 7) {
                    studio *= 0.95;
                }
                break;
            }
        case 'June':
        case 'September':
            studio = nightsCount * 75.20;
            apartment = nightsCount * 68.70;

            if (nightsCount > 14) {
                studio *= 0.80;
                apartment *= 0.90;
            }
            break;
        case 'July':
        case 'August':
            studio = nightsCount * 76;
            apartment = nightsCount * 77;
            if (nightsCount > 14) {
                apartment *= 0.90;
            }
    }

    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);
}
hotelRoom("May", 15);