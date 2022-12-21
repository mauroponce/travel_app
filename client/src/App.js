import './App.css';
import { Component } from 'react';
import axios from 'axios';
import {
  Routes,
  Route,
} from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Dashboard from './components/Dashboard';
import TripsList from './components/trips/TripsList';
import Login from './components/auth/Login';

export default class App extends Component {
  constructor(props) {
   super(props);
   
    this.state = {
      currentUser: localStorage.getItem('currentUser')
    };
  }

  componentDidMount() {
    this.checkLoginStatus();
  }

  handleLogin = (data) => {
    this.setState({
      currentUser: data.user
    });
    localStorage.setItem('currentUser', data.user);
  }

  handleLogout = () => {
    axios.delete(
      'http://localhost:4000/api/v1/sessions/logout',
      { withCredentials: true } // work with cookies (Rails session)
    ).then(() => {
      this.setState({
        currentUser: null
      })
    }).catch(error => {
      console.log('Login error', error);
    });
  }

  checkLoginStatus = () => {
    axios.get(
      'http://localhost:4000/api/v1/sessions/logged_in',
      { withCredentials: true } // work with cookies (Rails session)
    ).then((response) => {
      if(response.data.logged_in) {
        this.setState({
          currentUser: response.data.user
        })
        localStorage.setItem('currentUser', response.data.user);
      } else {
        this.setState({
          currentUser: null
        })
        localStorage.removeItem('currentUser');
      }
    }).catch(error => {
      console.log('Login error', error);
    });
  }

  render() {
    const {currentUser} = this.state;
    return (
      <Routes>
        <Route element={<ProtectedRoute isAllowed={!!currentUser} />}>
          <Route index element={<Dashboard handleLogout={this.handleLogout}/>} />
          <Route path="dashboard" element={<Dashboard handleLogout={this.handleLogout}/>} />
          <Route path="trips" element={<TripsList />} />
        </Route>
        <Route path='login' element={<Login currentUser={currentUser} handleSuccessfulAuth={this.handleLogin} />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>

    );
  }
}