function oscars(paramater) {

    let actorsName = paramater[0];
    let startingPoints = Number(paramater[1]);
    let judges = paramater[2];

    for (let i = 3; i < paramater.length; i++) {
        let judgeName = paramater[i]; // Johny Depp
        i++;
        let judgePoints = Number(paramater[i]); //45

        startingPoints += (judgeName.length * judgePoints) / 2;

        if (startingPoints >= 1250.5) {
            console.log(`Congratulations, ${actorsName} got a nominee for leading role with ${startingPoints.toFixed(1)}!`)
            break;
        }
    }
    if (startingPoints < 1250.5) {
        console.log(`Sorry, ${actorsName} you need ${(1250.5 - startingPoints).toFixed(1)} more!`)
    }
}
oscars(["Zahari Baharov", "205",
    4, "Johnny Depp", "45",
    "Will Smith", "29",
    "Jet Lee", "10",
    "Matthew Mcconaughey", "39"]);