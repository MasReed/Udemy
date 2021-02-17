
// Get the date in DD/Mon/YYYY format
exports.getDate = function(){

    let options = {
        weekday: "long",
        day: "numeric",
        month: "short",
        year: "numeric"
    };

    return new Date().toLocaleDateString("en-AU", options);
}


// Day of the week
exports.getDay = function(){

    let options = {
        weekday: "long"
    };

    return new Date().toLocaleDateString("en-AU", options);
}
