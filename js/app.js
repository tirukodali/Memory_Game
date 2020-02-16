/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
"use strict"

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
var mycards = [...document.querySelectorAll(".card")];
console.log(mycards);
var i = 0;
var mov = 0;
var counter = []; //comparision array
let min = 0;
let sec = 0;
var interval;
var timeset=0;
//these are the variables in timer
let count = 0;
var rating = document.querySelector(".stars");
var mod = document.querySelector(".modelbox");
var cl = document.querySelector(".close");
var deck = document.querySelector(".deck");
var scard = shuffle(mycards);
console.log(scard);
//method to shuffle the cards
scard.forEach.call(mycards, (list) => {
  deck.appendChild(list);
});
startGame();
//starting of the game
function startGame() {
  while (i < mycards.length) {

    (function(index) {
      mycards[index].addEventListener("click", function() { //adding event listener


        mycards[index].classList.add('open', 'show', 'disable'); //adding the classes to each card

        console.log("clicked");

        counter.push(mycards[index]);
        //pushing the cARDS to the array for the compRISION

        setTimeout(matchcard, 200);
        if(timeset===0){
        timer();
        timeset++;
      }

      })


    })(i);
    i += 1;

  }

}

function matchcard() { //function for the checking the equality of two cards
  if (counter.length == 2) {
    nmoves();
    if (counter[0].children[0].className == counter[1].children[0].className) {
      // counter[0].className = ("card match");
      // counter[1].className = ("card match");
      counter[0].classList.add("match", "disable");
      counter[1].classList.add("match", "disable")
      console.log("matched");
      counter = [];
      count += 1;
      console.log(count);
      if (count == 8) {
        clearInterval(interval); //condition for the successfully completion of the game and stoping the timer
        congrats();
      }

    } else {
      counter[0].className = ("card");
      counter[1].className = ("card"); //when the cards are not same
      counter = [];
    }
  } else {
    var className = "card";
  }
}

function nmoves() {
  mov = mov + 1; //counting the number of moves

  document.querySelector(".moves").innerHTML = mov;

  if (mov == 10) { //star rating according to the number of moves

    document.querySelector(".stars").children[2].innerHTML = '<li><i class="fa fa-star-o"></i></li>';
  }
  if (mov == 16) {
    document.querySelector(".stars").children[1].innerHTML = '<li><i class="fa fa-star-o"></i></li>';
  }



}

function restart() {
   window.location.reload();
    //restart the game
}

function timer() {
  var p = document.querySelector(".min"); //starts the timer when the first click has occured
  var q = document.querySelector(".sec");
  interval = setInterval(function myfun() {

    p.innerHTML = min;
    q.innerHTML = sec;
    sec += 1;
    if (sec == 60) { //ipdating the minutes and seconds for each one second
      min += 1;
      sec = 0;
    }
  }, 1000)

}


cl.onclick = function() {
  mod.style.display = "none";
}

function congrats() { //pop up box for mentioning the stars

  mod.style.display = "block";
  document.querySelector(".time").innerHTML = min + "min" + (sec - 1) + "sec";
  document.querySelector(".grade").children[0].className = rating.children[0].children[0].className;
  document.querySelector(".grade").children[1].className = rating.children[1].children[0].className;
  document.querySelector(".grade").children[2].className = rating.children[2].children[0].className;

}

function PlayAgain() {
  restart();
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
