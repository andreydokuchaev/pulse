import { useState } from 'react'
import './App.css'

function App() {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hey, how are you today?', isSent: false },
    { id: 2, text: 'This is a fake message to fill the chat.', isSent: true },
    { id: 3, text: 'Another one just for testing purposes.', isSent: false }
  ])

  const [inputValue, setInputValue] = useState('')

  const handleSend = () => {
    if (inputValue.trim() === '') return

    const newMessage = {
      id: messages.length + 1,
      text: inputValue.trim(),
      isSent: true,
    }

    setMessages([...messages, newMessage])
    setInputValue('')
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className='App'>
      <header data-testid="chat-header"></header>

      <main data-testid="message-list">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.isSent ? 'message-sent' : 'message-received'}`}
          >
            {msg.text}
          </div>
        ))}
      </main>

      <footer data-testid="message-input-bar">
        <input
          data-testid="message-input"
          type="text"
          placeholder="Type a message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          className='message-input'
        />
        <button data-testid="send-button" onClick={handleSend} className='send-button'>
          send
        </button>
      </footer>
    </div>
  )
}

export default App
