import { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';


export default class ProtectedRoute extends Component {
  render() {
    const { component: Component, currentUser, ...props } = this.props;
    const isUserLoggedIn = Object.keys(currentUser).length;
  
    return (
      <Route 
        {...props} 
        render={() => {
          return isUserLoggedIn ?
            <Component {...this.props} /> :
            <Redirect to='/' />
        }}
      />
    )
  }
}
