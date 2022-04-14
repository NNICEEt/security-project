import axios from "axios";
import { api } from "./apiConstants";

const ceasarService = () => {
  const encrypt = async(plaintext,key) => {
      const res = await axios.post(api.caesarCipher.encrypt,{plaintext,key});
      const data = res.data;
      return data.result;
  };
  const decrypt = async(cipherText,key) =>{
      const res = await axios.post(api.caesarCipher.decrypt,{cipherText,key});
      const data = res.data;
      return data.result;
  };
  return {encrypt,decrypt}
};

export default ceasarService