import { createSlice } from "@reduxjs/toolkit";
import fetchCatalogItems from "../../api/services/GadgetsService";
import gadgetItem from "../../types/catalogItems";

export interface CatalogState {
  loading: boolean;
  catalogItems: gadgetItem[]
}


const initialState: CatalogState = {
  loading: false,
  catalogItems: [] 
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
    .addCase(fetchCatalogItems.pending, state => {
      state.loading = true;
    })
    .addCase(fetchCatalogItems.fulfilled, (state, action) => {
      state.loading = false;
      state.catalogItems = action.payload
    })
    .addCase(fetchCatalogItems.rejected, state => {
      state.loading = false;
    })
  }
});

export default catalogSlice.reducer;
