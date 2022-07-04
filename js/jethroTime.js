"use strict";

const response_window = document.getElementById("response-box");
const jethroAnswer = document.getElementById("text-response");
const jethroTimeBtn = document.getElementById("jethro-time-btn");
const exitWindow = document.getElementById("exit");

var jethroFacts = [
  "Jethro has found a dead bird on the way and must take a photograph. ",
  "Jethro will meet someone he knows on the way. ",
  "Jethro has become distracted by the concept of 'Math-Prog'. ",
  "Jethro has discovered a new type of drink and is now required to mix it with other exotic drinks. ",
  "Jethro has discovered a new set of EQ setting when mixing new tracks. ",
  "Jethro is tackling the cosmic battle of wits in a game of Magic: The Gathering. ",
  "Jethro is creating a new time-signature - now with fractions...and decimal fractions. ",
  "Jethro has been lured away by a Jigglypuff playing Metal. ",
  "Jethro decided that his timezone is now Mongolia. ",
  "Jethro wants to listen to an album he hasn't heard for a while but does not have an EQ on hand for it to sound correct. He must go on his pc to create one. ",
  "Jethro has forgotten his passport. ",
  "Jethro has been challenged to a game of street MTG. If he loses, his soul shall be forfeit. ",
  "Jethro had almost arrived but got distracted by a mermaid and now his heart belongs to the sea. ",
  "Jethro has been faffing. ",
  "Jethro is currently headbanging to Mastodon. ",
  "Jethro is delayed because he cannot find his glasses. They are in the bathroom but he does not know. ",
  "There's been an emergency at Games Workshop and all the figurines have come to life, Jethro has been called in as an emergency negotiatior. ",
  "Jethro has transcended time and space. He is now pure Prog. ",
  "Jethro has found a cat. It is a good cat. ",
  "Jethro's bass kick pedals do not have the same spring tension as each other and require adjustment. ",
  "Jethro is informing someone of Old Spice and the risks thereof. ",
  "Jethro has been called upon to embark on a mighty quest to defeat the evil king and in so doing, prevent the end of the world and existence as we know it. ",
  "Jethro encountered a street performer playing in 4/4. They are presently battling to the death. ",
  "Jethro has fallen over. ",
  "Jethro is locked in a spoken word Rap battle. ",
  "Jethro is studying his snoring for the code to life. ",
  "Jethro is speed-running the climbing depot. ",
  "Jethro has been kidnapped by bardic goblins. ",
  "Jethro is moderating his 'Internal Jazz'. ",
  "Jethro is behind you, but 2 miles away. ",
  "Jethro is haggling with the Potion Seller for his most potent brews. ",
  "Jethro is debating the majesty of cinematorgraphy that is, Troll 2. ",
  "Jethro is trying to hack this website. ",
  "Jethro is riding a capybara called Balthasar into battle. ",
  "Jethro is playing DnD as 'The' Bard. ",
];

function current_time() {
  var d = new Date();
  var time = d.toLocaleTimeString();
  return time;
}

var now_time = (document.getElementsByClassName("gmt_time")[0].innerHTML =
  current_time());

function its_Jethro_Time() {
  var hour = docu;
}

function randomNumber() {
  let number = Math.floor(Math.random() * 240) + 1;
  return number;
}

function random_fact() {
  let number = Math.floor(Math.random() * jethroFacts.length);
  return number;
}

var timeControl = document.querySelector('input[type="time"]');
timeControl.value = "00:00";

function thetimeinjethrotime() {
  //To do:
  //Work on getting the timer to account for up to 4h and display the correct time in hours and mins.
  // How to:
  //1.Make timerr produce random number from 1-240 (covers 4 hours in mins) - done
  //2. Break this number in mins and hours
  //3. Rebuild to produce iterable time in jethro time.
  // Breaks the time down into it parts and rebuilds at the end to form a new eta for Jethro
  const eta = document.getElementById("eta").value;
  let random_addition = randomNumber();
  let min = parseInt(eta.slice(3, 5)) + random_addition;
  let hour = parseInt(eta.slice(0, 2));
  let new_min;
  let new_hour
  console.log(random_addition);
  if (min >= 60) {
    new_min = min % 60;
    if (new_min >= 1 && new_min < 10){
      new_min = "0" + new_min;
    } else if(min === 0){
      new_min = "00";
    }
    let add_hour = Math.trunc((min / 60));
    new_hour = hour += add_hour;
  } else if (min === 0){
    new_min = "00";
  } else if (min >= 1 && min < 10){
    new_min = "0" + min;
  } else {
    new_min = min
  }

  if (hour === 0) {
    new_hour = "00";
  } else if (hour >= 1 && hour < 10) {
    let n_hour = new_hour;
    new_hour = "0" + n_hour;
  } else if (hour >= 24){
    new_hour = hour % 24
    if (new_hour === 0){
      new_hour = "00";
    } 
  }

  let new_time = new_hour + ":" + new_min;
  jethroAnswer.textContent =
    jethroFacts[random_fact()] + "His expected arrival is " + new_time;
  response_window.classList.remove("hidden");

  // Bug note - 24h overflow does not work properly. report 'undefined' for the hour
}

exitWindow.addEventListener("click", function () {
  response_window.classList.add("hidden");
});

jethroTimeBtn.addEventListener("click", thetimeinjethrotime);
