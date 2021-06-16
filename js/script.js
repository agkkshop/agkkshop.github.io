const aboutButton = document.querySelector('.about-btn');
const modalWindow = document.querySelector('.modal-window');
const closeButton = document.querySelector('.modal-close');

aboutButton.addEventListener('click', showWindow);
closeButton.addEventListener('click', closeWindow);

function showWindow() {
  modalWindow.classList.add('modal-window-active');
}

function closeWindow() {
  modalWindow.classList.remove('modal-window-active');
}
