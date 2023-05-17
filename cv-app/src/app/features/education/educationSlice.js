import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEducations = createAsyncThunk(
  "education/fetchEducations",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/educations").then((data) =>
        data.json()
      );
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const educationSlice = createSlice({
  name: "education",
  initialState: {
    educationsData: { educations: [] },
    status: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducations.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchEducations.fulfilled, (state, action) => {
        state.status = "resolved";
        state.educationsData = action.payload;
      })
      .addCase(fetchEducations.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});

export default educationSlice.reducer;
