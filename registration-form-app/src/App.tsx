import reactLogo from "./assets/react.svg";
import "./App.css";
import React, { useState } from "react";

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

interface FormErrors {
  firstName: string;
  lastName: string;
  email: string;
}

const RegistrationForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const errors: FormErrors = { firstName: "", lastName: "", email: "" };

    if (!formValues.firstName.trim()) {
      errors.firstName = "Please enter first name";
      isValid = false;
    }

    if (!formValues.lastName.trim()) {
      errors.lastName = "Please enter last name";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email.trim()) {
      errors.email = "Please enter email address";
      isValid = false;
    } else if (!emailRegex.test(formValues.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccessMessage("Success! Thank you for registering");
      setFormErrors({ firstName: "", lastName: "", email: "" });
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <div className="container">
      <div className="card mt-5 p-3 shadow-lg">
        <h3 className="text-center mb-4">Register</h3>

        {successMessage && (
          <div className="alert alert-success text-center" role="alert">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* First Name */}
          <div className="form-group">
            <input
              type="text"
              className={`form-control ${
                formErrors.firstName ? "is-invalid" : ""
              }`}
              placeholder="First Name"
              name="firstName"
              value={formValues.firstName}
              onChange={handleInputChange}
            />
            {formErrors.firstName && (
              <div className="invalid-feedback">{formErrors.firstName}</div>
            )}
          </div>

          {/* Last Name */}
          <div className="form-group mt-3">
            <input
              type="text"
              className={`form-control ${
                formErrors.lastName ? "is-invalid" : ""
              }`}
              placeholder="Last Name"
              name="lastName"
              value={formValues.lastName}
              onChange={handleInputChange}
            />
            {formErrors.lastName && (
              <div className="invalid-feedback">{formErrors.lastName}</div>
            )}
          </div>

          {/* Email */}
          <div className="form-group mt-3">
            <input
              type="email"
              className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
              placeholder="Email"
              name="email"
              value={formValues.email}
              onChange={handleInputChange}
            />
            {formErrors.email && (
              <div className="invalid-feedback">{formErrors.email}</div>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn btn-success mt-4 w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
