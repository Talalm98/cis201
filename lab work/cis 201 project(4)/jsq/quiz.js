

function q() {
  var total;
  var score=document.getElementById("one-b").selected;
  if(score==true){
    total++;
  }
  var score=document.getElementById("two-c").selected;
  if(score==true){
    total++;
  }
  var score=document.getElementById("three-a").selected;
  if(score==true){
    total++;
  }
  document.getElementById("sc").innerHTML=score;
}
