document.getElementById('val').innerHTML = localStorage.getItem('res');
document.getElementById('add').innerHTML = localStorage.getItem('income');
document.getElementById('unadd').innerHTML = localStorage.getItem('expences');
let allExp = Number(localStorage.getItem('allExp'));
document.getElementById('exp').innerHTML = `Итого расходы: ${localStorage.getItem('allExp')}`;
let date = '';
const today = new Date();
let flag = Number(localStorage.getItem('flag'));
if (flag === '') flag = 1;
date = document.getElementById('date');
date.innerHTML = `Сегодня <br />${today.getDate()}.${today.getMonth()}.${today.getFullYear()}`;
if ((today.getDate() === 1) && (flag === 1)) {
  alert(`В этом месяце вы потратили ${localStorage.getItem('allExp')}\nУ вас осталось ${localStorage.getItem('res')}\nПри следующей загрузке страницы данные о доходах/расходах будут удалены.`);
  flag = 0;
  localStorage.removeItem('income');
  localStorage.removeItem('expences');
  localStorage.removeItem('allExp');
} else if (today.getDate() !== 1) flag = 1;
localStorage.setItem('flag', flag);


function addy() {
  const field = Number(document.getElementById('in').value);
  document.getElementById('add').innerHTML = `${field} <br /> ${document.getElementById('add').innerHTML}`;
  const val = Number(document.getElementById('val').innerHTML);
  let res = 0;
  res = val + field;
  document.getElementById('val').innerHTML = res;
  localStorage.setItem('res', document.getElementById('val').innerHTML);
  localStorage.setItem('income', document.getElementById('add').innerHTML);
}

function unaddy() {
  const field = Number(document.getElementById('in').value);
  document.getElementById('unadd').innerHTML = `${field} <br /> ${document.getElementById('unadd').innerHTML}`;
  const val = Number(document.getElementById('val').innerHTML);
  let res = 0;
  res = val - field;
  document.getElementById('val').innerHTML = res;
  localStorage.setItem('res', document.getElementById('val').innerHTML);
  localStorage.setItem('expences', document.getElementById('unadd').innerHTML);
  allExp = Number(allExp + field);
  document.getElementById('exp').innerHTML = `Итого расходы: ${allExp}`;
  localStorage.setItem('allExp', allExp);
}
