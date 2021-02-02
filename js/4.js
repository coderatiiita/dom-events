const text = document.getElementById("input-text");
const label = document.getElementById("label-text");
    
text.addEventListener("keyup", (e) => {
    label.innerText = `The above text has ${e.target.value.length} characters.`;
});