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
    let result = '';
    let letter = [];
    for (i = 0; i < expr.length; i += 10) {
        letter.push(expr.slice(i, i + 10))
    }
    letter.map((elem, index) => {
        elem === '**********' ? letter.splice(index, 1, ' ') : null
    })
    const morseMap = letter.map(elem => {
        return elem.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-')
    })
    const preResult = morseMap.map(elem => result + MORSE_TABLE[elem]);
    for (i = 0; i < preResult.length; i++) {
        if (preResult[i] === 'undefined') {
            preResult[i] = ' ';
        }
    }
    return preResult.join('')
}

module.exports = {
    decode
}