if (localStorage.getItem('username')===null || localStorage.getItem('username')==="null") {
  username()
}
function username() {
  const maxCharacters = 10;
  const minCharacters = 5;
  let result = prompt("Entrez votre nom d'utilisateur, ce nom sera utilisé dans la discussion. Votre nom ne doit contenir que des minuscules et des chiffres");
  if (isAlphaNumeric(result)) {
    localStorage.setItem('username', result);
    location.href = 'a.html';
  } else {
    alert("Votre nom d'utilisateur ne doit contenir que des minuscules et des chiffres");
    username();
  }
  if (result.length > maxCharacters) {
    alert("Votre nom d'utilisateur ne doit pas dépasser 10 caractères.");
    username();
    return;
  }
  if (result.length < minCharacters) {
    alert("Votre nom d'utilisateur doit avoir au moins 5 caractères.");
    username();
    return;
  }
}

function isAlphaNumeric(str) {
  return /^[a-z0-9]+$/.test(str);
}
function isNumeric(str) {
  return /^[A-Z]+$/.test(str);
}

function fetchip(){
  let echolog = {};
  fetch("https://wtfismyip.com/json")
    .then((response) => response.json())
    .then((data) => {
      let echolog = {
        ipAddress: data.YourFuckingIPAddress,
      };
      if (echolog.ipAddress==='195.68.53.171-' || echolog.ipAddress==='195.181.165.183'){
        sessionStorage.setItem('school', '1')
      }
    })
}   
