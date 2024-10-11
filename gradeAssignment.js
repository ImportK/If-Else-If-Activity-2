// Prompt the user to enter their score.
function askGrade() {
    let score = prompt("Enter your score:");
    if (score >= 90) {
        alert("Excellent!");
    } else if (score >= 80) {
        alert("Good!");
    } else if (score >= 70) {
        alert("Fair");
    } else if (score < 70) {
        alert("Needs Improvement");
    } else {
        alert("Invalid input. Please enter your score.")
    }
}