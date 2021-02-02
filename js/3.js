const encodeBtn = document.getElementById("encode-btn");
const decodeBtn = document.getElementById("decode-btn");
const resultBox = document.getElementById("result-text");

encodeBtn.addEventListener("click", () => {
    const url = document.getElementById("url-text");
    resultBox.value = encodeURIComponent(url.value);    
});

decodeBtn.addEventListener("click", () => {
    const url = document.getElementById("url-text");
    resultBox.value = decodeURIComponent(url.value);    
});