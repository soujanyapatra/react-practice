import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import io from 'socket.io-client';

function Chat() {
  const [messages, setMessages] = useState([])
  const [messageInput, setMessageInput] = useState('')
  const [socket, setSocket] = useState(null)

  // WebSocket connection setup goes here

  const handleSubmit = (event) => {
    event.preventDefault()
    if (socket && messageInput) {
      socket.emit('message', { text: messageInput, messageId: Date.now() }, (ack) => {
        // Handle the acknowledgment
        console.log(`Message ${ack.messageId} sent successfully`);
      })
      setMessageInput('')
    }
  }

  useEffect(() => {
    let socketInstance = io('http://localhost:3001')
    setSocket(socketInstance)

    socketInstance.on('connect', () => {
      console.log('Connected to socket server')
    })

    socketInstance.on('disconnect', () => {
      console.log('Disconnected from socket server')
    })

    return () => {
      if (socketInstance) {
        socketInstance.disconnect()
      }
    }
  }, [])

  return (
    <div className="mt-15">
      <Box
        sx={{
          p: 2,
          display: 'grid',
          gridTemplateColumns: { md: '1fr 1fr' },
          gap: 2,
        }}
      >
        <Paper elevation={1}>
          <div className='p-10'>
            <div className="chat-container">
              <div className="chat-messages">
                {messages.map((message, index) => (
                  <div key={index} className="message">
                    {message}
                  </div>
                ))}
              </div>
              <div className="chat-input">
                <TextField
                  id="outlined-chat-input"
                  value={messageInput}
                  variant="filled"
                  onChange={(e) => setMessageInput(e.target.value)}
                />
                <Button variant="text" onClick={handleSubmit}>Send</Button>
              </div>
            </div>
          </div>
        </Paper>
      </Box>
    </div>
  )
}

export default Chat;
