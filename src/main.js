import BUTTONS from './keys';
import Keyboard from './keyboard';
import './style.css';

let keyboard;

let lang = 'en';

window.addEventListener('load', () => {
  lang = localStorage.getItem('lang') || 'en';
  keyboard = new Keyboard(BUTTONS, lang);
  keyboard.createKeyboard();
}, true);

document.addEventListener('keydown', (event) => {
  // check that button exist on virtual jeyboard, other buttons are ignored
  if (keyboard.buttons.flat().filter((lt) => lt.code === event.code).length === 0) {
    return;
  }
  event.preventDefault();

  if (keyboard.pressedBtns.includes('ControlLeft') || keyboard.pressedBtns.includes('ControlRight')) {
    if (event.code === 'KeyA') {
      keyboard.selectAll();
    } else if (event.code === 'KeyC') {
      keyboard.copy();
    } else if (event.code === 'KeyV') {
      keyboard.addLetter(keyboard.clipboard);
    }
  } else {
    const newLetter = keyboard.getNewLetter(event.code);
    keyboard.addLetter(newLetter);
  }

  if (!keyboard.pressedBtns.includes(event.code)) {
    keyboard.pressedBtns.push(event.code);
    document.querySelector(`[data-code=${event.code}]`).classList.add('transition-key-down');
  }

  if (event.code === 'CapsLock') {
    keyboard.capsLockOn = !keyboard.capsLockOn;
  }

  if (keyboard.pressedBtns.includes('ShiftLeft') && keyboard.pressedBtns.includes('AltLeft')) {
    keyboard.lang = keyboard.lang === 'en' ? 'ru' : 'en';
    localStorage.setItem('lang', keyboard.lang);
    const savedText = document.querySelector('textarea').value;
    setTimeout(() => { keyboard.createKeyboard(savedText); }, 700);
  }
  if (event.code === 'Backspace' || event.code === 'Delete') {
    keyboard.deleteLetter(event.code);
  }
  if (event.code === 'Tab') {
    keyboard.addLetter('    ');
  }
  if (event.code === 'Enter') {
    keyboard.addLineBreak();
  }
});

document.addEventListener('keyup', (event) => {
  // check that button exist on virtual jeyboard, other buttons are ignored
  if (keyboard.buttons.flat().filter((lt) => lt.code === event.code).length === 0) {
    return;
  }
  keyboard.pressedBtns = keyboard.pressedBtns
    .filter((button) => button !== event.code);
  document.querySelector(`[data-code=${event.code}]`).classList.remove('active');
});
