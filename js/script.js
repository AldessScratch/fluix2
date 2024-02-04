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

function changetitle() {
  const maxCharacters = 10;
  const minCharacters = 3;
  let result = prompt("Entrez le titre en majuscule");
  if (isNumeric(result)) {
    localStorage.setItem('title', result);
    location.href = 'a.html';
  } else {
    alert("Le titre ne doit contenir que des majuscules");
    changetitle();
  }
if (result==='HIT' + 'LER' || result==='BI' + 'TE' || result==='PE' + 'NIS' || result==='ANU' + 'S' || result==='PO' + 'RN' + 'H' + 'UB') {
  localStorage.setItem('banned', '1')
    changetitle();
  }
  if (result.length > maxCharacters) {
    alert("Le titre ne doit pas dépasser 10 caractères.");
    changetitle();
    return;
  }
  if (result.length < minCharacters) {
    alert("Le titre doit avoir au moins 3 caractères.");
    changetitle();
    return;
  }
}