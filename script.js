const incrementCount = document.querySelector(".count-btn");
const decrementCount = document.getElementById("decrement");
const totalCount = document.getElementById("count-el");
const refreshButton =document.querySelector('#refresh')
let count = 0;
totalCount.innerHTML = count;

function handleIncrement(){
  count++;
  totalCount.innerHTML = count;
  if(Number(totalCount.innerHTML) > 0){
  totalCount.style.color = 'green'
  } else if(Number(totalCount.innerHTML) === 0){
  totalCount.style.color = 'black'
}
}

function handleDecrement(){
  count--;
  totalCount.innerHTML = count;
  if(Number(totalCount.innerHTML) < 0){
  totalCount.style.color = 'red'
  } else if(Number(totalCount.innerHTML) === 0){
  totalCount.style.color = 'black'

} 
}

incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);
refreshButton.addEventListener("click", function(){
  window.location.reload(), alert('Are you sure you want to reset this page')}
  );
         
// if(handleIncrement){
//   totalCount.style.color = "#00ff00";

// }else{
//   totalCount.style.color = "#ff0000";
// }
        









// const colorArr = ["red", "yellow", "blue", "green", "white", "black"];
// const [first, second] = colorArr;
// console.log(first, second);



//✨✨✨✨✨✨✨//
//Example of destructuring objects👀//
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  const {today, tomorrow} = HIGH_TEMPERATURES;
   console.log(today, tomorrow);
  