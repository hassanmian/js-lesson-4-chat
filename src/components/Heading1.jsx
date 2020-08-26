import React from 'react'
import {useContext} from 'react'
import { UserContext } from '../contexts/UserContext'

export default function Heading1({ heading }) {
    const {user, setUser} = useContext(UserContext)
    return (
        <div className="row">
            <div className="col-md-12">
                <h1>{heading}</h1>
                <p>Your username is: {user}</p>
                <button onClick={() => setUser("Pelle")}>Click here to set user to Pelle</button>
                <hr/>
            </div>
        </div>
    )
}
