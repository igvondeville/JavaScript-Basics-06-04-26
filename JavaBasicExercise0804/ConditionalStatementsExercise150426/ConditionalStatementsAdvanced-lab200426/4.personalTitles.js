function titles(age, gender){
    let ageNum = age;
    let genderType = gender;

    if (genderType == 'm'){
        if (ageNum >= 16) {
            console.log('Mr.');
        } else {
            console.log('Master');
        }
    }
    if (genderType == 'f'){
        if (ageNum >= 16){
            console.log('Ms.');
        } else {
            console.log('Miss');
        }
    }
}
titles(13.5, 'm');