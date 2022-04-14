import axios from "axios";
import { api } from "./apiConstants";

const rsaService = () => {
  const generateKey = async (keySize) => {
    const res = await axios.post(api.rsa.generateKey, { keySize });
    const data = res.data;
    return data.result;
  };
  return { generateKey };
};

export default rsaService;
