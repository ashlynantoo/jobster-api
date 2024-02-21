import { Form, Link, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/LoginRegister";
import { Logo, FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils/axios";
import { registerAndLoginUser } from "../features/user/userSlice";
import { geUserFromLocalStorage } from "../utils/localStorage";

const url = "/auth/register";

export const loader = () => {
  const user = geUserFromLocalStorage();
  if (user) {
    return redirect("/");
  }
  return null;
};

export const action = (store) => {
  return async ({ request }) => {
    const formData = await request.formData();
    const registerParams = Object.fromEntries(formData);
    try {
      const { data } = await customFetch.post(url, registerParams);
      store.dispatch(registerAndLoginUser(data));
      return redirect("/");
    } catch (error) {
      console.log(error);
      const errorMsg =
        error?.response?.data?.msg || "Please verify your credentials";
      toast.error(errorMsg);
      return null;
    }
  };
};

const Register = () => {
  return (
    <Wrapper className="full-page">
      <main>
        <Form method="post" className="form">
          <Logo />
          <h3>Register</h3>
          <FormInput label="name" type="text" name="name" />
          <FormInput label="email" type="email" name="email" />
          <FormInput label="password" type="password" name="password" />
          <SubmitBtn text="register" />
          <p>
            Already a member? <Link to="/login">Login</Link>
          </p>
        </Form>
      </main>
    </Wrapper>
  );
};

export default Register;
