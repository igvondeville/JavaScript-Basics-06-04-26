function foodDelivery(chickenMenu, fishMenu, veggieMenu) {

    let chickenM = chickenMenu;
    let fishM = fishMenu;
    let veggieM = veggieMenu;

    let chickenPrice = chickenM * 10.35;
    let fishPrice = fishM * 12.40;
    let veggiePrice = veggieM * 8.15;
    
    let totalPriceAll = chickenPrice + fishPrice + veggiePrice
    let dessertPrice = totalPriceAll * 0.20;

    let priceWithDelivery = totalPriceAll + dessertPrice + 2.50;
    console.log(priceWithDelivery)
}
foodDelivery (2, 4, 3)