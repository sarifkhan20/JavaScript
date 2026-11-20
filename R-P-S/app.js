let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorepara = document.querySelector("#user");
const compscorepara = document.querySelector("#comp");

const generateChoice=() =>{
    const options = ["rock","scissor","paper"];
    const idx=Math.floor(Math.random() * 3);
    return options[idx];
}

const showWinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        userScore++;
        userscorepara.innerText=userScore;
        msg.innerText=`You win,Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscorepara.innerText=compScore;
        msg.innerText=`You Lose,${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const drawGame =()=>{
    msg.innerText="Game Draw,Play again!";
    msg.style.backgroundColor="#081b31";
}
const playGame=(userchoice)=>{
    const compchoice = generateChoice();

    if(userchoice === compchoice){
        drawGame();
    } else{
        let userwin =true;
        if(userchoice === "rock"){
            userwin = compchoice ==="paper" ? false : true;
        }
        else if(userchoice === "paper"){
            userwin = compchoice ==="scissor" ? false : true;
        }
        else if(userchoice === "scissor"){
            userwin = compchoice ==="rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
    }
};

choices.forEach((choices) => {
    choices.addEventListener("click", () => {
        const userchoice=choices.getAttribute("id");
        playGame(userchoice);
    });
});