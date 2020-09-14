const score=document.getElementById('score');
const optionsSection=document.getElementById('options');
const resultSection=document.getElementById('result');
const win=document.getElementById('win-lose');
const userSelected=document.getElementById('user-selected');
const computerSelected=document.getElementById('computer-selected');
const selectedButton=document.querySelectorAll('.select');
const playAgain=document.getElementById('play-again');
// chances
const chances=['rock','paper','scissors'];


let yourScore=0;
let userChoice=undefined;

resultSection.style.display='none';

selectedButton.forEach(button => {
    button.addEventListener('click',()=>{
        userChoice=button.getAttribute('data-choice');
        optionsSection.style.display='none';
        resultSection.style.display='inline-block';
        winner();
    })
});

playAgain.addEventListener('click',()=>{
    optionsSection.style.display='flex';
    resultSection.style.display='none';
});

function winner(){
    const computerChoice=selectRandom();
    changeChoice(userSelected,userChoice);
    changeChoice(computerSelected,computerChoice);
    // winning chance of user
    if((userChoice==="rock" && computerChoice==="scissors")||(userChoice==="scissors" && computerChoice==="paper")||(userChoice==="paper" && computerChoice==="rock")){
        changeScore();
        win.innerHTML="YOU WON!";
    }
    //draw chance
    else if(userChoice===computerChoice){
        win.innerHTML="DRAW MATCH";
    }
    //winning chance of computer
    else{
        win.innerHTML="YOU LOST!"
    }
}

//Random selection of computer 
function selectRandom(){
    return chances[Math.floor(Math.random()*chances.length)];
}

function changeScore(){
    yourScore++;
    score.innerHTML=yourScore;
}

//changing the icons selected 
function changeChoice(selectedChoice,chance){
    selectedChoice.classList.remove('btn-rock');
    selectedChoice.classList.remove('btn-paper');
    selectedChoice.classList.remove('btn-scissors');
    const icons=selectedChoice.querySelector('img');
    selectedChoice.classList.add('btn-'+chance);
    console.log(chance);
    icons.src='images/icon-'+chance+'.svg';
    icons.alt=chance;
}