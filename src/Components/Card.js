import React from 'react'

export default function Card(props) {
    return (
        <div className="container">
            <img src={props.knot.image} alt={props.knot.name}/>
            <h1>{props.knot.name}</h1>
            <h2>{props.knot.description}</h2>
            <a href={props.knot.link}>Click for more info...</a>
        </div>
    )
}
