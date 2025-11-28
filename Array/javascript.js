let arr=[];

function addItem(){
    const input = document.getElementById('itemInput');
    let value = input.value.trim();
    alert("input is :" + value);
    if(value){
        arr.push(value);
    }
     input.value = "";
    render();
   

}

function removeLast(){
    arr.pop();
    render();
    

}

function render(){
    const box = document.getElementById('list');
    if(arr.length === 0){
        box.innerHTML = "Empty";
    }else{
        box.innerHTML = arr.join(',');
    }
}