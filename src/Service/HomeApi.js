import axios from "axios";
import { url1 } from "./Constant";

export const getFirstApi = async () => {
  try {
    const response = await axios.get(url1);
    return response.data;
  } catch (err){
   console.log(err)
  }
};
