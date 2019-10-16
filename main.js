
const cards = document.querySelectorAll('.memory-card');


let hasFlippedCard = false,lockBoard = false, firstCard,secondCard;
let countt=0
var counterr=0;
var fli;
var interval;



function flipCard()
 {
   
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

   
    return;
  } 
  
  secondCard = this;

  checkForMatch();
  
}

//-------------------------------

 fli = document.getElementById("f2");
function checkForMatch() 
{

  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
countt++
fli.innerHTML="Flips ="+" "+countt
//let winer = firstCard.dataset.framework === secondCard.dataset.framework;
//counter++


  isMatch ? disableCards() : unflipCards();

}

//-----------------------------------

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

//------------------------------------
var second = 100;
var timer = document.getElementById("time1r");

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

//-------------------------------------------

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
//---------------------------------------
$("button").click(function()
{
    location.reload();
    console.log("click")
    

})
//-----------------------------------------
function win(){

Swal.fire({
  title: 'You Win ',
  animation: false,
  customClass: {
    popup: 'animated tada'
  
  }
})
}
$("button").click(function()
{
    location.reload();
    console.log("click")
    

})

//---------------------------------------------

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 1500);
}

//-----------------------------------------
function newFunction() {
    document.getElementById("newForm").reset();
 }

//------------------------------------

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

(function shuffle() 
{
  cards.forEach(card => 
    {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

$(".my_audio").trigger('load');


// var show = function (elem) {
// 	elem.classList.add('is-visible');
// };