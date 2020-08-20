import React from 'react'
import { BrowserRouter, Link, Switch, Route, NavLink, Router } from 'react-router-dom';
import SalaryInf from './SaleryInfo';
import ProjectInf from './ProjectInf';


export default function NastedRoute(props ) {
    return (
        <div>
            <Link to={"/employee/:id" }>Personal</Link> &nbsp;&nbsp; 
            <NavLink to={"/employee/:id/salary"} activeClassName="testClass">Salary</NavLink>&nbsp;&nbsp;
            <NavLink to={"/employee/:id/projects"} activeClassName="testClass">Projects</NavLink>
            <Switch>
        <Route exact path="/employee/:id" component={ProjectInf}></Route>
        <Route path="/employee/:id/salary" component={SalaryInf }></Route>
        <Route path="/employee/:id/projects" component={ProjectInf}></Route>
        
      </Switch>
        </div>
    )
}
