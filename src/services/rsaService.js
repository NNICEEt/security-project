import axios from "axios";
import { api } from "./apiConstants";

const rsaService = () => {
  const generateKey = async (keySize) => {
    const res = await axios.post(api.rsa.generateKey, { keySize });
    const data = res.data;
    return data.result;
  };
  const encrypt = async (plainText, key) => {
    try {
      const res = await axios.post(api.rsa.encrypt, { plainText, key });
      const data = res.data;
      return { data: data.result, isSuccess: true };
    } catch ({ response: res }) {
      const status = res.status;
      return {
        data: `[${status}] : Invalid Public/Private key.`,
        isSuccess: false,
      };
    }
  };
  const decrypt = async (cipherText, key) => {
    try {
      const res = await axios.post(api.rsa.decrypt, { cipherText, key });
      const data = res.data;
      return { data: data.result, isSuccess: true };
    } catch ({ response: res }) {
      const status = res.status;
      return {
        data: `[${status}] : Invalid Public/Private key.`,
        isSuccess: false,
      };
    }
  };
  return { generateKey, encrypt, decrypt };
};

export default rsaService;
