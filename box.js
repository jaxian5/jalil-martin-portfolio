const textBox = document.getElementById("textBox");
const button = document.getElementById("submitBtn");
const output = document.getElementById("output");

button.addEventListener("click", function () {
  output.textContent = textBox.value;
});


textBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    output.textContent = textBox.value;
  }
});

textBox.value = "";

