function updateLength(val) {
  document.getElementById("lengthValue").innerText = val;
}
function generatePassword() {
  const length = document.getElementById("length").value;
  const useUpper = document.getElementById("uppercase").checked;
  const useLower = document.getElementById("lowercase").checked;
  const useNumbers = document.getElementById("numbers").checked;
  const useSymbols = document.getElementById("symbols").checked;

  let charset = "";
  if (useUpper) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (useLower) charset += "abcdefghijklmnopqrstuvwxyz";
  if (useNumbers) charset += "0123456789";
  if (useSymbols) charset += "!@#$%^&*()_+{}[]|:;<>,.?/~`-=";

  if (charset === "") {
    alert("Selecciona al menos un tipo de carácter.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    password += charset.charAt(Math.floor(Math.random() * charset.length));
  }

  document.getElementById("password").value = password;
  evaluateStrength(length);
}

function evaluateStrength(length) {
  const strength = document.getElementById("strength");
  if (length < 20) {
    strength.innerText = "Nivel: Débil";
    strength.style.color = "red";
  } else if (length >= 23 && length < 40) {
    strength.innerText = "Nivel: Fuerte";
    strength.style.color = "orange";
  } else if (length >= 40) {
    strength.innerText = "Nivel: Segura";
    strength.style.color = "limegreen";
  } else {
    strength.innerText = "";
  }
}
