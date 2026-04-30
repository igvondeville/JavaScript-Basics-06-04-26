function smallShop (product, town, quantity){
    let productType = product;
    let bgTown = town;
    let quantityOfProduct = quantity;
    let price = 0;

     if (bgTown == 'Sofia'){
        if (productType == 'coffee'){
            price = quantityOfProduct * 0.50;
        } else if(productType == 'water'){
            price = quantityOfProduct * 0.80;
        } else if(productType == 'beer'){
            price = quantityOfProduct * 1.20;
     } else if (productType == 'sweets') {
        price = quantityOfProduct * 1.45;
     } else if (productType == 'peanuts'){
        price = quantityOfProduct * 1.60;
     } 
    }
      if (bgTown == 'Plovdiv'){
        if (productType == 'coffee'){
            price = quantityOfProduct * 0.40;
        } else if(productType == 'water'){
            price = quantityOfProduct * 0.70;
        } else if(productType == 'beer'){
            price = quantityOfProduct * 1.15;
     } else if (productType == 'sweets') {
        price = quantityOfProduct * 1.30;
     } else if (productType == 'peanuts'){
        price = quantityOfProduct * 1.50;
     }
    }
          if (bgTown == 'Varna'){
        if (productType == 'coffee'){
            price = quantityOfProduct * 0.45;
        } else if(productType == 'water'){
            price = quantityOfProduct * 0.70;
        } else if(productType == 'beer'){
            price = quantityOfProduct * 1.10;
     } else if (productType == 'sweets') {
        price = quantityOfProduct * 1.35;
     } else if (productType == 'peanuts'){
        price = quantityOfProduct * 1.55;
     }
    }
     console.log(price); 
  }

smallShop('water', 'Plovdiv', 2);