function bmiCalculator (weight, height) {
    //Calculate bmi given weight and height and interpret health
    var bmi = Math.round(weight / (height * height));
    var interpretation = "";

    if (bmi > 24.9){
        interpretation = " are overweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = " have a normal weight.";
    } else {
        interpretation = " are underweight.";
    }

    return "Your BMI is " + bmi + ", so you" + interpretation;
}
