import { useFormik } from "formik";
import { useEffect } from "react";
import * as yup from "yup";
import './loginPage.css'

const LoginPage = ({ isLogged, setIsLogged }) => {
  const validations = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(6, "Password should be minimum 6 characters")
      .required(),
  });

  const { handleSubmit, handleChange, errors, values } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      loginControl() && localStorage.setItem("token", JSON.stringify(values));
    },
    validationSchema: validations,
  });

  const loginControl = () => {
    const email = "keypoint@gmail.com";
    const password = "123456";

    const result =
      email === values?.email && password === values?.password
        ? true
        : false;
    result && localStorage.setItem("token", JSON.stringify({ email: "keypoint@gmail.com", password: "123456" }));
   // console.log(result);
    setIsLogged(result);
  };
 // console.log(isLogged);

  useEffect(() => {
    loginControl();
  }, [isLogged]);

  return (
    <div className="login-body">
      <div className="login">
        <h1 className="text-center">Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input
              className="form-control"
              aria-describedby="emailHelp"
              onChange={handleChange}
              name="email"
              placeholder="email"
              required
            />
            <div className="message">
              {errors.email}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input
              className="form-control"
              aria-describedby="emailHelp"
              onChange={handleChange}
              name="password"
              placeholder="password"
              required
            />
            <div className="message">
              {errors.password}
            </div>
          </div>
          <button type="submit" className="btn btn-success w-100">Login</button>
        </form>
      </div>
    </div>

  );
};

export default LoginPage;
