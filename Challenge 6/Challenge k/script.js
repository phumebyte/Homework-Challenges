const nickname= "Timmy";
const firstname = "Timothy";
if (nickname === "" || firstname === ""){
    console.log("Please enter a nickname and a first name");
} else {
console.log("Good Morning," + (nickname ? nickname : firstname) + "!")
}