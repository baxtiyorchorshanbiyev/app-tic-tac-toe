let turn = document.getElementById("turn"),
    box = document.querySelectorAll("#main div"), X_or_O = 0;
    function selectWinnerBox(b1, b2, b3) {
      b1.style.background = "coral";
      b2.style.background = "coral";
      b3.style.background = "coral";
      turn.innerHTML = b1.innerHTML + " Won Congrat";
    }

function getWinner() {
  let box1 = document.getElementById("box1"),
      box2 = document.getElementById("box2"),
      box3 = document.getElementById("box3"),
      box4 = document.getElementById("box4"),
      box5 = document.getElementById("box5"),
      box6 = document.getElementById("box6"),
      box7 = document.getElementById("box7"),
      box8 = document.getElementById("box8"),
      box9 = document.getElementById("box9");
      // tekshirish
      if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML){
        selectWinnerBox(box1, box2, box3);
      }
      if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML){
        selectWinnerBox(box4, box5, box6);
      }
      if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML){
        selectWinnerBox(box7, box8, box9);
      }
      if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML){
        selectWinnerBox(box1, box4, box7);
      }
      if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML){
        selectWinnerBox(box2, box5, box8);
      }
      if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML){
        selectWinnerBox(box3, box6, box9);
      }
      if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML){
        selectWinnerBox(box1, box5, box9);
      }
      if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML){
        selectWinnerBox(box3, box5, box7);
      }
      
}
      for(let i = 0; i < box.length; i++){
      box[i].onclick = function(){
        
        if(this.innerHTML !== "X" && this.innerHTML !== "O"){
          
          if(X_or_O %2 === 0){
            this.innerHTML = "X";
            turn.innerHTML = "O Turn Now";
            getWinner();
            X_or_O += 1;
            }else{
            this.innerHTML = "O";
            turn.innerHTML = "X Turn Now";
            getWinner();
            X_or_O += 1; 
          }
        }
    };
    }
    
    function replay() {
      for(let i = 0; i < box.length; i++){
        box[i].style.background = "";
        box[i].innerHTML = "";
        turn.innerHTML = "Play";
        
      }
      
    }
    
  
  document.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader");
    setTimeout(function () {
    loader.style.opacity = "0";
    setTimeout( function(){
      loader.style.display = "none";
    }, 500);
  }, 1500);
  });