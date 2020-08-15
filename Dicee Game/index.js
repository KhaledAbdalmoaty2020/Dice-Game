var random_number_1=Math.floor((Math.random()*6)+1);
var path_1="images/dice"+ random_number_1 +".png";
document.querySelector("#player_1").setAttribute("src",path_1);

/* ----------------------------------- -- ----------------------------------- */
var random_number_2=Math.floor((Math.random()*6)+1);
var path_2="images/dice"+random_number_2+".png";
document.querySelector("#player_2").setAttribute("src",path_2);

/* ----------------------------------- -- ----------------------------------- */
var h1_text=document.querySelector("h1")
if(random_number_1 > random_number_2){
      h1_text.innerHTML="🚩 Play 1 Wins!";
}
else if(random_number_1 < random_number_2){
    h1_text.innerHTML=" Play 2 Wins! 🚩";
}
else{
    h1_text.innerHTML=" Draw ! ";
}

