


document.q1.onclick = function(){
var total1;
var score1=document.q1.q1an.value;
if(score1==3){
  total1="correct answer";
}else{
  total1="incorrect answer";
}
result1.innerHTML=total1;

}


document.q2.onclick = function(){
var total2;
var score2=document.q2.q2an.value;
if(score2=="blue"){
  total2="correct answer";
}else{
  total2="incorrect answer";
}
result2.innerHTML=total2;

}

document.q3.onclick = function(){
var total3;
var score3=document.q3.q3an.value;
if(score3==4){
  total3="correct answer";
}else{
  total3="incorrect answer";
}
result3.innerHTML=total3;

}


/*
function t() {
  var s=0;
  return s++;
  document.getElementById("t").innerHTML;
}
/*
function hy() {
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

   document.getElementById("sc").innerHTML=total;
  console.log(Score);
}
*/
