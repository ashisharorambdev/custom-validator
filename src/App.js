/** @format */

import { TextField } from "@mui/material";
import useForm from "./validators/useForm";
// import validate from "./LoginFormValidationRules";

function App() {
  const { values, errors, handlrBlur, register, handleChange, handleSubmit } =
    useForm(login);

  function login() {
    alert("No errors, submit callback called!");
  }

  return (
    <div className='section is-fullheight'>
      <div className='container'>
        <div className='column is-4 is-offset-4'>
          <div className='box'>
            <form onSubmit={handleSubmit} noValidate>
              <div className='field'>
                <label className='label'>Email Address</label>
                <div className='control'>
                  <input
                    autoComplete='off'
                    className={`input ${errors.email && "is-danger"}`}
                    type='email'
                    name='email'
                    onChange={handleChange}
                    value={values.email || ""}
                    ref={(inputRef) =>
                      register({ required: true, type: "email" }, inputRef)
                    }
                    onBlur={handlrBlur}
                    required
                  />
                  {errors.email && (
                    <p className='help is-danger'>{errors.email}</p>
                  )}
                </div>
              </div>
              <div className='field'>
                <label className='label'>Password</label>
                <div className='control'>
                  <input
                    className={`input ${errors.password && "is-danger"}`}
                    type='password'
                    name='password'
                    onChange={handleChange}
                    value={values.password || ""}
                    required
                    ref={(inputRef) =>
                      register({ required: true, type: "password" }, inputRef)
                    }
                    onBlur={handlrBlur}
                  />
                </div>
                {errors.password && (
                  <p className='help is-danger'>{errors.password}</p>
                )}
              </div>

              <div className='field'>
                <label className='label'>Phone Number</label>
                <div className='control'>
                  <input
                    className={`input ${errors.phone && "is-danger"}`}
                    type='number'
                    name='phone'
                    onChange={handleChange}
                    value={values.phone || ""}
                    required
                    ref={(inputRef) =>
                      register({ type: "phoneNumber" }, inputRef)
                    }
                    onBlur={handlrBlur}
                  />
                </div>
                {errors.phone && (
                  <p className='help is-danger'>{errors.phone}</p>
                )}
              </div>

              <button
                type='submit'
                className='button is-block is-info is-fullwidth'>
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
