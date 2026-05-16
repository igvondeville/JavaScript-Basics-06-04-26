function trekkingMania(input) {

    let groups = Number(input[0]);
    let allMembers = 0;

    let musalaGroup = 0;
    let monblancGroup = 0;
    let kilimanjaroGroup = 0;
    let k2Group = 0;
    let everestGroup = 0;


    for (let currentGroup = 1; currentGroup <= groups; currentGroup++) {
        let groupCount = Number(input[currentGroup]);
        allMembers += groupCount;

        if (groupCount <= 5) {
            musalaGroup += groupCount;
        } else if (groupCount <= 12) {
            monblancGroup += groupCount;
        } else if (groupCount <= 25) {
            kilimanjaroGroup += groupCount;
        } else if (groupCount <= 40) {
            k2Group += groupCount;
        } else {
            everestGroup += groupCount;
        }
    }

    console.log(`${(musalaGroup/allMembers*100).toFixed(2)}%`);
    console.log(`${(monblancGroup/allMembers*100).toFixed(2)}%`);
    console.log(`${(kilimanjaroGroup/allMembers*100).toFixed(2)}%`);
    console.log(`${(k2Group/allMembers*100).toFixed(2)}%`);
    console.log(`${(everestGroup/allMembers*100).toFixed(2)}%`);
}
trekkingMania(["5", "25", "41", "31", "250", "6"]);