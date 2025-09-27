'use strict'
// Write a JavaScript program that computes the average marks of the 
// following students. Then, this average is used to determine the corresponding grade.

const students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

function calcGrades(grades){
    let average = 0;
    let grade;
    for(const [_, grade] of grades.values()){
        console.log(grade);
        average += grade / grades.length;
    }

    if(average < 60){
        grade = 'F';
    } else if(average > 60 && average < 70){
        grade = 'D';
    } else if(average > 70 && average < 80) {
        grade = 'C';
    } else if (average > 80 && average < 90){
        grade = 'B';
    } else if(average > 90 && average <= 100){
        grade = 'A'
    }
    return console.log(`Average is: ${average} and grade is: ${grade}`);
}
calcGrades(students);