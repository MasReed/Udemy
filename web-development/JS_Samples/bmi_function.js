function bmiCalculator(weight, height) {
    //Calculate bmi based on a users weight and height.
    return Math.round(weight / (height**2.));
}


var bmi = bmiCalculator(65, 1.8); //answer of 20
console.log(bmi)
