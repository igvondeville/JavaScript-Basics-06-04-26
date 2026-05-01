function squereMeters(meters){
    let oneMeter = 7.61;
    let discount = 0.18;

let priceForAll = meters * oneMeter;
let discountAmount = priceForAll * discount;
//let priceWithDiscount = priceForAll- discountAmount;

function minusPercent(n,p) {
  return n - (n * (p/100));
}

    console.log(`The final price is: ${priceWithDiscount} lv.`);
    console.log(`The discount is: ${discountAmount} lv.`);
}
squereMeters(550);