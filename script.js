const num1= Math.ceil(Math.random()*10);
const num2=Math.ceil(Math.random()*10);
const input=document.getElementById("input")
let score=JSON.parse( localStorage.getItem("score"));
if(!score){
    score=0;
}
const question=document.getElementById("question");
question.innerHTML=`What is ${num1} multiply by ${num2}?` 

const form=document.getElementById("form")
const correctans=num1*num2;

const points= document.getElementById("score")

form.addEventListener("submit",()=>{
    const answer=+input.value
    if(answer===correctans){
        score++
        updateLocalStorage();
    }else{
        score--
        updateLocalStorage();
    }
})

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
points.innerHTML=`score: ${score}`

