export const geUserFromLocalStorage = () => {
  const user = localStorage.getItem("jobster-user");
  return user ? JSON.parse(user) : null;
};

export const addUserToLocalStorage = (user) => {
  localStorage.setItem("jobster-user", JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("jobster-user");
};
