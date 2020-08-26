import React from 'react'
import { useContext } from 'react'
import { ChatRoomContext } from '../contexts/ChatRoomContext'

export default function MessageList() {
    const {chatRoom, setChatRoom} = useContext(ChatRoomContext)

    return (
        <ul className="list-group">
            {
            chatRoom.messages && Object.entries(chatRoom.messages).reverse().map(item => {
                const key = item[0]
                const payload = item[1]
                return (
                    <li className="list-group-item" key={key}>
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
