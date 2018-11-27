alert ("Congratulations, you have successfully gotten an interview with Sparta Global, what name did you apply under?")
var name = prompt ("Enter name here")
alert ("Well you are all set for you interview now, " + name)
var prep = prompt ("Your interview is tomorrow, do you do any prep for the interview?")


if (prep === "yes") {
  alert ("Congratulations, you have passed the interview and been accepted onto the Engineering stream!") 
    var prework = prompt ("you have been given 44 hours worth of work to be completed before you start your course in a week, how many days do you decide to complete the work over?")

  if (prework > 7) {
    alert ("You do not have more than 7 days to do the work")
    prompt ("how many days should you use now?") ;
  }

  else if (7 >= prework >= 5) {
    alert ("Nice job! you have left more than enough time to complete all of your prework")
  }
  else if (5 > prework >= 3) {
    if (Math.random() > 0.8) alert ("You did not leave enough time and ended up rushing through the prework, you  managed to skip through the parts you thought were not challenging and finished before the start of the course")
    else alert ("You thought you left enough time, unfortunately through distractions ")
  }
}
else if (Math.random() > 0.5){
  alert ("Luckily for you, you managed to scrape through your interview and have been accepted onto the Engineering stream! However, maybe you should be a bit more proactive with this job")
}
else {
  alert ("you failed");
  document.location.reload();
}



// while loop removed from code ~line 10, it broke everything else, was stuck in an infinite loop, or both
// while (prework > 7) {
//   alert ("You do not have more than 7 days to do the work")
//   var newPrework = prompt ("you have been given 44 hours worth of work to be completed before you start your course in a week, how many days do you decide to complete the work over?") ;
//   if (7 >= newPrework > 5) alert ("Nice job! you have left more than enough time to complete all of your prework") ;
//   if (newPrework <= 7) break ;
// }