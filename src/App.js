import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import { useEffect, useState, useRef } from 'react'
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';
import Heading1 from './components/Heading1';

function App() {
  const CHAT_ROOM_URL = "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json"
  const MESSAGE_LIST_URL = "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json"
  let [chatRoom, setChatRoom] = useState({})
  let [username, setUserName] = useState(null)
  const usernameInput = useRef()

  function handleGetChatRoom() {
    const url = CHAT_ROOM_URL
    fetch(url)
      .then(res => res.json())
      .then(data => setChatRoom(data))
  }

  function handlePostMessage(message) {
    const url = MESSAGE_LIST_URL
    const data = {
      message: message,
      username: username,
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

  useEffect(() => {
    handleGetChatRoom()
  }, [])

  function renderChatRoom() {
    return (
      <div>
        <Heading1 heading={chatRoom.name} />
        <p>Your username is {username}</p>
        <MessageForm handlePostMessage={handlePostMessage} />
        {chatRoom.messages && <MessageList messages={chatRoom.messages} />}

      </div >
    )
  }

  function renderUsernameForm() {
    return (
      <div>
        <p>Please enter username</p>
        <input ref={usernameInput} type="text" />
        <button onClick={() => setUserName(usernameInput.current.value)}>Save username</button>
      </div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          {username ? renderChatRoom() : renderUsernameForm()}
        </div>

      </div>
    </div>


  );
}

export default App;
