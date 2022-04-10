function encrypt(text, key) {
    let textCode = []
    let keyCode = []
    let lowerCasePos = getPos(text)
    text = text.toUpperCase();
    key = key.toUpperCase();
    let cipher = ""

    for (let i = 0; i < text.length; i++) {
        textCode.push(text.charCodeAt(i))
    }
    for (let i = 0; i < key.length; i++) {
        keyCode.push(key.charCodeAt(i))
    }
    keyCode = textCode.map((_, index) => keyCode[index % key.length])
    textCode.forEach((value, index) => {
        result = ((value + keyCode[index]) % 26) + 65 // mod ให้ค่าไม่เกิน 26
        if (lowerCasePos.includes(index))  result = result + 32
        result = String.fromCharCode(result)
        cipher += result
    })
    return cipher
}
function decrypt(text, key) {
    let textCode = []
    let keyCode = []
    let plaintext = ""
    let lowerCasePos = getPos(text)
    text = text.toUpperCase(); key = key.toUpperCase();
    for (let x = 0; x < text.length; x++) {
        textCode.push(text.charCodeAt(x))
    }
    for (let x = 0; x < key.length; x++) {
        keyCode.push(key.charCodeAt(x))
    }
    keyCode = textCode.map((_, index) => keyCode[index % key.length])
 
    textCode.forEach((value, index) =>{
       result = ((value - keyCode[index]+26)%26)+65;
       if (lowerCasePos.includes(index))  result = result + 32
       result = String.fromCharCode(result)
       plaintext += result
    })
    return plaintext;
}
function getPos(text) {
    let lowerCasePos = []
    for (let i = 0; i < text.length; i++) {
        const code = text.charCodeAt(i);
        if (code >= 97 && code <= 122) {
            lowerCasePos.push(i);
        }

    }
    return lowerCasePos;
}
console.log(encrypt("Engineering", "PIM"));
console.log(decrypt("Tvsxvqtzuco", "PIM"));

