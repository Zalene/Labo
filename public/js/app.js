// Onglets JS
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
  tab.addEventListener('click', event => getActiveStep(event));
});

function getActiveStep(event) {
  tabs.forEach(tab => tab.classList.remove('active'));
  contents.forEach(content => content.classList.remove('active'));

  event.target.classList.add('active');
  document.querySelector(`#${event.target.dataset.id}`).classList.add('active');
};

//