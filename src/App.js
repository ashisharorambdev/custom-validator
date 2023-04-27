/** @format */

import useForm from "./validators/useForm";
import "./App.css";

function App() {
  const { values, errors, handlrBlur, register, handleChange, handleSubmit } =
    useForm(login);

  function login() {
    alert("No errors, submit callback called!");
  }

  return (
    <div className='section is-fullheight'>
      <div className='container' style={{ margin: "20px" }}>
        <div className='column is-4 is-offset-4'>
          <div className='box'>
            <form onSubmit={handleSubmit} noValidate>
              <div className='field'>
                <label className='label'>Name</label>
                <div className='control'>
                  <input
                    autoComplete='off'
                    className={`input ${errors.email && "is-danger"}`}
                    name='name'
                    onChange={handleChange}
                    value={values.name || ""}
                    ref={(inputRef) =>
                      register(
                        {
                          required: true,
                          type: "name",
                        },
                        inputRef
                      )
                    }
                    onBlur={handlrBlur}
                    required
                  />
                  {errors.name && (
                    <p className='help is-danger'>{errors.name}</p>
                  )}
                </div>
              </div>
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
                      register(
                        {
                          required: true,
                          type: "email",
                          errorMessage: "Please enter a valid email",
                        },
                        inputRef
                      )
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

              <div className='field'>
                <label className='label'>Description</label>
                <div className='control'>
                  <textarea
                    className={`input ${errors.desciption && "is-danger"}`}
                    type='text'
                    name='desciption'
                    onChange={handleChange}
                    value={values.desciption || ""}
                    required
                    ref={(inputRef) =>
                      register(
                        {
                          required: true,
                          type: "description",
                          max: 50,
                          min: 10,
                        },
                        inputRef
                      )
                    }
                    onBlur={handlrBlur}
                  />
                </div>
                {errors.desciption && (
                  <p className='help is-danger'>{errors.desciption}</p>
                )}
              </div>

              <div className='field'>
                <label className='label'>No Space</label>
                <div className='control'>
                  <input
                    className={`input ${errors.noSpace && "is-danger"}`}
                    type='text'
                    name='noSpaceInput'
                    onChange={handleChange}
                    value={values.noSpace || ""}
                    required
                    ref={(inputRef) =>
                      register(
                        {
                          noSpace: true,
                        },
                        inputRef
                      )
                    }
                    onBlur={handlrBlur}
                  />
                </div>
                {errors.noSpace && (
                  <p className='help is-danger'>{errors.noSpace}</p>
                )}
              </div>

              <div className='field'>
                <label className='label'>Address</label>
                <div className='control'>
                  <input
                    className={`input ${errors.address && "is-danger"}`}
                    type='text'
                    name='address'
                    onChange={handleChange}
                    value={values.address || ""}
                    required
                    ref={(inputRef) =>
                      register(
                        {
                          required: true,
                          max: 60,
                        },
                        inputRef
                      )
                    }
                    onBlur={handlrBlur}
                  />
                </div>
                {errors.address && (
                  <p className='help is-danger'>{errors.address}</p>
                )}
              </div>

              <div className='field'>
                <label className='label'>Postal Code</label>
                <div className='control'>
                  <input
                    className={`input ${errors.postalCode && "is-danger"}`}
                    type='text'
                    name='postalCode'
                    onChange={handleChange}
                    value={values.postalCode || ""}
                    required
                    ref={(inputRef) =>
                      register(
                        {
                          required: true,
                          type: "pinCode",
                        },
                        inputRef
                      )
                    }
                    onBlur={handlrBlur}
                  />
                </div>
                {errors.postalCode && (
                  <p className='help is-danger'>{errors.postalCode}</p>
                )}
              </div>


              <div className='field'>
                <label className='label'>Website</label>
                <div className='control'>
                  <input
                    className={`input ${errors.website && "is-danger"}`}
                    type='text'
                    name='website'
                    onChange={handleChange}
                    value={values.website || ""}
                    required
                    ref={(inputRef) =>
                      register(
                        {
                          required: true,
                          type: "pinCode",
                          regex:/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
                          errorMessage:"Please enter a valid website"
                        },
                        inputRef
                      )
                    }
                    onBlur={handlrBlur}
                  />
                </div>
                {errors.website && (
                  <p className='help is-danger'>{errors.website}</p>
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
