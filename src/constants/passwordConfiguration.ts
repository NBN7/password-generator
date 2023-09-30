const SYMBOLS = "! @ # $ % ^ & * ( ) _ + - = { } [ ] | : ; < > , . ?";
const LETTERS = "a b c d e f g h i j k l m n ñ o p q r s t u v w x y z";

const symbols = SYMBOLS.split(" ");
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const uppercaseLetters = LETTERS.toUpperCase().split(" ");
const lowercaseLetters = LETTERS.split(" ");

type PasswordConfiguration = {
  [key: string]: string[] | number[];
};

export const PASSWORD_CONFIGURATION: PasswordConfiguration = {
  SYMBOLS: symbols,
  NUMBERS: numbers,
  UPPERCASE_LETTERS: uppercaseLetters,
  LOWERCASE_LETTERS: lowercaseLetters,
};
