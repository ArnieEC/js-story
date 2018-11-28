alert ("Congratulations, you have successfully gotten an interview with Sparta Global, what name did you apply under?")
var name = prompt ("Enter name here")
alert ("Well you are all set for you interview now, " + name)
var prep = prompt ("Your interview is tomorrow. Do you do any prep for the interview?")


if (prep === "yes") {
  alert ("Congratulations " + name + ", you have passed the interview and been accepted onto the Engineering stream!") 
  var prework = prompt ("you have been given 44 hours worth of work to be completed before you start your course in a week, how many days do you decide to complete the work over?")

  if (prework > 7) {
    alert ("You do not have more than 7 days to do the work, please enter a valid number");
    prompt ("you have been given 44 hours worth of work to be completed before you start your course in a week, how many days do you decide to complete the work over?");
  }

  else if (prework >= 5 && prework <= 7) {
    alert ("Nice job! you have left more than enough time to complete all of your prework, you will begin your course without any issues");
    var firstDay = prompt ("Your first day has finally arrived! Your trainer is going through the work at a rapid pace, you wonder if that is because it is unimportant. Do you bother to concentrate on what your trainer is saying?");

    if (firstDay === "yes") {
      alert ("Good job! Concentrating in class showed you have real motivation to complete the course, which your trainer takes note of.");

      var firstHomework = prompt ("Your trainer has set your first homework, though easy in principle there is a lot of scope to delve deeper into the topic, do you put a lot of time effort into it?");

      if (firstHomework === "yes") {
        alert ("Going above and beyond is the sign of an exceptional student, you found the homework to be a valuble leanring experience and feel well prepared to face the rest of the week");
        
        if (firstDay === "yes" && firstHomework === "yes" && prep === "yes" && prework >= 5) {
          alert ("Well done! You have proven to be a model student throughout your first week. I am sure you will do wonderfully during your time at Sparta Global!")
        }

        else if (firstDay === "yes" || firstHomework === "yes" || prep === "yes" || prework <= 5) {
          alert ("You did well for your first week! There are areas you could have improved with a bit more hard work. With a bit more effort I am sure you will do excellently during your time at Sparta Global!")
        }

        else {
          alert ("Through pure luck and certainly no effort on your end, you have managed to make it through your first week... You might want to rethink your work ethic")
        }

      }

      else {
        alert ("For whatever reason you decide to not try too hard with your homework")
        if (firstDay === "yes" && firstHomework === "yes" && prep === "yes" && prework >= 5) {
          alert ("Well done! You have proven to be a model student throughout your first week. I am sure you will do wonderfully during your time at Sparta Global!")
        }

        else if (firstDay === "yes" || firstHomework === "yes" || prep === "yes" || prework <= 5) {
          alert ("You did well for your first week! There are areas you could have improved with a bit more hard work. With a bit more effort I am sure you will do excellently during your time at Sparta Global!")
        }

        else {
          alert ("Through pure luck and certainly no effort on your end, you have managed to make it through your first week... You might want to rethink your work ethic")
        }
      }

    }

    else {
      alert ("Unfortunately it was useful information to have")
      var firstHomework = prompt ("Your trainer has set your first homework, though easy in principle there is a lot of scope to delve deeper into the topic, do you put a lot of time effort into it?");

      if (firstHomework === "yes") {
        alert ("Going above and beyond is the sign of an exceptional student, you found the homework to be a valuble leanring experience and feel well prepared to face the rest of the week");
        
        if (firstDay === "yes" && firstHomework === "yes" && prep === "yes" && prework >= 5) {
          alert ("Well done! You have proven to be a model student throughout your first week. I am sure you will do wonderfully during your time at Sparta Global!")
        }

        else if (firstDay === "yes" || firstHomework === "yes" || prep === "yes" || prework <= 5) {
          alert ("You did well for your first week! There are areas you could have improved with a bit more hard work. With a bit more effort I am sure you will do excellently during your time at Sparta Global!")
        }

        else {
          alert ("Through pure luck and certainly no effort on your end, you have managed to make it through your first week... You might want to rethink your work ethic")
        }

      }

      else {
        alert ("For whatever reason you decide to not try too hard with your homework")
        if (firstDay === "yes" && firstHomework === "yes" && prep === "yes" && prework >= 5) {
          alert ("Well done! You have proven to be a model student throughout your first week. I am sure you will do wonderfully during your time at Sparta Global!")
        }

        else if (firstDay === "yes" || firstHomework === "yes" || prep === "yes" || prework <= 5) {
          alert ("You did well for your first week! There are areas you could have improved with a bit more hard work. With a bit more effort I am sure you will do excellently during your time at Sparta Global!")
        }

        else {
          alert ("Through pure luck and certainly no effort on your end, you have managed to make it through your first week... You might want to rethink your work ethic")
        }
      }
    }

  }
  else if (prework >= 3 && prework < 5) {
    if (Math.random() > 0.8) alert ("You did not leave enough time and ended up rushing through the prework, you  managed to skip through the parts you thought were not challenging and finished before the start of the course");
      
    else alert ("You thought you left enough time, unfortunately through distractions, bad luck or otherwise, you were unable to complete the prework. Please try out the application process again");
    document.location.reload();
  }

  else { 
    if (Math.random() > 0.9 ) {
      alert ("Despite leaving the prework to the last minute, against all odds you were able to finish it in time");
    }

    else {
      alert ("It was foolish to think you could finish 44 hours of work into less than 48 hours. Please apply again, and leave more time to do your work next time! Please try out the application process again");
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