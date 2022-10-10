import "./style.css";

// PROGRAM FILTERING
function ingenforestillinger(){
    const skjulteforestillinger = document.querySelectorAll('.forestilling.hidden').length;
    if(skjulteforestillinger === 7){
      document.querySelector("#ingenforestillinger").classList.remove("hidden");
    } else {
      document.querySelector("#ingenforestillinger").classList.add("hidden");
    }          
  }  