import React from 'react'
import { useRef } from 'react'

export default function MessageForm({handlePostMessage}) {
    const messageInputField = useRef()

    function handleOnClick() {
        const message = messageInputField.current.value
        handlePostMessage(message)
    }

    return (
        <div className="form">
            <div className="form-group mb-2">
                <input ref={messageInputField} type="text" className="form-control" placeholder="Enter message..." />
            </div>
            <button onClick={handleOnClick} className="btn btn-primary btn-block mb-2">Send Message</button>
        </div>
    )
}
