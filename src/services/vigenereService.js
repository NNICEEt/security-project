import axios from "axios";
import { api } from "./apiConstants";

const vigenereService = () => {
  const encrypt = async(plainText,key) => {
      const res = await axios.post(api.vigenereCipher.encrypt,{plainText,key});
      const data = res.data;
      return data.result;
  };
  const decrypt = async(cipherText,key) =>{
      const res = await axios.post(api.vigenereCipher.decrypt,{cipherText,key});
      const data = res.data;
      return data.result;
  };
  return {encrypt,decrypt}
};

export default vigenereService