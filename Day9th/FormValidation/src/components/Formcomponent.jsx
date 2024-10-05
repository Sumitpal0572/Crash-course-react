import React from "react";
// import useFormValidation from "./FormValidation";
import useFormValidation from "./Formalidation";
import validateForm from "./validateForm";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const FormComponent = () => {
  const { handleChange, handleSubmit, values, errors, isSubmitting } =
    useFormValidation(initialState, validateForm);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>

      <div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting || Object.keys(errors).length > 0}
      >
        Submit
      </button>
    </form>
  );
};

export default FormComponent;
