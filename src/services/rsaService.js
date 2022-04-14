import axios from "axios";
import { api } from "./apiConstants";

const rsaService = () => {
  const generateKey = async (keySize) => {
    const res = await axios.post(api.rsa.generateKey, { keySize });
    const data = res.data;
    return data.result;
  };
  const encrypt = async(plaintext,key) => {
    const res = await axios.post(api.rsa.encrypt,{plaintext,key});
    const data = res.data;
    return data.result;
};
const decrypt = async(cipherText,key) =>{
    const res = await axios.post(api.rsa.decrypt,{cipherText,key});
    const data = res.data;
    return data.result;
};
  return { generateKey,encrypt,decrypt };
};

export default rsaService;
