const validateForm = (values) => {
  let errors = {};

  // Name validation (at least 3 characters)
  if (!values.name || values.name.length < 3) {
    errors.name = "Name must be at least 3 characters long.";
  }

  // Email validation
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid.";
  }

  // Password validation (at least 6 characters)
  if (!values.password || values.password.length < 6) {
    errors.password = "Password must be at least 6 characters long.";
  }

  // Confirm Password validation (should match password)
  if (!values.confirmPassword || values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
};

export default validateForm;
