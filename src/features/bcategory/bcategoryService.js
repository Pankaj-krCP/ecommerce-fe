import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getCategory = async () => {
  const response = await axios.get(`${base_url}blogcategory`);
  if (response.data) {
    return response.data;
  }
};

export const bcategoryService = {
  getCategory,
};
