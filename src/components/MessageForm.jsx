import React from 'react'
import { useRef } from 'react'

export default function MessageForm({handlePostMessage}) {
    const messageInputField = useRef()

    function handleOnClick() {
        const message = messageInputField.current.value
        handlePostMessage(message)
    }

    return (
        <div className="form-inline alert alert-info">
            <div class="form-group mb-2">
                <label for="staticEmail2" class="sr-only">Message</label>
                <input ref={messageInputField} type="text" readonly class="form-control" placeholder="Enter message..." />
            </div>
            <button onClick={handleOnClick} class="btn btn-primary mb-2">Send Message</button>
        </div>
    )
}
