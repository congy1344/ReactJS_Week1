const dolphinsScores1 = [96, 108, 89];
const koalasScores1 = [88, 91, 110];

const dolphinsScoresBonus1 = [97, 112, 101];
const koalasScoresBonus1 = [109, 95, 123];

const dolphinsScoresBonus2 = [97, 112, 101];
const koalasScoresBonus2 = [109, 95, 106];

const calculateAverage = scores => scores.reduce((a, b) => a + b, 0) / scores.length;

const determineWinner = (dolphinsAvg, koalasAvg) => {
    if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
        console.log('Dolphins win the trophy!');
    } else if (koalasAvg > dolphinsAvg && koalasAvg >= 100) {
        console.log('Koalas win the trophy!');
    } else if (dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
        console.log('It\'s a draw!');
    } else {
        console.log('No team wins the trophy.');
    }
};

const dolphinsAvg1 = calculateAverage(dolphinsScores1);
const koalasAvg1 = calculateAverage(koalasScores1);

const dolphinsAvgBonus1 = calculateAverage(dolphinsScoresBonus1);
const koalasAvgBonus1 = calculateAverage(koalasScoresBonus1);

const dolphinsAvgBonus2 = calculateAverage(dolphinsScoresBonus2);
const koalasAvgBonus2 = calculateAverage(koalasScoresBonus2);

console.log('Test Data 1:');
determineWinner(dolphinsAvg1, koalasAvg1);

console.log('Test Data Bonus 1:');
determineWinner(dolphinsAvgBonus1, koalasAvgBonus1);

console.log('Test Data Bonus 2:');
determineWinner(dolphinsAvgBonus2, koalasAvgBonus2);