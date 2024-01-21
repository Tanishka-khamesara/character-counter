const characters = document.getElementById("input");
const total = document.getElementById("total");
const remaining = document.getElementById("rem");

characters.addEventListener('keyup', (e) => {
  // console.log(e.target.value.length);
  const totalCharacters = e.target.value.length;
  total.innerText = totalCharacters;
  if (totalCharacters <= 50) {
    remaining.innerText = 50 - totalCharacters;
  } else {
    alert("Limit Exceeded");
  }
})