import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import API_URL from "../../constants/constants";

const fetchCatalogItems = createAsyncThunk(
  "catalog/fetchCatalogItems",
  async () => {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error) {
      console.error("Ошибка при попытке получить данные", error);
    }
  }
);

export default fetchCatalogItems;
