let currentHour = moment().hour();
console.log(currentHour)
let timeBlockArray = document.querySelectorAll(".time-block");
let saveBtnArray = document.getElementsByClassName("saveBtn");
for (let i = 0; i < saveBtnArray.length; i++) {
  const element = saveBtnArray[i];
  element.addEventListener("click", function (event) {
    let parentElement = event.target.parentNode;
    if (parentElement.classList.contains("time-block") === false) {
      parentElement = event.target.parentNode.parentNode;
    }
    let timeDiv = parentElement.children[0];
    console.dir(timeDiv);
    let currentId = timeDiv.id;
    let eventText = parentElement.children[1].value;
    console.log(currentId, eventText);
    localStorage.setItem(currentId, eventText);
  });
}
function displayLocalStorage() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const eventText = localStorage.getItem(key);
    const timeSlot = document.getElementById(key).nextElementSibling;
    timeSlot.textContent = eventText;
  }
}
displayLocalStorage();
function displayCurrentDate() {
  let today = moment().format("dddd MMMM Do YYYY, h:mm a");
  document.getElementById('currentDay').textContent = today
}
displayCurrentDate()
function colorCodeTimes(){
  for(let i = 0; i < timeBlockArray.length; i++){
    let currTimeBlock = timeBlockArray[i]
    let textArea = currTimeBlock.children[1]
    let hour = currTimeBlock.children[0].id
    console.log(textArea, hour)
      var res = hour.split("-")[1];
      var hourNum = Number(res)
      console.log(hourNum);
      if(hourNum < currentHour){
        textArea.classList.add('past')
      }else if(hourNum > currentHour){
        textArea.classList.add('future')
      }else {
        textArea.classList.add('present')
      }
  }
 
}
colorCodeTimes()
