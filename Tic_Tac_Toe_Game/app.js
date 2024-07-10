let box = document.querySelectorAll(".box");
let resbtn = document.querySelector("#resbtn");
let turnO = true ; 
let msg = document.querySelector("#msg");
let newbtn = document.querySelector("#newbtn");
let msgcont = document.querySelector(".msg-container");

let cnt = 0;
let flag = true;
const winpatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [3,4,5],
  [6,7,8],
  [1,4,7],
  [2,5,8],
  [2,4,6]
];
const showwinner = (winner)=>{
  msg.innerText = `Congratulations, Winner is ${winner}`;
  msgcont.classList.remove("hide");
}
const draw = ()=>{
  msg.innerText = `Game was a Draw.`;
  msgcont.classList.remove("hide");
}
const resetbtn = ()=>{
  turnO =true;
  enableboxes();
}
const disableboxes = ()=>{
  for(let i of box){
    i.disabled = true;
  }
}
const enableboxes = ()=>{
  for(let i of box){
    i.disabled = false;
    i.innerText ="";
    msgcont.classList.add("hide");
  }
}
// main code starts here 
box.forEach((val)=>{
val.addEventListener("click",()=>{
 
   if(turnO === true){
    val.innerText = "O";
    val.classList.remove("comp");
    val.classList.add("user");
    cnt++;
    turnO = false;
   }else{
    val.innerText = "X";
    val.classList.remove("user");
    val.classList.add("comp");
    cnt++;
    turnO = true;
   }
   val.disabled = true;
   checkWinner();
   if(cnt===9 && flag === true){
    draw();
   }
});
});


const checkWinner = ()=>{
  for(let i of winpatterns){
  let pos1 = box[i[0]].innerText;
  let pos2 = box[i[1]].innerText;
  let pos3 = box[i[2]].innerText;
  if(pos1!="" && pos2!="" && pos3!=""){
     if(pos1===pos2 && pos2===pos3){
      showwinner(pos2);
      disableboxes();
      flag = false;
     }    
  }
  }
}

resbtn.addEventListener("click",()=>{
  resetbtn();
  cnt=0;
  flag =true;
});
newbtn.addEventListener("click",()=>{
  resetbtn();
  cnt=0;
  flag =true;
});