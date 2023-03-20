const form = document.querySelector('#form-habits');
const nlwSetup = new NLWSetup(form);
const button = document.querySelector('header button');
const currentDate = new Date().toLocaleDateString('pt-br').slice(0, 5);

const add = () => {
  /* Método que verifica se a data atual ja existe e retorna True ou False*/
  const dayExists = nlwSetup.dayExists(currentDate);

  if (dayExists) {
    alert(`Essa data ja existe: ${currentDate} ❌`);
    return;
  }

  alert('Dia adicionado com sucesso ✔️');
  nlwSetup.addDay(currentDate);
};

const save = () => {
  localStorage.setItem('MurilloSetup@habits', JSON.stringify(nlwSetup.data));
};

button.addEventListener('click', () => {
  add();
});

form.addEventListener('change', () => {
  save();
});

const data = JSON.parse(localStorage.getItem('MurilloSetup@habits')) || {};
nlwSetup.setData(data);
nlwSetup.load();
