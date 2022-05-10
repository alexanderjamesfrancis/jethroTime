
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
  "Jethro is playing DnD as 'The' Bard. "
];


function current_time(){
  var d = new Date();
  var time = d.toLocaleTimeString();
  return time;

};


var now_time = document.getElementsByClassName("gmt_time")[0].innerHTML = current_time();

function its_Jethro_Time(){
  var hour = docu
}

function randomNumber() {
  number  = Math.floor(Math.random() * 59)
  return number
};

function random_fact(){
  number  = Math.floor(Math.random() * (jethroFacts.length))
  return number
}

var timeControl = document.querySelector('input[type="time"]');
timeControl.value = '00:00';

function thetimeinjethrotime(){
  var eta = document.getElementById('eta').value;
  var random_addition = randomNumber()
  var hour = parseInt(eta.slice(0,2))
  var min = parseInt(eta.slice(3,5)) + random_addition
  if (hour === 0){
    hour = "00"
  }
  else if (hour >= 1 && hour < 10){
      var n_hour = hour
      min = "0" + n_min
    }
  if (min >= 60) {
    min = min % 60
    var new_hour = hour
    hour = new_hour + 1
  }
  else if (min === 0){
      min = "00"
    }
  else if (min >= 1 && min < 10){
      var n_min = min
      min = "0" + n_min
    }


  var new_time = hour + ":" + min
  alert(jethroFacts[random_fact()] + "His expected arrival is " + new_time)
  /// Use modulo to get the mins left and then up it by an hour///
  ///alert(min)///


}

$('#jethroCarousel').carousel()
