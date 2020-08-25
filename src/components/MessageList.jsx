import React from 'react'

export default function MessageList({ messages }) {
    return (
        <ul className="list-group">
            {
            messages && Object.entries(messages).reverse().map(item => {
                const key = item[0]
                const payload = item[1]
                return (
                    <li class="list-group-item" key={key}>
                        <p>
                            {payload.message}
                        </p>
                        {payload.username && <small>By: {payload.username}</small>}
                    </li>
                )
            })
            }
        </ul>
    )
}
