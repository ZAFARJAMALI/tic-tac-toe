let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn")
let newGameBtn =document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let mdg = document.querySelector("#msg");

let turno = true; //playerX ,playerO

let arry = ["apple","banana","litchi"];
//2D arry
let arry2 = [
["apple","litchi"],
["putato","mashroom"],
["pants","shirts"]

];

const winPatterns =[
[0, 1, 2],
[0, 3, 6],
[0, 4, 8],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[3, 4, 5],
[6, 7, 8],

];

const resetGame = () => {
 turno = true;
enbleBoxes();
msgContainer.classList.add("hide");

};


boxes.forEach((box) => {
box.addEventListener("click", () => {
// console.log("box was clicked");
if(turno == true){ //playeo
box.innerText ="o"; 
turno = false ;
}else{
    box.innerText ="x"; //playerx
    turno =true;
}
box.disabled = true;
checkwinner();
});
});
//disable boxes function 
const disableBoxes = () => {
    for(let box of boxes) {
    box.disabled = true;
    };
}
//enable boxe function 
    
const enbleBoxes = () => {
    for(let box of boxes) {
    box.disabled = false;
    box.innerText = "";
    }
};



const showWinner = (winner) =>{
msg.innerText = `congratulations ,Winner is ${winner}`;
msgContainer.classList.remove("hide");
disableBoxes();
};

const checkwinner = () => {
for(let pattern of winPatterns) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
if(pos1val != "" && pos2val != "" && pos3val != ""){
    if(pos1val === pos2val && pos2val === pos3val){
        // console.log("wineer", pos1val);
        showWinner (pos1val);
    }
}

}
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);

























