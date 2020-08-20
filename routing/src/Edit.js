import React from 'react'
import Nested from './NastedRoute'
export default function Edit(props) {
    return (
        <div>
            <Nested></Nested>
            <h1>{props.match.params.id}</h1>
        </div>
    )
}
