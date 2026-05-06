function summerOutfit(degree, time) {
    let degreeNum = degree;
    let timeFromDay = time;
    let outfit;
    let shoes;

    if (degreeNum >= 10 && degreeNum <= 18) {
        if (timeFromDay === 'Morning') {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (timeFromDay === "Afternoon" || "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    if (degreeNum > 19 && degreeNum <= 24) {
        if (timeFromDay === "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (timeFromDay === "Morning" || "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";

        }
        }
                if (degreeNum >= 25) {
            if (timeFromDay === "Morning") {
                outfit = "T-Shirt";
                shoes = "Sandals";
            } else if (timeFromDay === "Afternoon") {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            } else if (timeFromDay === "Evening") {
                outfit = "Shirt";
                shoes = "Moccasins";
            }
    }
    console.log(`It's ${degreeNum} degrees, get your ${outfit} and ${shoes}.`);
}
summerOutfit(28, "Evening");