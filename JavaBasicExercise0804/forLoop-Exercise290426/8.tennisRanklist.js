function tennisRanklist(input) {

    let tourCount = Number(input[0]);
    let startPoints = Number(input[1]);

    let tourWins = 0;
    let pointsWon = 0;

    for (let i = 2; i <= input.length; i++) {
        let currentStage = input[i];

        switch (currentStage) {
            case "W":
                tourWins++
                pointsWon += 2000;
                break;
            case "F": pointsWon += 1200; break;
            case "SF": pointsWon += 720; break;
        }

    }
console.log(`Final points: ${pointsWon+startPoints}`);
console.log(`Average points: ${Math.floor(pointsWon/tourCount)}`);
console.log(`${(tourWins/tourCount*100).toFixed(2)}%`)
}
tennisRanklist(["4", "750", "SF", "W", "SF", "W"]);