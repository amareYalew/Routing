import React from 'react';
import { useState, useEffect } from "react";

export default function Department() {

    const [department, setDepartment] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(res => {
                setDepartment(res)
            });
    },[])

    return (

        <div>
            <h2>Departments Data...</h2>
            <table>
                <thead>
                    <tr>
                        <th>Phone</th>
                        <th>website</th>
                    </tr>
                </thead>
                <tbody>
                    {department.map(data => (
                        <tr key={data.id}>
                            <td>{data.phone}</td>
                            <td>{data.website}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    )
}
