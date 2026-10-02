let steveshocked = document.getElementById(`shockedsteve`)
let stevetalk = document.getElementById(`shocked`)

steveshocked.addEventListener(`click`, stevetalking)

function stevetalking() {
  if (stevetalk.innerHTML == `UwU`) {
    stevetalk.innerHTML = ``
  } else {
    stevetalk.innerHTML = `UwU`
  }
}