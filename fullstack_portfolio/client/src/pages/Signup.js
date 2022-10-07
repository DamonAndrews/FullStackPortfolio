import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const signUpPage = {
  background: {
    backgroundColor: 'grey',
    paddingTop: 15,
    paddingBottom: 600,
    marginTop: 0, 
    
  },
  
  loginBanner:{
    color:'white',
    color:'white',
    fontSize: 25,
    fontFamily: 'Times New Roman', 
    textDecoration: 'none',
    backgroundColor: 'black',
    paddingBottom: 0,
    marginBottom: -10
   },
  submitButton:{
    color:'white',
    fontSize: 20,
    fontFamily: 'Brush Script', 
    textDecoration: 'none',
    backgroundColor: 'maroon',
    paddingBottom: 0,
    marginBottom: 50, 
   },
}
const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center" style={signUpPage.background}>

      <div className="col-12 col-lg-6">
        <div className="card text-center">
        <h4 className="card-header" style={signUpPage.loginBanner}><b>SIGN UP</b></h4>
          <div className="card-body text-black">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Username"
                  name="username"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={signUpPage.submitButton}
                  type="submit"
                >
                  <b>SUBMIT</b>
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-secondary text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signup;
