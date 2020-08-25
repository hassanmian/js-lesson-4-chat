import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import { useEffect, useState, useRef } from 'react'

function App() {
  const CHAT_ROOM_URL = "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json"
  const MESSAGE_LIST_URL = "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json"
  let [chatRoom, setChatRoom] = useState({})
  const messageInputField = useRef()

  function handleGetChatRoom() {
    const url = CHAT_ROOM_URL
    fetch(url)
      .then(res => res.json())
      .then(data => setChatRoom(data))
  }

  function handlePostMessage() {
    const url = MESSAGE_LIST_URL
    const data = {
      message: messageInputField.current.value
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        handleGetChatRoom()
      })

  }

  useEffect( () => {
    handleGetChatRoom()
  }, [])

  return (
    <div>
      <h1>{chatRoom.name}</h1>
      <div>
        <input ref={messageInputField} type="text" />
        <button onClick={handlePostMessage}>Send Message</button>
      </div>
      <ul>
        {chatRoom.messages && Object.entries(chatRoom.messages).reverse().map(item => {
          const key = item[0]
          const payload = item[1]
          return <li key={key}>{payload.message}</li>
        })}
      </ul>
      
    </div>
  );
}

export default App;
