const decBtn = document.getElementById("dec-btn");
const incBtn = document.getElementById("inc-btn");

decBtn.addEventListener("click", ()=> {
    let value = document.getElementById("input-text").value;
    value--;
    document.getElementById("input-text").value=value;
});

incBtn.addEventListener("click", ()=> {
    let value = document.getElementById("input-text").value;
    value++;
    document.getElementById("input-text").value=value;
});