const myname = process.argv[2];
const age = Number(process.argv[3]);
console.log(
	`Hallo ${myname}, dein Alter ist ${age} und du wirst die Matur mit ${age + 4} Jahren bestehen.`,
);
