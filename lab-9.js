const cat = 'meow';

// Task 1
const isANumber = str => {
    if (+str)
        return `"${str}" is a number`;
    return `"${str}" is not a number`;
}

console.log(isANumber('10'));
console.log(isANumber(cat));

// Task 2
const isARealNumber = str => {
    if (+str)
        return `"${str}" is a number`;
    return `"${str}" is not a number`;
}

console.log(isARealNumber('10.1'));
console.log(isARealNumber('10.0'));
console.log(isARealNumber(cat));

// Task 3
const spaceRemover = str => {
    let newStr = '';
    for (const strElement of str.split(' ')) {
        if (strElement) newStr += strElement + ' ';
    }
    return newStr.slice(0, -1);
}

console.log(spaceRemover('A  lot   of  da    spaces !!!  '));

// Task 4
const checkEmail = str => {
    let strSplit = str.split('@');
    if (strSplit.length === 2 && strSplit[0] && strSplit[1]) {
        let domain = strSplit[1].split('.')
        if (domain.length === 2 && domain[0] && domain[1]) return `"${str}" is a valid email`;
    }
    return `"${str}" is a invalid email`;
}

console.log(checkEmail('b@g.c'));
console.log(checkEmail('bgc'));
console.log(checkEmail('b@'));
console.log(checkEmail('b@.c'));
console.log(checkEmail('b@c.'));

// Task 5
const date = new Date()
console.log(`Today is ${date.getDate()} ${date.getMonth() + 1} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)

// Task 6
const birthdayDate = new Date(2005, 2, 30, 18, 45)
console.log(`My birthday day index is ${birthdayDate.getDay()}`)

// Task 7
const birthdayIndexCalculator = (addYear, date) => {
    date.setYear(date.getFullYear() + addYear);
    return [date.getDate(), date.getDay()];
}

console.log(birthdayIndexCalculator(-10, birthdayDate));
console.log(birthdayIndexCalculator(-12, birthdayDate));
console.log(birthdayIndexCalculator(-25, birthdayDate));
console.log(birthdayIndexCalculator(-38, birthdayDate));

// Task 8
console.log(birthdayIndexCalculator(3, birthdayDate));

// Task 9 (assuming first time is earlier than second)
const countTimeDifference = ([hour1, minute1], [hour2, minute2]) => {
    let hourDifference, minuteDifference;
    hourDifference = hour2 - hour1;
    if (hourDifference < 0) hourDifference += 24;
    minuteDifference = minute2 - minute1;
    if (minuteDifference < 0) {
        hourDifference -= 1;
        minuteDifference += 60;
    }

    return [hourDifference, minuteDifference];
}

console.log(countTimeDifference([19, 0],[19, 47]))
console.log(countTimeDifference([11, 12],[19, 47]))
console.log(countTimeDifference([23, 0],[19, 47]))

// Task 11
const birthdayNumber = 30 + 3 + 2005;
console.log(birthdayNumber);
console.log(birthdayNumber.toString(2));
console.log(birthdayNumber.toString(16));


// Task 12
const hypotenuseFinder = (cathet1, cathet2) => {
    return parseFloat(Math.sqrt(Math.pow(cathet1, 2) + Math.pow(cathet2, 2))).toFixed(2);
}

console.log(hypotenuseFinder(3, 4));
console.log(hypotenuseFinder(3, 5));
console.log(hypotenuseFinder(10, 12));