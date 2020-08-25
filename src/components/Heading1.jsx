import React from 'react'

export default function Heading1({ heading }) {
    return (
        <div className="row">
            <div className="col-md-12">
                <h1>{heading}</h1>
                <hr/>
            </div>
        </div>
    )
}
