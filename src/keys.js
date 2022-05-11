const BUTTONS = [
  [{
    ru: 'ё',
    en: '`',
    ru_sup: 'Ё',
    en_sup: '~',
    code: 'Backquote',
  },
  {
    ru: '1',
    en: '1',
    ru_sup: '!',
    en_sup: '!',
    code: 'Digit1',
  },
  {
    ru: '2',
    en: '2',
    ru_sup: '"',
    en_sup: '@',
    code: 'Digit2',
  },
  {
    ru: '3',
    en: '3',
    ru_sup: '№',
    en_sup: '#',
    code: 'Digit3',
  },
  {
    ru: '4',
    en: '4',
    ru_sup: ';',
    en_sup: '$',
    code: 'Digit4',
  },
  {
    ru: '5',
    en: '5',
    ru_sup: '%',
    en_sup: '%',
    code: 'Digit5',
  },
  {
    ru: '6',
    en: '6',
    ru_sup: ':',
    en_sup: '^',
    code: 'Digit6',
  },
  {
    ru: '7',
    en: '7',
    ru_sup: '?',
    en_sup: '&',
    code: 'Digit7',
  },
  {
    ru: '8',
    en: '8',
    ru_sup: '*',
    en_sup: '*',
    code: 'Digit8',
  },
  {
    ru: '9',
    en: '9',
    ru_sup: '(',
    en_sup: '(',
    code: 'Digit9',
  },
  {
    ru: '0',
    en: '0',
    ru_sup: ')',
    en_sup: ')',
    code: 'Digit0',
  },
  {
    ru: '-',
    en: '-',
    ru_sup: '_',
    en_sup: '_',
    code: 'Minus',
  },
  {
    ru: '=',
    en: '=',
    ru_sup: '+',
    en_sup: '+',
    code: 'Equal',
  },
  {
    ru: 'Backspace',
    en: 'Backspace',
    ru_sup: '',
    en_sup: '',
    class: 'large_btn',
    code: 'Backspace',
  },
  ],
  [
    {
      ru: 'Tab',
      en: 'Tab',
      class: 'large_btn',
      code: 'Tab',
    },
    {
      ru: 'й',
      en: 'q',
      code: 'KeyQ',
    },
    {
      ru: 'ц',
      en: 'w',
      code: 'KeyW',
    },
    {
      ru: 'у',
      en: 'e',
      code: 'KeyE',
    },
    {
      ru: 'к',
      en: 'r',
      code: 'KeyR',
    },
    {
      ru: 'е',
      en: 't',
      code: 'KeyT',
    },
    {
      ru: 'н',
      en: 'р',
      code: 'KeyY',
    },
    {
      ru: 'г',
      en: 'u',
      code: 'KeyU',
    },
    {
      ru: 'ш',
      en: 'i',
      code: 'KeyI',
    },
    {
      ru: 'щ',
      en: 'o',
      code: 'KeyO',
    },
    {
      ru: 'з',
      en: 'p',
      code: 'KeyP',
    },
    {
      ru: 'х',
      en: '[',
      ru_sup: 'Х',
      en_sup: '{',
      code: 'BracketLeft',
    },
    {
      ru: 'ъ',
      en: ']',
      ru_sup: 'Ъ',
      en_sup: '}',
      code: 'BracketRight',
    },
    {
      ru: '\\',
      en: '\\',
      ru_sup: '/',
      en_sup: '|',
      code: 'Backslash',
    },
    {
      ru: 'Del',
      en: 'Del',
      class: 'large_btn',
      code: 'Delete',
    },
  ],
  [{
    ru: 'Caps Lock',
    en: 'Caps Lock',
    class: 'large_btn',
    code: 'CapsLock',
  },
  {
    ru: 'ф',
    en: 'a',
    code: 'KeyA',
  },
  {
    ru: 'ы',
    en: 's',
    code: 'KeyS',
  },
  {
    ru: 'в',
    en: 'd',
    code: 'KeyD',
  },
  {
    ru: 'а',
    en: 'f',
    code: 'KeyF',
  },
  {
    ru: 'п',
    en: 'g',
    code: 'KeyG',
  },
  {
    ru: 'р',
    en: 'h',
    code: 'KeyH',
  },
  {
    ru: 'о',
    en: 'j',
    code: 'KeyJ',
  },
  {
    ru: 'л',
    en: 'k',
    code: 'KeyK',
  },
  {
    ru: 'д',
    en: 'l',
    code: 'KeyL',
  },
  {
    ru: 'ж',
    en: ';',
    ru_sup: 'Ж',
    en_sup: ':',
    code: 'Semicolon',
  },
  {
    ru: 'э',
    en: '\'',
    ru_sup: 'Э',
    en_sup: '"',
    code: 'Quote',
  },
  {
    ru: 'Enter',
    en: 'Enter',
    code: 'Enter',
    class: 'large_btn',
  },
  ],
  [{
    ru: 'Shift',
    en: 'Shift',
    code: 'ShiftLeft',
  },
  {
    ru: 'я',
    en: 'z',
    code: 'KeyZ',
  },
  {
    ru: 'ч',
    en: 'x',
    code: 'KeyX',
  },
  {
    ru: 'с',
    en: 'c',
    code: 'KeyC',
  },
  {
    ru: 'м',
    en: 'v',
    code: 'KeyV',
  },
  {
    ru: 'и',
    en: 'b',
    code: 'KeyB',
  },
  {
    ru: 'т',
    en: 'n',
    code: 'KeyN',
  },
  {
    ru: 'ь',
    en: 'm',
    code: 'KeyM',
  },
  {
    ru: 'б',
    en: ',',
    ru_sup: 'Б',
    en_sup: '<',
    code: 'Comma',
  },
  {
    ru: 'ю',
    en: '.',
    ru_sup: 'Ю',
    en_sup: '>',
    code: 'Period',
  },
  {
    ru: '.',
    en: '/',
    ru_sup: ',',
    en_sup: '?',
    code: 'Slash',
  },
  {
    ru: '↑',
    en: '↑',
    code: 'ArrowUp',
  },
  {
    ru: 'Shift',
    en: 'Shift',
    code: 'ShiftRight',
    class: 'shift_right_btn',
  },
  ],
  [
    {
      ru: 'Ctrl',
      en: 'Ctrl',
      code: 'ControlLeft',
      class: 'large_btn',
    },
    {
      ru: 'Win',
      en: 'Win',
      class: 'medium_btn',
      code: 'MetaLeft',
    },
    {
      ru: 'Alt',
      en: 'Alt',
      class: 'medium_btn',
      code: 'AltLeft',
    },
    {
      ru: ' ',
      en: ' ',
      class: 'space_btn',
      code: 'Space',
    },
    {
      ru: 'Alt',
      en: 'Alt',
      class: 'medium_btn',
      code: 'AltRight',
    },
    {
      ru: '←',
      en: '←',
      code: 'ArrowLeft',
    },
    {
      ru: '↓',
      en: '↓',
      code: 'ArrowDown',
    },
    {
      ru: '→',
      en: '→',
      code: 'ArrowRight',
    },
    {
      ru: 'Ctrl',
      en: 'Ctrl',
      code: 'ControlRight',
    },
  ],
];

export default BUTTONS;
