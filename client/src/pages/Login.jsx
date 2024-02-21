import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import Wrapper from "../assets/wrappers/LoginRegister";
import { Logo, FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils/axios";
import { registerAndLoginUser } from "../features/user/userSlice";
import { geUserFromLocalStorage } from "../utils/localStorage";

const url = "/auth/login";

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
    const loginParams = Object.fromEntries(formData);
    try {
      const { data } = await customFetch.post(url, loginParams);
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

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDemoApp = async () => {
    try {
      const { data } = await customFetch.post(url, {
        email: "testUser@test.com",
        password: "secret",
      });
      dispatch(registerAndLoginUser(data));
      navigate("/");
    } catch (error) {
      console.log(error);
      const errorMsg =
        error?.response?.data?.msg ||
        "An error occurred. Please try again later";
      toast.error(errorMsg);
    }
  };

  return (
    <Wrapper className="full-page">
      <main>
        <Form method="post" className="form">
          <Logo />
          <h3>Login</h3>
          <FormInput label="email" type="email" name="email" />
          <FormInput label="password" type="password" name="password" />
          <SubmitBtn text="login" />
          <button
            type="button"
            className="btn btn-block btn-hipster"
            onClick={handleDemoApp}
          >
            demo app
          </button>
          <p>
            Not a member yet? <Link to="/register">Register</Link>
          </p>
        </Form>
      </main>
    </Wrapper>
  );
};

export default Login;
