import React from 'react'
import Card from './Card'

export default function CardContainer({knots}) {

    const knotsCollection = knots.map(knot => {
        return <Card key={knot.id} knot={knot} />
    })

    return (
        <div>
            {knotsCollection}
        </div>
    )
}
