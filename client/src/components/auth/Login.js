import React, { Component } from 'react'
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loginErrors: '' // TODO: show errors
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
  
    const {email, password} = this.state;
    axios.post(
      'http://localhost:4000/api/v1/sessions',
      {
        user: {
          email,
          password
        }
      },
      { withCredentials: true } // allow server to set cookie in the browser
    ).then(response => {
      if(response.data.user) {
        this.props.handleSuccessfulAuth(response.data);
      } else if(response.data.status === 'unauthorized'){
        alert('Invalid credentials');
      }
    }).catch( error => {
      console.log(error);
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    const {email, password} = this.state;
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 className="font-bold text-center text-2xl mb-5">Sign In</h1>  
          <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <form onSubmit={this.handleSubmit} className="px-5 py-7">
              <label className="font-semibold text-sm text-gray-600 pb-1 block text-left">E-mail</label>
              <input
                type='email'
                name='email'
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                placeholder='Email'
                value={email}
                onChange={this.handleChange}
                required
              />
              <label className="font-semibold text-sm text-gray-600 pb-1 block text-left">Password</label>
              <input
                type='password'
                name='password'
                className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                placeholder='Password'
                value={password}
                onChange={this.handleChange}
                required
              />
              <button type="submit" className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                  <span className="inline-block mr-2">Login</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
              </button>
            </form>
            <div className="py-5">
              <div className="grid grid-cols-2 gap-1">
                <div className="text-center sm:text-left whitespace-nowrap">
                  <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block align-text-top">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                      </svg>
                      <span className="inline-block ml-1">Forgot Password</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
