export const BASE_URL = process.env.REACT_APP_SERVER_URL;

const MODULE_URL = {
  caesarCipher: "/caesar",
  vigenereCipher: "/vigenere",
  railFenceCipher: "/railfence",
  rsa: "/rsa",
};

export const api = {
  caesarCipher: {
    encrypt: `${BASE_URL}${MODULE_URL.caesarCipher}/encrypt`,
    decrypt: `${BASE_URL}${MODULE_URL.caesarCipher}/decrypt`,
  },
  vigenereCipher: {
    encrypt: `${BASE_URL}${MODULE_URL.vigenereCipher}/encrypt`,
    decrypt: `${BASE_URL}${MODULE_URL.vigenereCipher}/decrypt`,
  },
  railFenceCipher: {
    encrypt: `${BASE_URL}${MODULE_URL.railFenceCipher}/encrypt`,
    decrypt: `${BASE_URL}${MODULE_URL.railFenceCipher}/decrypt`,
  },
  rsa: {
    generateKey: `${BASE_URL}${MODULE_URL.rsa}/generate-key`,
    encrypt: `${BASE_URL}${MODULE_URL.rsa}/encrypt`,
    decrypt: `${BASE_URL}${MODULE_URL.rsa}/decrypt`,
  },
};
