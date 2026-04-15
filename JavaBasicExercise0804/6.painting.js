function repainting(nylon, paint, thinner, hours) {
    
    let nylonQuantity = nylon;
    let paintQuantity = paint;
    let thinnerQuantity = thinner;
    let hoursToPay = hours; 
    

    let sumPerNylon = (nylonQuantity + 2) * 1.50;
    let sumPerPaint = paintQuantity * 14.50 * 1.1;
    let sumThinner = thinnerQuantity * 5;

    let totalProductsSum = sumPerNylon + sumPerPaint + sumThinner + 0.40;
    let pricePerHour = (totalProductsSum * 0.30) * hoursToPay ;
    let finalSum = totalProductsSum + pricePerHour; 
    console.log(finalSum);
}
repainting(10, 11, 4, 8)