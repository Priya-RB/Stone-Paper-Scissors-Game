let userScore=0;
let computerScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userScorePara=document.querySelector("#user-score");
const computerScorePara=document.querySelector("#computer-score");


const drawGame=()=>{
    msg.innerText="Draw Game!";
    msg.style.backgroundColor= "#A1D6E2";
    msg.style.color= "black";
};

const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomIdx=Math.floor(Math.random()*3);
    //It generates random num below 2
    return options[randomIdx];
};

const showWinner=(userWin,userChoice,computerChoice)=>{
    if(userWin===true)
    {
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Won! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor= "#1995AD";
        msg.style.color= "white";
    }
    else{
        computerScore++;
        computerScorePara.innerText=computerScore;
        msg.innerText=`You lost! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor= "#375E97";
        msg.style.color= "white";

    }
};

const playGame=(userChoice)=>{
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const computerChoice=genComputerChoice();
    console.log("Computer choice = ", computerChoice);

    if(userChoice===computerChoice)
        drawGame();//Draw game
    else{
        let userWin=true;
        if(userChoice==="rock")
        {
            userWin=computerChoice==="paper"?false:true;
        }
        else if(userChoice==="paper")
        {
            userWin=computerChoice==="scissors"?false:true;
        }
        else{
            userWin=computerChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,computerChoice);
    }
};

choices.forEach((choice)=> {
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("Choice was clicked!",userChoice);
        playGame(userChoice);
    });
    
});