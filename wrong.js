const logoText = document.getElementsByClassName('logo-text');

logoText[0].style.color = '#384241';

const header = document.getElementsByTagName('header');

header[0].style.justifyContent = 'flex-start';
header[0].style.borderBottomColor = 'lightgray';

const dish = document.getElementById('recipe-name');

dish.innerText = 'Frozen Cheesecake';

const timeIcon = document.getElementsByClassName('time-container');
const time = document.getElementsByClassName('time');

timeIcon[0].firstChild.className = 'material-icons';
time[0].innerText = '60+ min';

const img = document.getElementsByTagName('img');

img[0].src = 'assets/frozen-cheesecake-slice.jpg';

const ingrContainer = document.getElementsByClassName('ingredients-container');

ingrContainer[0].style.backgroundColor = '#f9f9f9';

const ingrBottom = document.getElementsByClassName('ingredients-list-bottom');

ingrBottom[0].innerHTML = `
<li>15st digistivetex</li>
<li>Lite smör</li>
`;

const ingrPaste = document.getElementsByClassName('ingredients-list-paste');

ingrPaste[0].children[2].innerText = '3tsk vaniljsocker';

const newIngr = document.createElement('li');

newIngr.innerText = '400g naturell philadelphiaost';

ingrPaste[0].appendChild(newIngr);

const instructions = document.getElementsByClassName('shadow');

instructions[0].className = 'instructions';

const instrList = document.getElementsByClassName('instructions-list');

instrList[0].children[8].innerText = 'Ställ in i frysen över natten.';
