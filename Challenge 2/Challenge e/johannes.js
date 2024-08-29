let firstname = "Johannes"
let surname = "Potgieter"
export let role = "Intern"

const display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#johannes').innerText = display
