function start(){
    let name = prompt("Enter a name in English : ");
    if (!name  || name.trim() === ""){
        alert("you must enter a name:");
        return;
    }
    name = name.trim();
    let c = name.length;
    let main = name.slice(1,(c-1));
    let first = name.charAt(0);
    let last = name.charAt(c-1);
    let fainal = (`${last}` + `${main}` + `${first}`);
    alert("Result : " + fainal);
    document.getElementById("Output").innerHTML = fainal;
}




