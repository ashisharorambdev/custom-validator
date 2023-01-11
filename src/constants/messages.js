export const passwordValidation =
  "Password must be 8-15 characters long and contain atleast 1 upper case, 1 lower case, 1 number and 1 special character(@,#,$,&,^,%*)";

export const passwordValidationSmall =
  "Password must contain 8-15 characters, at least 1 upper case, 1 lower case, 1 number and 1 special character";

export const emailValidation = "Enter a valid email";

export const loginFormValiadtion =
  "Either email or the password you have entered is incorrect";

export const signupFormValidation = "invalid data";

export const forgotPasswordValiadtion = "Email you have entered does not exist";

export const resetPasswordValidation = `"Reset password request expired. Please check latest request send on your email"`;

export const confirmPasswordValidation =
  "Password and Confirm Password do not match";

export const internalServerError = "Internal Server Error";

export const contactUsFormValidation = "invalid data";

export const passwordChangeMessage = "Password updated successfully!";

export const requiredValidationMeassge = (name) => {
  return `${name} is required`;
};

export const inputFieldValidaionMessage = (name) => {
  return `Enter a valid ${name}`;
};
export const selectFieldValidationMessage=(name)=>{
  return `Select a ${name}`;
}