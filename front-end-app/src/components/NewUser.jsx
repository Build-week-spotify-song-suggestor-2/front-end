import React, { useState } from "react";
import * as yup from "yup";

export default function NewUser() {
  // variable holding the default empty data
  const defaultUserData = { username: "", password: "" };

  // declared state to hold data
  const [user, setUser] = useState(defaultUserData);
  const [errors, setErrors] = useState({});
  const [disableSubmit, setDisableSubmit] = useState(false);

  // Function to handle the text field change to set to the user state
  const handleChange = (e) => {
    const userData = { ...user, [e.target.name]: e.target.value };

    setUser(userData);
  };

  // Form schema to be used for form validation
  const formSchema = yup.object().shape({
    password: yup.string().required("Please enter a password."),
    username: yup.string().required("Please enter a username."),
  });

  // Form to catch any errors if the form did not validated
  const formErrors = (e) => {
    let allErrors = { ...errors };
    for (const userData in user) {
      yup
        .reach(formSchema, userData)
        .validate(user[userData])
        .then((valid) => {
          allErrors[`${userData}`] = "";
        })
        .catch((err) => {
          allErrors[`${userData}`] = err.errors[0];
        });
    }

    setErrors(allErrors);
  };

  // Function to handle the form submission
  const handleSubmission = (e) => {
    e.preventDefault();

    formErrors();

    // Check if the form passes the validation
    formSchema.isValid(user).then((valid) => {
      console.log("is my form valid?", valid);

      if (valid) {
        // Ensure to eliminate all errors if form is valid
        setErrors({});
        // Submit the form
        console.log("Account created", user);
        // Clear the form
        setUser(defaultUserData);
      } 
    });
  };

  return (
    <div className="form-container">
      <h3>Create Account</h3>

      <form onSubmit={handleSubmission}>
        <label
          htmlFor="username"
          className={`${
            errors.username !== "" && errors.username !== undefined
              ? "invalid"
              : "valid"
          }`}
        >
          Username
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </label>

        <label
          htmlFor="password"
          className={`${
            errors.password !== "" && errors.password !== undefined
              ? "invalid"
              : "valid"
          }`}
        >
          Password
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </label>

        <input type="submit" value="Log in" disabled={disableSubmit} />
      </form>

      {Object.keys(errors).length > 0 && (
        <div className="errors">
          {Object.keys(errors).map((key) => (
            <p value={key} key={key}>
              {errors[key]}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}


