// Get the date in DD/Mon/YYYY format
module.exports.getDate = getDate;

function getDate(){

    let options = {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric"
    };

    return new Date().toLocaleDateString("en-AU", options);
}


// Day of the week
module.exports.getDay = getDay;

function getDay(){

    let options = {
        weekday: "long"
    };

    return new Date().toLocaleDateString("en-AU", options);
}
