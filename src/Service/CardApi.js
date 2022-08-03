import axios from "axios";
import { url2 } from "./Constant";

export const getSecondApi = async () => {
  try {
    const response = await axios.get(url2);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
