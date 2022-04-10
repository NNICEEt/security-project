const useViginereCipher = () => {
  const encrypt = (text, key) => {
    const textCode = [];
    for (let i = 0; i < text.length; i++) {
      textCode.push(text.toUpperCase().charCodeAt(i));
    }

    const keyCode = [];
    for (let i = 0; i < key.length; i++) {
      keyCode.push(key.toUpperCase().charCodeAt(i));
    }
    keyCode.push(textCode.map((_, index) => keyCode[index % key.length]));

    let cipher = "";
    const lowerCasePos = getPos(text);
    textCode.forEach((value, index) => {
      let result = ((value + keyCode[index]) % 26) + 65; // mod ให้ค่าไม่เกิน 26
      if (lowerCasePos.includes(index)) result = result + 32;
      result = String.fromCharCode(result);
      cipher += result;
    });
    return cipher;
  };

  const decrypt = (text, key) => {
    const textCode = [];
    for (let x = 0; x < text.length; x++) {
      textCode.push(text.toUpperCase().charCodeAt(x));
    }

    const keyCode = [];
    for (let x = 0; x < key.length; x++) {
      keyCode.push(key.toUpperCase().charCodeAt(x));
    }
    keyCode.push(textCode.map((_, index) => keyCode[index % key.length]));

    let plaintext = "";
    const lowerCasePos = getPos(text);
    textCode.forEach((value, index) => {
      let result = ((value - keyCode[index] + 26) % 26) + 65;
      if (lowerCasePos.includes(index)) result = result + 32;
      result = String.fromCharCode(result);
      plaintext += result;
    });
    return plaintext;
  };

  const getPos = (text) => {
    const lowerCasePos = [];
    for (let i = 0; i < text.length; i++) {
      const code = text.charCodeAt(i);
      if (code >= 97 && code <= 122) {
        lowerCasePos.push(i);
      }
    }
    return lowerCasePos;
  };

  return { encrypt, decrypt };
};

export default useViginereCipher;
