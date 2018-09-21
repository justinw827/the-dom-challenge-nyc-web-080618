let counter = document.getElementById("counter").innerText
let counterNum = parseInt(counter)

let minusButton = document.getElementById("-")
let plusButton = document.getElementById("+")
let heartButton = document.getElementById("<3")
let pauseButton = document.getElementById("pause")

// Counter
let interval = setInterval(increment, 1000);

let isPaused = false
function increment(){
  if (!isPaused) {
    counterNum += 1;
    document.getElementById("counter").innerText = counterNum.toString()
  }
}

// Decrement counter button
minusButton.addEventListener("click", (event) => {
  counterNum -= 1
  document.getElementById("counter").innerText -= 1
})

// Increment counter button
plusButton.addEventListener("click", (event) => {
  counterNum += 1
  document.getElementById("counter").innerText = (counterNum + 1)
})

// Likes
const likeObj = {}
const likesContainer = document.querySelector(".likes")
heartButton.addEventListener("click", (event) => {
  const liTag = document.createElement("li")

  if (likeObj[counterNum]) { // If counter already liked increment
    likeObj[counterNum] += 1
    likesContainer.children[likesContainer.children.length - 1].innerHTML = `${counterNum} has been liked ${likeObj[counterNum]} time`
  } else { // first time counter is liked
    likeObj[counterNum] = 1
    liTag.innerHTML = `${counterNum} has been liked 1 time`
    likesContainer.appendChild(liTag)
  }
})

// Pause Button
pauseButton.addEventListener("click", (event) => {
  isPaused = !isPaused
  if (isPaused) {
    minusButton.disabled = true
    plusButton.disabled = true
    heartButton.disabled = true
  } else {
    minusButton.disabled = false
    plusButton.disabled = false
    heartButton.disabled = false
  }
})

// Comments
const commentContainer = document.getElementById("list")
document.getElementById("comment-form").addEventListener("submit", (event) => {
  event.preventDefault()
  const pTag = document.createElement("p")
  pTag.innerText = document.getElementById("comment").value
  commentContainer.appendChild(pTag)
  event.target.reset()
  // debugger
})
