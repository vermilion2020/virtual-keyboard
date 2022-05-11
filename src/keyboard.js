export default class Keyboard {
  pressedBtns = [];

  capsLockOn = false;

  shiftOn = false;

  selectionEnd = 0;

  clipboard = '';

  functionalBtns = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'AltRight', 'ControlRight'];

  constructor(buttons, lang) {
    this.buttons = buttons;
    this.lang = lang;
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
    if (button.code.indexOf('Key') !== -1) {
      const sup = document.createElement('sup');
      sup.innerText = button[this.lang].toUpperCase();
      buttonDiv.appendChild(sup);
    }
    const buttonName = button[this.lang].length > 1
      ? button[this.lang] : button[this.lang];
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

  getLetter(code) {
    return this.buttons.flat().filter((lt) => lt.code === code)[0];
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
    if ((this.capsLockOn || this.shiftOn) && !this.functionalBtns.includes(code)) {
      return letter[this.lang].toUpperCase();
    }
    return letter[this.lang];
  }

  addLetter(newLetter) {
    if (newLetter === '') {
      return;
    }
    const textarea = document.querySelector('textarea');
    // start and end position of selection (will be the same if no selection)
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newText = textarea.value.substring(0, start) + newLetter + textarea.value.substring(end);
    textarea.value = newText;
    textarea.focus();
    // add cursor to its previous place or at the end
    textarea.selectionEnd = start + newLetter.length;
    this.selectionEnd = textarea.selectionEnd;
  }

  addLineBreak() {
    const textarea = document.querySelector('textarea');
    // start and end position of selection (will be the same if no selection)
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newText = `${textarea.value.substring(0, start)}
${textarea.value.substring(end)}`;
    textarea.value = newText;
    textarea.focus();
    // add cursor to its previous place or at the end
    textarea.selectionEnd = start + 1;
    this.selectionEnd = textarea.selectionEnd;
  }

  deleteLetter(key) {
    if (!key) {
      return;
    }
    const textarea = document.querySelector('textarea');
    // start and end position of selection (will be the same if no selection)
    let start = textarea.selectionStart;
    let end = textarea.selectionEnd;
    if (start === end && key === 'Backspace') {
      start = start > 0 ? start - 1 : start;
    } else if (start === end && key === 'Delete') {
      end = end < textarea.value.length ? end + 1 : end;
    }
    const newText = textarea.value.substring(0, start) + textarea.value.substring(end);
    textarea.value = newText;
    textarea.focus();
    // add cursor to its previous place or at the end
    textarea.selectionEnd = start;
    this.selectionEnd = textarea.selectionEnd;
  }

  selectAll() {
    const textarea = document.querySelector('textarea');
    // start and end position of selection (will be the same if no selection)
    textarea.focus();
    textarea.selectionStart = 0;
    textarea.selectionEnd = textarea.value.length;
    this.selectionEnd = textarea.selectionEnd;
  }

  copy() {
    const textarea = document.querySelector('textarea');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    this.clipboard = textarea.value.substring(start, end);
    navigator.clipboard.writeText(this.clipboard);
  }

  createKeyboard(defaultText = '') {
    const BODY = document.querySelector('body');
    BODY.innerHTML = '';
    const LABEL = document.createElement('div');
    LABEL.classList.add('info_label');
    LABEL.innerText = this.lang === 'en' ? 'The shortcut for changing language is Left Shift + Left Alt' : 'Комбинация для смены раскладки клавиатуры - Left Shift + Left Alt';
    const PR_LINK = document.createElement('div');
    PR_LINK.classList.add('info_label');
    PR_LINK.innerHTML = '<a href="https://github.com/vermilion2020/virtual-keyboard/pull/1" target="_blank">Pull request link</a>';
    const INPUT_CONTAINER = document.createElement('div');
    INPUT_CONTAINER.classList.add('text_container');
    const TEXT_INPUT = document.createElement('textarea');
    TEXT_INPUT.value = defaultText;
    INPUT_CONTAINER.appendChild(TEXT_INPUT);
    const CONTAINER = document.createElement('div');
    CONTAINER.classList.add('container');
    CONTAINER.setAttribute('id', 'keyboard_container');
    for (let i = 0; i < this.buttons.length; i += 1) {
      CONTAINER.appendChild(this.createRow(i));
    }
    BODY.appendChild(PR_LINK);
    BODY.appendChild(LABEL);
    BODY.appendChild(INPUT_CONTAINER);
    BODY.appendChild(CONTAINER);
    TEXT_INPUT.focus();
    TEXT_INPUT.selectionEnd = this.selectionEnd;

    CONTAINER.addEventListener('click', (event) => {
      let { target } = event;
      if (target.tagName === 'SUP' || target.classList[0] === 'key') {
        if (target.tagName === 'SUP') {
          target = event.path['1'];
        }

        if (target.dataset.code === 'CapsLock') {
          this.capsLockOn = !this.capsLockOn;
        }

        if (target.dataset.code === 'ShiftLeft') {
          this.shiftOn = !this.shiftOn;
        }

        if (target.dataset.code === 'AltLeft' && this.shiftOn) {
          this.lang = this.lang === 'en' ? 'ru' : 'en';
          localStorage.setItem('lang', this.lang);
          const savedText = document.querySelector('textarea').value;
          this.shiftOn = false;
          setTimeout(() => { this.createKeyboard(savedText); }, 700);
        }

        event.target.classList.add('transition-key-down');

        const letter = this.getLetter(target.dataset.code);
        let newLetter = '';
        if (this.capsLockOn && !this.functionalBtns.includes(target.dataset.code)) {
          newLetter = target.dataset.value.toUpperCase();
        }

        if ((this.shiftOn || this.pressedBtns.includes('ShiftRight') || this.pressedBtns.includes('ShiftLeft')) && !this.functionalBtns.includes(target.dataset.code)) {
          if (letter[`${this.lang}_sup`]) {
            newLetter = letter[`${this.lang}_sup`];
          } else {
            newLetter = letter[this.lang].toUpperCase();
          }
        } else if (this.pressedBtns.includes('ControlLeft') || this.pressedBtns.includes('ControlRight')) {
          if (target.dataset.code === 'KeyA') {
            this.selectAll();
          } else if (target.dataset.code === 'KeyC') {
            this.copy();
          } else if (target.dataset.code === 'KeyV') {
            this.addLetter(this.clipboard);
          }
        } else if (!this.functionalBtns.includes(target.dataset.code) && !this.capsLockOn) {
          newLetter = letter[this.lang];
        }
        if (target.dataset.code === 'Backspace' || target.dataset.code === 'Delete') {
          this.deleteLetter(target.dataset.code);
        }
        if (target.dataset.code === 'Tab') {
          newLetter = '    ';
        }
        if (target.dataset.code === 'Enter') {
          this.addLineBreak();
        }

        this.addLetter(newLetter);
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
        } else if (event.target.dataset.code === 'ShiftLeft') {
          if (this.pressedBtns.includes('ShiftLeft')) {
            this.shiftOn = true;
            event.target.classList.add('caps_active');
          }
          if (this.shiftOn) {
            event.target.classList.add('caps_active');
          } else {
            event.target.classList.remove('caps_active');
          }
        } else if (event.target.dataset.code !== 'CapsLock' && event.target.dataset.code !== 'ShiftLeft') {
          if (this.pressedBtns.includes(event.target.dataset.code)) {
            event.target.classList.add('active');
          } else {
            event.target.classList.remove('active');
          }
        }
        if (event.target.dataset.code !== 'ShiftLeft') {
          this.shiftOn = false;
          document.querySelector('[data-code=ShiftLeft]').classList.remove('caps_active');
        }
      }
    });
  }
}
