let studentMarks = prompt ("Enter your marks");

if (studentmarks>79 && studentmarks <=100) {
    alert("your grade is A");
}else if (studentmarks>=60 && studentmarks<=79) {
    alert("your grade is B");
}else if (studentmarks>=50 && studentmarks<=59) {
    alert("your grade is C");
}else if (studentmarks>=40 && studentmarks <=49) {
    alert("your grade is D");
}else if (studentmarks<40 && studentmarks>=0){
    alert("your grade is E");
}
else (studentMarks >100 || studentMarks <0);{
    alert (" Error! Invalid input!");
}