import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialStateFilters = {
  search: "",
  searchStatus: "all",
  searchType: "all",
  sort: "latest",
  sortOptions: ["latest", "oldest", "a-z", "z-a"],
};

const initialState = {
  page: 1,
  ...initialStateFilters,
};

const allJobsSlice = createSlice({
  name: "allJobs",
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
    },
    handleAllJobsStateValueChange: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    clearFilters: () => {
      return initialState;
    },
  },
});

export default allJobsSlice.reducer;
export const { changePage, handleAllJobsStateValueChange, clearFilters } =
  allJobsSlice.actions;
