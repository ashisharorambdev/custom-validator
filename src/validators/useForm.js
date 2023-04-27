/** @format */

import { useState, useEffect } from "react";
import { validateValue } from "../ValidationRules";

const useForm = (callback) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  var inputRules = {};

  useEffect(() => {
    if (isSubmitting) {
      callback();
      setIsSubmitting(false)
    }
  }, [isSubmitting]);

  const handlrBlur = (event) => {
    let Errors = { ...errors };
    Errors[event.target.name] = validateValue(
      event.target.value,
      event.target.name,
      inputRules[event.target.name]
    );
    setErrors(Errors);
  };

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      setIsSubmitting(true);
    }
  };

  const handleChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const register = (rules, ref) => {
    if (ref) inputRules[ref.name] = rules;
  };

  return {
    handleChange,
    handleSubmit,
    handlrBlur,
    register,
    values,
    errors,
  };
};

export default useForm;
