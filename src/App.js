import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

import { useEffect, useState, useRef } from 'react'
import MessageForm from './components/MessageForm';
import MessageList from './components/MessageList';
import Heading1 from './components/Heading1';
import { UserContext } from './contexts/UserContext';
import { ChatRoomContext } from './contexts/ChatRoomContext';

function App() {
  const CHAT_ROOM_URL = "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ.json"
  const MESSAGE_LIST_URL = "https://mock-data-api.firebaseio.com/chatrooms/-MFZumveIpHH5D_gkUHJ/messages.json"
  const usernameInput = useRef()
  
  let [chatRoom, setChatRoom] = useState({})
  const [user, setUser] = useState(null)
  

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
      username: user,
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
        <p>Your username is {user}</p>
        <MessageForm handlePostMessage={handlePostMessage} />
        {chatRoom.messages && <MessageList />}

      </div >
    )
  }

  function renderUsernameForm() {
    return (
      <div>
        <p>Please enter username</p>
        <input ref={usernameInput} type="text" />
        <button onClick={() => setUser(usernameInput.current.value)}>Save username</button>
      </div>
    )
  }

  return (
    <ChatRoomContext.Provider value={{chatRoom, setChatRoom}}>
      <UserContext.Provider value={{user, setUser}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {user ? renderChatRoom() : renderUsernameForm()}
          </div>

        </div>
      </div>
      </UserContext.Provider>
    </ChatRoomContext.Provider>


  );
}

export default App;
