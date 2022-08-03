import axios from "axios";
import { url3 } from "./Constant";

export const getThirdApi = async () => {
  try {
    const resp = await axios.get(url3);
    return resp.data;
  } catch (error) {
    console.log(error);
  }
};
