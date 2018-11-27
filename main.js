alert ("Congratulations, you have successfully gotten an interview with Sparta Global, what name did you apply under?")
var name = prompt ("Enter name here")
alert ("Well you are all set for you interview now, " + name)
var prep = prompt ("Your interview is tomorrow, do you do any prep for the interview?")


if (prep === "yes") {
  alert ("Congratulations, you have passed the interview and been accepted onto the Engineering stream!") 
  
  
}
else if (Math.random() > 0.5){
  alert ("Luckily for you, you managed to scrape through your interview and have been accepted onto the Engineering stream! Maybe you should be a bit more proactive with this job")
}
else {
  alert ("you failed");
  document.location.reload();
}
