const bodyHeight = Number(process.argv[2]); // cm

// Formel (Maenner)
const talentScore = 243 - bodyHeight;

if (talentScore < 50) {
	console.log("Du hast sehr viel Potenzial");
} else if (talentScore < 60) {
	console.log("Du musst dringend an deiner Sprungkraft arbeiten.");
} else if (talentScore < 70) {
	console.log(
		"Wenn du schnell bist, kannst du dir die Libero-Position ueberlegen",
	);
} else {
	console.log("Du wirst im Volleyball nicht glücklich werden.");
}
