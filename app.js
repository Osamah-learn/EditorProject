let codes = document.getElementById("codes");
let run = document.getElementById("run");
let remove = document.getElementById("remove");
let resulit = document.getElementById("resulit");



run.onclick = ()=>{
    resulit.innerHTML = codes.value;
    localStorage.setItem("resulit",codes.value)
}

remove.onclick = ()=>{
    resulit.innerHTML = ""
}


onload = ()=>{
    codes.value = localStorage.getItem("resulit");
    resulit.innerHTML = codes.value;
}