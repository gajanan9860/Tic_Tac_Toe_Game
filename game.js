let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");

let turnO=true;  //player x, player o;
let cnt=0;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO === true){ //player O
            box.innerText = "O";
            cnt = cnt + 1;
            turnO = false;
        }
        else{ // player X
            box.innerText = "X";
            cnt = cnt + 1;
            turnO = true;
        }

        box.disabled = true;
        checkWinner();
    });
    // if(cnt === 9){
    //     resetGame();
    // }
    
});

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText = "";
    }
    
}

const showWinner = (winner) => {
    message.innerText = `Congratulation, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner = () => {
    for(let pattern of winPatterns){
        
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;
        if (posval1 !="" && posval2 != "" && posval3 != ""){
            if(posval1 === posval2 && posval2 === posval3){
                console.log("winner",posval1); 
                showWinner(posval1);
            }
            // else if (cnt === 9) {
            //     resetGame();
            // } 
            
        }
    }
    
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


    