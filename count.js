let count = 0;
function plus() {
  count++;
  document.getElementById("pre").textContent = count;
}
function minus() {
  if (count == 0) {
    return;
  }
  count--;
  document.getElementById("pre").textContent = count;
}

window.addEventListener("load", function () {
  document.getElementById("plus").addEventListener("click", plus);
  document.getElementById("minus").addEventListener("click", minus);
});
