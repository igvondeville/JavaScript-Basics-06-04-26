function examArrival(examHour, examMinute, arrivalHour, arrivalMinute) {

    let examTime = examHour * 60 + examMinute;
    let arrivalTime = arrivalHour * 60 + arrivalMinute;
    let difference = examTime - arrivalTime;

    if (difference < 0) {
        console.log("Late");

        let lateMinutes = Math.abs(difference);

        if (lateMinutes < 60) {
            console.log(`${lateMinutes} minutes after the start`);
        } else {

            let hours = Math.floor(lateMinutes / 60);
            let minutes = lateMinutes % 60;

            console.log(`${hours}:${minutes < 10 ? '0' : ''}${minutes} hours after the start`);
        }

    } else if (difference <= 30) {
        console.log("On time");

        if (difference > 0) {
            console.log(`${difference} minutes before the start`);
        }

    } else {
        console.log("Early");

        if (difference < 60) {
            console.log(`${difference} minutes before the start`);
        } else {

            
            let hours = Math.floor(difference / 60);
            let minutes = difference % 60;

            console.log(`${hours}:${minutes < 10 ? '0' : ''}${minutes} hours before the start`);
        }
    }
}
examArrival(9, 30, 7, 25);