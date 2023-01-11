/** @format */

import { REGEX } from "../constants/regex";

export const validateEmail = (email) => {
  return REGEX.EMAIL.test(email);
};

export const validatePhone = (phone) => {
  return REGEX.CONTACT.test(phone);
};

export const validateMessage = (message) => {
  return message.length > 1;
};

export const validatePassword = (password) => {
  return REGEX.PASSWORD.test(password);
};

export const validateConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword && confirmPassword.length > 0;
};

export const validateName = (name) => {
  return REGEX.NAME.test(name);
};

export const validateNoWhitespaceAtBeginningAndEnd = (value) => {
  return value[0] === " " && value[value.length - 1] === " ";
};
export const validateSelectTag = (value) => {
  return Object.keys(value).length !== 0;
};
