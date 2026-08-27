const userBut = document.querySelector("#welcomeBtn");
const result = document.querySelector("#message");

userBut.addEventListener("click",welcomeMessage);
function welcomeMessage(){
    const inputName = document.querySelector("#username");
    const name = inputName.value.trim();
    if (name){
    result.textContent = `Welcome ${name}!`;
    }else{
        result.textContent = `Please enter a valid name!`;
    }
    
}
