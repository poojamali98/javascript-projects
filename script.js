const names=["Aarav","Sanya","Vikram","Neha","Rohan","Priya","Amit","Meera","Rajiv","Ananya"];
let curindex=0;
let displayNames=document.getElementById('nameDisplay');
//let nextName=document.getElementById('btn1');
//let previousName=document.getElementById('btn2');
displayNames.innerText=names[curindex];
next=()=>{
    curindex=(curindex+1)%names.length;
    displayNames.innerText=names[curindex];
}
previous=()=>{
    curindex=(curindex-1)%names.length;
    displayNames.innerText=names[curindex];
}