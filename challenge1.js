//Prompt the user to enter student marks and store the value in the marks variable
let marks=Number(prompt());

// Afunction to calculate student's grade according to the input entered
function calculateGrade(marks) {
    if (marks > 79 && marks<=100) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else if (marks >= 0 && marks <= 39) {
        return 'E';
    }
     else {
        return 'Invalid Marks';
    }
}

//create a variable that will store the value of the grade after calculateGradefunction executes
const grade= calculateGrade(marks);

// Finally alert the user on the grade of the student
alert(`Grade: ${grade}`);
