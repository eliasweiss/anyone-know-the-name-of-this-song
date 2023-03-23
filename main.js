alert('Verifizierung fehlgeschlagen, bitte erneut ausfüllen.');
function goGo() {
    const contentInputA = document.getElementsByTagName('input')[0].value;
    const contentInputB = document.getElementsByTagName('input')[1].value;
    console.log(contentInputA, contentInputB)
    if(contentInputA !== "" && contentInputB !== "") {
        document.getElementsByTagName('body')[0].classList.toggle('activated');
    } else {
        alert('Bitte Felder ausfüllen.')
    }
}
document.getElementById('send').addEventListener('click', goGo);