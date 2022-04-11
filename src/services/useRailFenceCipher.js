const useRailFenceCipher = () => {
  const encrypt = (text, key) => {
    const result = [...Array(key)].map((_) =>
      [...Array(text.length)].map((_) => "-")
    );
    let [rowPointer, directionPointer] = [1, "DOWN"];
    for (let c = 0; c < text.length; c++) {
      for (let r = 0; r < key; r++) {
        if (r + 1 === rowPointer) {
          result[r][c] = text[c];
        }
      }
      if (directionPointer === "UP") {
        rowPointer--;
        if (rowPointer === 0) {
          rowPointer = 2;
          directionPointer = "DOWN";
        }
      } else if (directionPointer === "DOWN") {
        rowPointer++;
        if (rowPointer === key + 1) {
          rowPointer = key - 1;
          directionPointer = "UP";
        }
      }
    }
    // result.forEach((row) => {
    //   console.log(row.join("|"));
    // });
    return result
      .map((row) => row.filter((col) => col !== "-").join(""))
      .join("");
  };

  const decrypt = (text, key) => {
    const modelArr = [...Array(key)].map((_) =>
      [...Array(text.length)].map((_) => "-")
    );
    let [rowPointer, directionPointer] = [1, "DOWN"];
    for (let c = 0; c < text.length; c++) {
      for (let r = 0; r < key; r++) {
        if (r + 1 === rowPointer) {
          modelArr[r][c] = "*";
        }
      }
      if (directionPointer === "UP") {
        rowPointer--;
        if (rowPointer < 1) {
          rowPointer = 2;
          directionPointer = "DOWN";
        }
      } else if (directionPointer === "DOWN") {
        rowPointer++;
        if (rowPointer > key) {
          rowPointer = key - 1;
          directionPointer = "UP";
        }
      }
    }
    const textArr = text.split("");
    const resultArr = modelArr.map((row) =>
      row.map((col) => (col === "*" ? textArr.shift() : col))
    );
    // resultArr.forEach((row) => {
    //   console.log(row.join("|"));
    // });
    let result = "";
    for (let c = 0; c < text.length; c++) {
      for (let r = 0; r < key; r++) {
        resultArr[r][c] !== "-" && (result += resultArr[r][c]);
      }
    }
    return result;
  };

  return { encrypt, decrypt };
};

export default useRailFenceCipher;
