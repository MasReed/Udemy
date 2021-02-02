// Prompts the user to input their name
var userName = prompt("Please, enter your name.").toLowerCase();

// Alerts the user saying "Hello Name"
alert("Hello " + userName.slice(0, 1).toUpperCase() + userName.slice(1, userName.length) + ".");
