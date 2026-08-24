
const buttonValue = document.querySelector("#calculateBtn");
const resultValue = document.querySelector("#result");

buttonValue.addEventListener("click", myFunction);
function myFunction(){

    const x = document.getElementById("number").value;
    resultValue.textContent = (Number(x)*1.1).toFixed();
}
