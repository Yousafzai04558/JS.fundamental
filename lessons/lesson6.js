// conditional statement

if(condtion){
    // code to be executed if condition is true
}
else{
    // code to be executed if condition is false
}

// if hour between 6 and 12 print "Good morning"
// if hour between 12 and 18 print "Good afternoon"
//otherwise: Good evening

var hour = 5;
if (hour >= 6 && hour < 12) {
    console.log("Good morning");
}
else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon");
}
else {
    console.log("Good evening");
}