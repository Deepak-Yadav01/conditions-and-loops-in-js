// providing grades to the students
// using nested if-else
StudentScore=86
if (StudentScore>90) {
    console.log("Students gets Grade A");
} else if (StudentScore>=70 && StudentScore<=90) {
    console.log("Students gets Grade B");
} else if (StudentScore>=50 && StudentScore<=70) {
    console.log("Students gets Grade c");
} else {
    console.log("Students gets Grade F");
} 
    

// using switch case statement
studentscore=46
switch (true) {
    case studentscore>90:
        console.log("get Grade A");
        break;
    case studentscore>=70 && studentscore<=90:
        console.log("get Grade B");
        break;
    case  studentscore>=50 && studentscore<=70:
        console.log("get Grade c");
        break;
    default:
        console.log("get Grade F");
        break;
}