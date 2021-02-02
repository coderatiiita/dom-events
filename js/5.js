const hexColorInput = document.getElementById('hex-color-input');
const colorBox = document.getElementById('color-block');

hexColorInput.addEventListener('keyup', (e) => {
  colorBox.style.backgroundColor = e.target.value;
});