const addTast = document.querySelector("#addTast");
const listItem = document.querySelector("#listItem");

function addTastItem() {
  console.log("button")
  if (addTast.value === "") {
    alert("are you forget to write");
  } 
  else {
    let li = document.createElement("li");
    li.innerHTML = addTast.value;
    console.log(li.innerHTML)
    listItem.prepend(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  addTast.value = "";
  saveDate()
}

listItem.addEventListener(
  "click",
  (e) => {
    console.log('hey')
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveDate()
      // console.log(e.target.tagName);
    }
 else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveDate()
    }
  },
  false
);

function saveDate(){
    localStorage.setItem('data',listItem.innerHTML)
}
function showTask(){
    listItem.innerHTML = localStorage.getItem('data')
}
showTask()
