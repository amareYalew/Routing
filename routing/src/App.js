import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Switch, Route, NavLink,Router } from 'react-router-dom';
import Department from './Department'
import Employee from './Employees';
import Salery from './Salaety';
import InvalidPath from './InvalidPath';
import Edit from './Edit';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Welcome to App Component...</h2>
      <BrowserRouter>
        <ul>
          <li><Link to='/'>Employee</Link></li>
          <li><NavLink to='/department'
            activeStyle={{
              fontWeight: "bold",
              color: "red"
            }}>Department</NavLink></li>

          <li>
            <NavLink to='/salery'
              activeStyle={{
                fontWeight: "bold",
                color: "red"
              }}>Salery </NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Employee}></Route>
          <Route path="/employee/:id" component={Edit}></Route>
          <Route path="/salery" component={Salery}></Route>
          <Route path="/department" component={Department}></Route>
          <Route component={InvalidPath}></Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}



export default App;
