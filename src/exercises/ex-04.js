const bodyHeight = Number(process.argv[2]);
const bodyWeight = Number(process.argv[3]);

const bmi = bodyWeight / ((bodyHeight / 100) * (bodyHeight / 100));

console.log(`Dein BMI ist: ${bmi.toFixed(2)}`);
