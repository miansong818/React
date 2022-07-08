/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import '../css/loginform.css';
import {values} from 'lodash';

const Login = () => {
  const initVal = {userName: '', email: '', password: ''};
  const [formValues, setFormValues] = useState(initVal);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange=(e)=>{
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  };
  const handleSubmit=(e)=>{
    console.log('submit');
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(()=>{
    if (Object.keys(formErrors).length===0 && isSubmit) {
      console.log('asd');
    }
  }, [formErrors]);

  const validate=(value)=>{
    console.log(value);
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!value.userName) {
      errors.userName = 'User name is require!';
    }
    if (!value.email) {
      errors.email = 'Email name is require!';
    } else if (!regex.test(values.email)) {
      errors.email = 'Email format is invalid!';
    }
    if (!value.password) {
      errors.password = 'Password name is require!';
    }
    return errors;
  };
  const onClick=()=>{};
  return (
    <div className='loginContainer'>
      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className='ui divider'></div>
        <div className='ui form'></div>
        <div className='field'>
          <label>User name</label>
          <input
            type="text"
            name='userName'
            placeholder='User Name'
            value={formValues.userName}
            onChange={handleChange} />
        </div>
        <p>{formErrors.userName}</p>
        <div className='field'>
          <label>Email</label>
          <input
            type="text"
            name='email'
            placeholder='Email'
            value={formValues.email}
            onChange={handleChange} />
        </div>
        <p>{formErrors.email}</p>
        <div className='field'>
          <label>Password</label>
          <input
            type="text"
            name='password'
            placeholder='Password'
            value={formValues.password}
            onChange={handleChange}/>
        </div>
        <p>{formErrors.password}</p>
        <div className='field'>
          <button>Submit</button>
        </div>

      </form>
    </div>
  );
};

export default Login;
