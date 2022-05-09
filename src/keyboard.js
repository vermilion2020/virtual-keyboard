export default class Keyboard {
  pressedBtns = [];

  capsLockOn = false;

  functionalBtns = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight'];

  constructor(buttons, lang) {
    this.buttons = buttons;
    this.lang = lang;
  }

  getLetter(code) {
    return this.buttons.flat().filter((lt) => lt.code === code)[0];
  }

  createButton(i, row) {
    const button = this.buttons[row][i];
    const buttonDiv = document.createElement('div');
    buttonDiv.classList.add('key');
    buttonDiv.setAttribute('data-code', button.code);
    buttonDiv.setAttribute('data-value', button[this.lang]);
    buttonDiv.setAttribute('data-row', row);
    if (button.class) {
      buttonDiv.classList.add(button.class);
    }
    if (button[`${this.lang}_sup`]) {
      const sup = document.createElement('sup');
      sup.innerText = button[`${this.lang}_sup`];
      buttonDiv.appendChild(sup);
    }
    const buttonName = button[this.lang].length > 1
      ? button[this.lang] : button[this.lang].toUpperCase();
    buttonDiv.append(buttonName);
    return buttonDiv;
  }

  createRow(num) {
    const row = document.createElement('div');
    row.classList.add('row');
    const buttonsRow = this.buttons[num];
    for (let i = 0; i < buttonsRow.length; i += 1) {
      row.appendChild(this.createButton(i, num));
    }
    return row;
  }

  getNewLetter(code) {
    const letter = this.getLetter(code);
    if (this.functionalBtns.includes(code)) {
      return '';
    }
    if ((this.pressedBtns.includes('ShiftRight') || this.pressedBtns.includes('ShiftLeft')) && !this.functionalBtns.includes(code)) {
      if (letter[`${this.lang}_sup`]) {
        return letter[`${this.lang}_sup`];
      }
      return letter[this.lang].toUpperCase();
    }
    if (this.capsLockOn && !this.functionalBtns.includes(code)) {
      return letter[this.lang].toUpperCase();
    }
    return letter[this.lang];
  }

  createKeyboard(defaultText = '') {
    const BODY = document.querySelector('body');
    BODY.innerHTML = '';
    const LABEL = document.createElement('div');
    LABEL.classList.add('info_label');
    LABEL.innerText = this.lang === 'en' ? 'The shortcut for changing language is Shift + Alt' : 'Комбинация для смены раскладки клавиатуры Shift + Alt';
    const INPUT_CONTAINER = document.createElement('div');
    INPUT_CONTAINER.classList.add('text_container');
    const TEXT_INPUT = document.createElement('textarea');
    TEXT_INPUT.value = defaultText;
    TEXT_INPUT.focus();
    INPUT_CONTAINER.appendChild(TEXT_INPUT);
    const CONTAINER = document.createElement('div');
    CONTAINER.classList.add('container');
    CONTAINER.setAttribute('id', 'keyboard_container');
    for (let i = 0; i < this.buttons.length; i += 1) {
      CONTAINER.appendChild(this.createRow(i));
    }
    BODY.appendChild(LABEL);
    BODY.appendChild(INPUT_CONTAINER);
    BODY.appendChild(CONTAINER);

    CONTAINER.addEventListener('click', (event) => {
      let { target } = event;
      if (target.tagName === 'SUP' || target.classList[0] === 'key') {
        if (target.tagName === 'SUP') {
          target = event.path['1'];
        }

        if (event.code === 'CapsLock') {
          this.capsLockOn = !this.capsLockOn;
        }

        event.target.classList.add('transition-key-down');

        const textarea = document.querySelector('textarea');
        const letter = this.getLetter(target.dataset.code);
        let newLetter = '';
        if (this.capsLockOn && !this.functionalBtns.includes(target.dataset.code)) {
          newLetter = target.dataset.value.toUpperCase();
        }

        if ((this.pressedBtns.includes('ShiftLeft') || this.pressedBtns.includes('ShiftRight')) && !this.functionalBtns.includes(target.dataset.code)) {
          if (letter[`${this.lang}_sup`]) {
            newLetter = letter[`${this.lang}_sup`];
          }
          newLetter = letter[this.lang].toUpperCase();
        } else if (!this.functionalBtns.includes(target.dataset.code)) {
          newLetter = letter[this.lang];
        }

        textarea.value += newLetter;
        textarea.focus();
      }
    });

    CONTAINER.addEventListener('animationend', (event) => {
      if (event.animationName === 'key-down') {
        event.target.classList.remove('transition-key-down');
        if (event.target.dataset.code === 'CapsLock') {
          if (this.capsLockOn) {
            event.target.classList.add('caps_active');
          } else {
            event.target.classList.remove('caps_active');
          }
        } else if (event.target.dataset.code !== 'CapsLock') {
          if (this.pressedBtns.includes(event.target.dataset.code)) {
            event.target.classList.add('active');
          } else {
            event.target.classList.remove('active');
          }
        }
      }
    });
  }
}
