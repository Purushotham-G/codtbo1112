import axios from "axios";
import { url5 } from "./Constant";

export const getFourthApi = async () => {
  try {
    const response = await axios.get(url5);
    console.log("hevdwhj",response)
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
