import { Form, redirect } from "react-router-dom";
import Wrapper from "../../assets/wrappers/DashboardForm";
import { FormInput, SubmitBtn } from "../../components";
import { geUserFromLocalStorage } from "../../utils/localStorage";
import { customFetch } from "../../utils/axios";
import { updateUser, logoutUser } from "../../features/user/userSlice";
import { toast } from "react-toastify";
import { clearJobStateValues } from "../../features/job/jobSlice";

const url = "/auth/updateUser";

export const action = (store) => {
  return async ({ request }) => {
    const formData = await request.formData();
    const updateParams = Object.fromEntries(formData);
    try {
      const { data } = await customFetch.patch(url, updateParams);
      store.dispatch(updateUser(data));
      return null;
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        toast.error("Unauthorized User!");
        store.dispatch(logoutUser());
        store.dispatch(clearJobStateValues());
        return redirect("/landing");
      }
      const errorMsg = error?.response?.data?.msg || "An error occurred...";
      toast.error(errorMsg);
      return null;
    }
  };
};

const Profile = () => {
  const user = geUserFromLocalStorage();

  return (
    <Wrapper>
      <Form method="patch" className="form">
        <h3>profile</h3>
        <div className="form-center">
          <FormInput
            label="name"
            type="text"
            name="name"
            defaultValue={user.name}
          />
          <FormInput
            label="last name"
            type="text"
            name="lastName"
            defaultValue={user.lastName}
          />
          <FormInput
            label="email"
            type="email"
            name="email"
            defaultValue={user.email}
          />
          <FormInput
            label="location"
            type="text"
            name="location"
            defaultValue={user.location}
          />
          <SubmitBtn text="save changes" />
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
