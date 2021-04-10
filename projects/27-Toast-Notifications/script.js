//
//

const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

button.addEventListener('click', () => createNotification());

function createNotification() {
  const notif = document.createElement('div');
  notif.classList.add('toast');

  notif.innerText = getRandomMessage();
  notif.style.backgroundColor = getRandomColor();
  notif.style.color = '#fff';
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomColor() {
  return `#${Math.random(Math.floor() * 256)
    .toString(16)
    .substr(-6)}`;
}

console.log(getRandomColor());
