import React from 'react'
import { useState, useEffect } from "react";

export default function Employees() {
    const [employees, setEmployees] = useState([]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(res => {
                setEmployees(res)
            });
    },[])

    return (
        <div>
            <h2>Departments Data...</h2> 
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>email</th>
                        <th>Action(s)</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(emp => (
                        <tr key={emp.id}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            <td>{emp.userName}</td>
                            <td>{emp.email}</td>
                            <td><a href={`/employee/${emp.id}`}>Edit</a></td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
