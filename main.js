alert ("Congratulations, you have successfully gotten an interview with Sparta Global, what name did you apply under?")
var name = prompt ("Enter name here")
alert ("Well you are all set for you interview now, " + name)
var prep = prompt ("Your interview is tomorrow, do you do any prep for the interview?")


if (prep === "yes") {
  alert ("Congratulations, you have passed the interview and been accepted onto the Engineering stream!") 
    var prework = prompt ("you have been given 44 hours worth of work to be completed before you start your course in a week, how many days do you decide to complete the work over?")

  if (prework > 7) {
    alert ("You do not have more than 7 days to do the work");
  }
  else if (prework >= 5 && prework <7) {
    alert ("Nice job! you have left more than enough time to complete all of your prework");
  }
  else if (prework >= 3 && prework < 5) {
    if (Math.random() > 0.8) alert ("You did not leave enough time and ended up rushing through the prework, you  managed to skip through the parts you thought were not challenging and finished before the start of the course");
    else alert ("You thought you left enough time, unfortunately through distractions ");
  }
  else { 
    if (Math.random() > 0.9 ) {
      alert ("Despite leaving the prework to the last minute, against all odds you were able to finish it in time");
    }
    else {
      alert ("It was foolish to think you could finish 44 hours of work into less than 48 hours. Please apply again, and leave more time to do your work next time!");
      document.location.reload();
    }
  }
}
else if (Math.random() > 0.4){
  alert ("Luckily for you, you managed to scrape through your interview and have been accepted onto the Engineering stream! However, maybe you should be a bit more proactive with this job")
}
else {
  alert ("Without correct preparation for the interview you were rejected. Please apply again!");
  document.location.reload();
}


// while loop removed from code ~line 10, it broke everything else, was stuck in an infinite loop, or both
// while (prework > 7) {
//   alert ("You do not have more than 7 days to do the work")
//   var newPrework = prompt ("you have been given 44 hours worth of work to be completed before you start your course in a week, how many days do you decide to complete the work over?") ;
//   if (7 >= newPrework > 5) alert ("Nice job! you have left more than enough time to complete all of your prework") ;
//   if (newPrework <= 7) break ;
// }

// switch for prework, didn't work either

// switch (prework) {
//   case "7":
//   alert("you left plenty of time")
//   break; 
//   case "6":
//   alert("you  plenty of time")
//   break;
//   case "5":
//   alert("you left  of time")
//   break;
//   case "4":
//   alert("you left plenty  time")
//   break;
//   case "3":
//   alert("you left plenty of time")
//   break;
//   case "2":
//   alert(" left plenty of time")
//   break;
//   default: 
//   alert ("you didn't leave plenty of time")
//   break;
// }