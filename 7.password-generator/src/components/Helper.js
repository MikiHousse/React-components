let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()<>,.?/[]{}-=_+|/0123456789';
let passwordLength = 0;

const getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const passwordCharacters = () => {
    let password = '';
    if (characters.length) {
        for (let i = 0; i < passwordLength; i++) {
            password += characters[getRandomInteger(0, characters.length - 1)];
        }
        characters = '';
        passwordLength = 0;
        return password;
    }
}

export const setPasswordLength = length => {
    passwordLength = length;
    return passwordLength;
}

export const generatePassword = (passwordProps, pwdLength) => {
    const { uppercase, lowercase, symbols, numbers } = passwordProps;
    setPasswordLength(pwdLength);
    setUpperCase(uppercase);
    setLowerCase(lowercase);
    setSymbols(symbols);
    setNumber(numbers);
    const password = passwordCharacters();
    return password;
}

const setUpperCase = isUpperCase => {
    if (isUpperCase) {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    return '';
}

const setLowerCase = isLowerCase => {
    if (isLowerCase) {
        characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    return '';
}

const setSymbols = isSymbol => {
    if (isSymbol) {
        characters += '!@#$%^&*()<>,.?/[]{}-=_+|/';
    }
    return '';
}

const setNumber = isNumeric => {
    if (isNumeric) {
        characters += '0123456789';
    }
    return '';
}

    // const [checkedSym, setCheckedSym] = useState(false)
    // const handleClickSym = () => setCheckedSym(!checkedSym);
    // const genSym = () => {
    //     const ran = () => {
    //         let result = '';
    //         const char = '!@#$%^&*()<>,.?/[]{}-=_+|/0123456789';
    //         const charactersLength = char.length;
    //         for (let i = 0; i < legnth; i++) {
    //             result += char.charAt(Math.floor(Math.random() * charactersLength));
    //         }
    //         return result;
    //     }

    //     setPassword(ran(legnth))
    // }
    // const c = () => {
    //     if (checked) {
    //         return genLow
    //     } else {
    //         gen
    //     }
    //     if (checkedUp) {
    //         return genUp
    //     } else {
    //         return gen
    //     }
    // }