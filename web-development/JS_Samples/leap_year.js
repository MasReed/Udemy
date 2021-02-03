//leap year is every year evenly divisible by 4
//except every year that is evenly divisibly by 100
//unless the year is also evenly divisible by 400

function isLeap(year) {
    var leap = false;

    if (year % 4 === 0) {
        leap = true;
        if (year % 100 === 0) {
            leap = false;
            if (year % 400 === 0) {
                leap = true;
            }
        }
    }


    if (leap === false) {
        return "Not leap year.";
    } else {
        return "Leap year.";
    }

}
