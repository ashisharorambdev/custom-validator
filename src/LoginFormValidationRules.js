/** @format */

import {
  validateEmail,
  validatePassword,
  validatePhone,
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

  if (rule.required === true) {
    if (value.length === 0) errors = "This is a is required field";
  } else {
    switch (rule.type) {
      case "email": {
        if (!validateEmail(value) && value.length !== 0) {
          errors = "Email address is invalid";
        }
        break;
      }
      case "password": {
        if (!validatePassword(value) && value.length !== 0) {
          errors = "Password must be 8 or more characters";
        }
        break;
      }
      case "phoneNumber": {
        if (!validatePhone(value) && value.length !== 0) {
          errors = "Phone number is invalid";
        }
        break;
      }
      default: {
        errors = "";
      }
    }
  }
  return errors;
}
