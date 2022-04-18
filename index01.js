function changeWord (selectedText, changeText, text){
    change = text.replace(selectedText, changeText);
    return change;
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung bromo tak akan mampu mengggambarkan besarnya cintaku padamu';

console.log(changeWord('mencintai', 'membenci', kalimat1));
console.log(changeWord('bromo', 'semeru', kalimat2));