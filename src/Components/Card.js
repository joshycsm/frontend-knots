import React from 'react'

export default function Card(props) {
    return (
        <div>
            <img src={props.knot.image} alt={props.knot.name}/>
            <h1>{props.knot.name}</h1>
        </div>
    )
}
