function journey(budget, season) {
    let budgetNum = budget;
    let seasonType = season;
    let destination = 0;
    let place = 0;
    if (budgetNum <= 100) {
        destination = 'Bulgaria';
        switch (seasonType) {
            case 'summer':
                place = 'Camp';
                budgetNum *= 0.30;
                break;
            case 'winter':
                place = 'Hotel'
                budgetNum *= 0.70;
                break;
        }
    } else if (budgetNum <= 1000) {
        destination = 'Balkans';
        switch (seasonType) {
            case 'summer':
                place = 'Camp';
                budgetNum *= 0.40;
                break;
            case 'winter':
                place = 'Hotel'
                budgetNum *= 0.80;
                break;
        }
    } else if (budgetNum > 1000){
        destination = 'Europe'
        place = 'Hotel';
        budgetNum *= 0.90;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${budgetNum.toFixed(2)}`)
}

journey(678.53, "winter");