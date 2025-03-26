import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit"
import API_URL from "../../constants/constants";

const fetchCatalogItems = createAsyncThunk('catalog/fetchCatalogItems', async () => {
    const response = await axios.get(`${API_URL}`)
    return response.data
})

export default fetchCatalogItems

