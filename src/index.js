const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    expr.normalize().toLowerCase();
    let itemArr = [];
    let codeArr = [];
    for (let i = 0; i < expr.length / 10; i++) {
        itemArr[i] = expr.substr(i * 10, 10);

        // '**********'  ===>  ['**']  ====> ' '
        // '0001100110'  ===> ['00' '01' '10' '01' '10'] ===> '--..'

        if (itemArr[i] === '**********')
            codeArr = ['**'];
        else {
            for (let j = 0; j < itemArr[i].length / 2; j++) {
                codeArr[j] = itemArr[i].substr(j * 2, 2);
            }
        }

        itemArr[i] = codeArr.map(code => {
            switch (code) {
                case '10':
                    return '.';
                    break;
                case '11':
                    return '-';
                    break;
                case '**':
                    return ' ';
                    break;
                default:
                    return '';
                    break;

            }
        }).join('')
    };
    let decodeArr = itemArr.map(key => key === ' ' ? ' ' : MORSE_TABLE[key]);
    return decodeArr.join('');
}

module.exports = {
    decode
}