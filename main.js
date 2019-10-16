//-----------------------------------------------------------------------------------------
const cards = document.querySelectorAll('.memory-card');
let hasFlippedCard = false,lockBoard = false, firstCard,secondCard;
let countt=0
var counterr=0;
var fli;
var interval;
var second = 100;
var timer;
let match;
let random;
//-----------------------------------------------------------------------------------------
function flipCard()
 {
   
  if (lockBoard) return;
  if (this === firstCard)
   return;
  this.classList.add('flip');
  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    return;
  } 
  secondCard = this;
  checkForMatch();
}
// This function gonna to flip the 1st card and 2ed card and 
//check if they match or not checkForMatch();
//-----------------------------------------------------------------------------------------

 fli = document.getElementById("f2");
function checkForMatch() 
{

  match = firstCard.dataset.framework === secondCard.dataset.framework;
countt++
fli.innerHTML="Flips ="+" "+countt
//let winer = firstCard.dataset.framework === secondCard.dataset.framework;
//counter++


match ? disableCards() : unflipCards();

}
// It's gonna to check for the time of flipping 
//-----------------------------------------------------------------------------------------

function disableCards()
 {

  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  counterr+=1
console.log(counterr)

  if(counterr===8)
  {
    clearInterval(interval)
    win();
}
  resetBoard();
}

//-----------------------------------------------------------------------------------------

 timer = document.getElementById("time1r");
function startTimer(){
   interval = setInterval(function(){
       timer.innerHTML = "Timer :"+second+"secs";
       second--;
if (second===-1){
    clearInterval(interval)
    gameover()
}    
   },1000);
}
startTimer()

//Function of timer is gonna to countdown the time of the game 
//-----------------------------------------------------------------------------------------

function gameover()
{
  
    Swal.fire({
        title: 'Game Over!',
        text: 'Do you want to continue',
        confirmButtonText: 'Restart',
        preConfirm:()=>{
            location.reload();
            console.log("click")
        }

      })
    }

    //function gameover will be as a popup window 
//-----------------------------------------------------------------------------------------
$("button").click(function()
{
    location.reload();
    console.log("click")
    

})
//-----------------------------------------------------------------------------------------
function win(){

Swal.fire({
  title: 'You Win ',
  animation: false,
  customClass: {
    popup: 'animated tada'
  }
})}

//function win if the user flipped all the cards 
// correctly before the time end the player will see a popup window 
//-----------------------------------------------------------------------------------------

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 500);
}
//function unflipcards if the player flip the 1st card and 2nd card un correctly it will remove th flip 

//-----------------------------------------------------------------------------------------
function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}
//This function is important for check if the flipped cards are
 //match or not ,without it the game will make the player flip only one time 
//-----------------------------------------------------------------------------------------

(function shuffle() 
{
  cards.forEach(card => 
    {
     random = Math.floor(Math.random() * 16);
    card.style.order = random;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

//-----------------------------------------------------------------------------------------
// var show = function (elem) {
// 	elem.classList.add('is-visible');
// };