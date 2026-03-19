import './App.css'

function App() {

  return (
    <div className='App'>
      <header>
        Header Area
      </header>
      <main>
        Messages Area

        <div className='message message-received'>
          Hey, how are you today?
        </div>

        <div className='message message-sent'>
          This is a fake message to fill the chat.
        </div>

        <div className='message message-received'>
          Another one just for testing purposes.
        </div>

      </main>
      <footer>
        Input Area
      </footer>
    </div>
  )
}

export default App
