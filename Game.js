let r= prompt("Enter number of round you want to play")
let c1=0
let y=0
let r1= Number.parseInt(r)
for(let i=1;i<=r1;i++){
console.log("1.For Snake\n 2.For water\n 3.For Gun")
let c= Math.floor(Math.random()*3+1)
let g=prompt("Enter your Choice:- ")
let g1=Number.parseInt(g)
if(c==g1){
    console.log("Tie")
}
else if(c==1 && g1==2 || c==2 && g==3 ||c==3 && g==1){
console.log("Computer wins")
c1++
}
else{
    console.log("You win")
    y++
}
}
if(c1>y){
    console.log("Computer wins thw Tournament")
}
else if(y>c1){
    console.log("You win the Tournament")
}
