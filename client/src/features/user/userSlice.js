import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  geUserFromLocalStorage,
  addUserToLocalStorage,
  removeUserFromLocalStorage,
} from "../../utils/localStorage";

const initialState = {
  user: geUserFromLocalStorage(),
  isSidebarOpen: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerAndLoginUser: (state, action) => {
      const user = action.payload.user;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success(`Welcome ${user.name}`);
    },
    updateUser: (state, action) => {
      const user = action.payload.user;
      state.user = user;
      addUserToLocalStorage(user);
      toast.success("User updated!");
    },
    logoutUser: (state) => {
      state.user = null;
      state.isSidebarOpen = false;
      removeUserFromLocalStorage();
      toast.success("Logged out successfully");
    },
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export default userSlice.reducer;
export const { registerAndLoginUser, updateUser, logoutUser, toggleSidebar } =
  userSlice.actions;
