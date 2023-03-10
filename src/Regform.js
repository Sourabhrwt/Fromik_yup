import React from "react";
import { useFormik } from "formik";
import { signUpSchema } from "./schemas";

const initialValues = {
  fullname: "",
  email: "",
  password: "",
  confirm_password: "",
};

const Regform = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });
  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="form-body">
        <div className="block">
          <label className="form__label" htmlFor="firstName">
            FullName{" "}
          </label>
          <input
            className="form__input"
            type="text"
            name="fullname"
            autoComplete="off"
            id="fullname"
            placeholder="Full Name"
            value={values.fullname}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.fullname && touched.fullname ? (
            <p className="form-error">{errors.fullname}</p>
          ) : null}
        </div>
        <div className="block">
          <label className="form__label" htmlFor="email">
            Email{" "}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            className="form__input"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </div>
        <div className="block">
          <label className="form__label" htmlFor="password">
            Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <p className="form-error">{errors.password}</p>
          ) : null}
        </div>
        <div className="block">
          <label className="form__label" htmlFor="confirmPassword">
            Confirm Password{" "}
          </label>
          <input
            className="form__input"
            type="password"
            name="confirm_password"
            id="confirmPassword"
            autoComplete="off"
            placeholder="Confirm Password"
            value={values.confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirm_password && touched.confirm_password ? (
            <p className="form-error">{errors.confirm_password}</p>
          ) : null}
        </div>
        <div className="footer">
          <button className="button" type="submit">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Regform;
