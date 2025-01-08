let markWeight = 78; 
let markHeight = 1.69; 
let johnWeight = 92; 
let johnHeight = 1.95; 

let markBMI = markWeight / (markHeight * markHeight);
let johnBMI = johnWeight / (johnHeight * johnHeight);

let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI);
console.log("Is Mark's BMI higher than John's?");
console.log(markHigherBMI); 