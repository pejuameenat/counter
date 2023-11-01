// DOM IN JS
// DOCUMENT OBJECT

 const counter = document.getElementById("count-el");
 const decrease = document.getElementById("decrement");
 const increase = document.querySelector(".count-btn");
 const  refresh =  document.querySelector("#refresh");
 

//   function for decreasing and function for increasing
// start counting from 0
 let count = 0;
function countBtn(){
    // increase h2 element
    count++
    counter.textContent = count;
    
}

increase.addEventListener("click",  countBtn)

 
 
refresh.addEventListener("click", function(){
    window.location.reload();
})



