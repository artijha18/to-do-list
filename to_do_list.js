function addtask(){
let input=document.getElementById("taskinput");
let tasktext=input.value.trim();
if (tasktext=== "") return ;
let li=document.createElement("li");
li.textContent=tasktext;
li.addEventListener("click",function(){
    li.classList.toggle("completed");
})
let span=document.createElement("span");
span.textContent="X";
span.onclick=function(){
    li.remove();
};
li.appendChild(span);
document.getElementById("tasklist").appendChild(li);
input.value="";
}
