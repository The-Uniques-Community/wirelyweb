import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk to fetch main categories
export const fetchMainCategories = createAsyncThunk(
  'categories/fetchMain',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('http://localhost:5000/api/categories/main');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch main categories');
    }
  }
);

// Async thunk to fetch subcategories for a main category
export const fetchSubCategories = createAsyncThunk(
  'categories/fetchSub',
  async (mainId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/categories/sub/${mainId}`);
      return { mainId, subCategories: response.data };
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch subcategories');
    }
  }
);

const categorySlice = createSlice({
  name: 'categories',
  initialState: {
    mainCategories: [],
    subCategories: {},
    selectedMainCategory: null,
    loading: false,
    error: null,
    modalOpen: false,
  },
  reducers: {
    selectMainCategory: (state, action) => {
      state.selectedMainCategory = action.payload;
      state.modalOpen = true;
    },
    closeModal: (state) => {
      state.modalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Main categories fetching cases
      .addCase(fetchMainCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMainCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.mainCategories = action.payload;
      })
      .addCase(fetchMainCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Subcategories fetching cases
      .addCase(fetchSubCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.subCategories[action.payload.mainId] = action.payload.subCategories;
      })
      .addCase(fetchSubCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { selectMainCategory, closeModal } = categorySlice.actions;

export default categorySlice.reducer;