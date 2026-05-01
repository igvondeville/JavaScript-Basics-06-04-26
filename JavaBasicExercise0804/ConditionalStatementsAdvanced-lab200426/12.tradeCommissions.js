function tradeCom(town, quantity) {

    if (quantity < 0) {
        console.log('error');
        return;
    }

    let result = 0;
    let isValid = true;

    switch (town) {
        case 'Sofia':
            if (quantity <= 500) result = quantity * 0.05;
            else if (quantity <= 1000) result = quantity * 0.07;
            else if (quantity <= 10000) result = quantity * 0.08;
            else result = quantity * 0.12;
            break;

        case 'Varna':
            if (quantity <= 500) result = quantity * 0.045;
            else if (quantity <= 1000) result = quantity * 0.075;
            else if (quantity <= 10000) result = quantity * 0.10;
            else result = quantity * 0.13;
            break;

        case 'Plovdiv':
            if (quantity <= 500) result = quantity * 0.055;
            else if (quantity <= 1000) result = quantity * 0.08; // ⚠️ важно!
            else if (quantity <= 10000) result = quantity * 0.12;
            else result = quantity * 0.145;
            break;

        default:
            isValid = false;
    }

    if (!isValid) {
        console.log('error');
    } else {
        console.log(result.toFixed(2));
    }
}
tradeCom('Plovdiv', 499.99);