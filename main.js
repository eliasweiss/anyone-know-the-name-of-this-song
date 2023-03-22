alert('Verifizierung fehlgeschlagen, bitte erneut ausfüllen.');
function goGo() {
    const contentInputA = 1;
    const contentInputB = 1;
    if(contentInputA != false && contentInputB != false) {
        console.log('test')
    }
    document.getElementsByTagName('body')[0].classList.toggle('activated');
}
document.getElementById('send').addEventListener('click', goGo);