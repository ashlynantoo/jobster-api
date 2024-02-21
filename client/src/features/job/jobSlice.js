import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { geUserFromLocalStorage } from "../../utils/localStorage";

const initialState = {
  position: "",
  company: "",
  jobLocation: geUserFromLocalStorage()?.location || "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["pending", "interview", "declined"],
  status: "pending",
  isEditing: false,
  jobId: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setJobStateValues: (state, action) => {
      const { _id, position, company, jobLocation, jobType, status } =
        action.payload;
      state.isEditing = true;
      state.jobId = _id;
      state.position = position;
      state.company = company;
      state.jobLocation = jobLocation;
      state.jobType = jobType;
      state.status = status;
    },
    createEditDeleteJob: (state, action) => {
      const msg = action.payload;
      toast.success(msg);
    },
    handleJobStateValueChange: (state, action) => {
      const { name, value } = action.payload;
      state[name] = value;
    },
    clearJobStateValues: () => {
      return initialState;
    },
  },
});

export default jobSlice.reducer;
export const {
  createEditDeleteJob,
  setJobStateValues,
  handleJobStateValueChange,
  clearJobStateValues,
} = jobSlice.actions;
