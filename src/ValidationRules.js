/** @format */

import {
  validateEmail,
  validateName,
  validateNoSpace,
  validatePassword,
  validatePhone,
  validatePostal,
} from "./utils/validation";

// export default function validate(values) {
//   let errors = {};
//   if (!values.email) {
//     errors.email = "Email address is required";
//   } else if (!/\S+@\S+\.\S+/.test(values.email)) {
//     errors.email = "Email address is invalid";
//   }
//   if (!values.password) {
//     errors.password = "Password is required";
//   } else if (values.password.length < 8) {
//     errors.password = "Password must be 8 or more characters";
//   }
//   return errors;
// }

export function validateValue(value, name, rule) {
  let errors = "";
  let message = rule.errorMessage;

  if (rule.required === true) {
    if (value.length === 0) {
      errors = "This is a is required field";
    }
  }

  switch (rule.type) {
    case "email": {
      console.log(rule);
      if (!validateEmail(value) && value.length !== 0) {
        errors = message !== undefined ? message : "Email address is invalid";
      }
      break;
    }
    case "password": {
      if (!validatePassword(value) && value.length !== 0) {
        errors =
          message !== undefined
            ? message
            : "Password must be 8 or more characters";
      }
      break;
    }
    case "phoneNumber": {
      if (!validatePhone(value) && value.length !== 0) {
        errors = message !== undefined ? message : "Phone number is invalid";
      }
      break;
    }
    case "name": {
      if (!validateName(value) && value.length !== 0) {
        errors = message !== undefined ? message : "Name is invalid";
      }
      break;
    }
    case "pinCode": {
      if (!validatePostal(value) && value.length !== 0) {
        errors = message !== undefined ? message : "Postal code is invalid";
      }
      break;
    }

    default: {
      errors = "";
    }
  }

  if (rule.regex) {
    if (!rule.regex.test(value))
      errors = message !== undefined ? message : `Invalid ${name}`;
    else {
      errors = "";
    }
  }

  if (rule.max) {
    if (value.length >= rule.max) errors = `Max ${rule.max} chars allowed`;
    else {
      errors = "";
    }
  }

  if (rule.min) {
    if (value.length <= rule.min) errors = `min ${rule.min} chars allowed`;
    else {
      errors = "";
    }
  }

  if (rule.noSpace) {
    if (!validateNoSpace(value) && value.length !== 0) {
      errors = "No spaces allowed";
    } else {
      errors = "";
    }
  }
  return errors;
}
