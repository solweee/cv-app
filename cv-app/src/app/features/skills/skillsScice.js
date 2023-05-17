import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getSkills = createAsyncThunk(
  "skills/getSkills",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("/api/skills").then((data) => data.json());
      return response;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addSkill = createAsyncThunk(
  "skills/addSkill",
  async (newSkill) => {
    const response = await fetch("/api/skills", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSkill),
    });

    const createdSkill = await response.json();
    return createdSkill;
  }
);

const skillsSlice = createSlice({
  name: "skills",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSkills.fulfilled, (state, action) => {
        state = action.payload;
      })
      .addCase(addSkill.fulfilled, (state, action) => {
        state.push(action.payload);
      });
  },
});

export default skillsSlice.reducer;
