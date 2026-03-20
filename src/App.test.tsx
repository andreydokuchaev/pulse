import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import userEvent from "@testing-library/user-event";
import App from './App'

describe('Pulse App Layout', () => {
    it('renders the main layout containers with correct labels', () => {
        render(<App />)

        expect(screen.getByTestId('chat-header')).toBeInTheDocument()
        expect(screen.getByTestId('message-list')).toBeInTheDocument()
        expect(screen.getByTestId('message-input-bar')).toBeInTheDocument()
    })
    
    it('renders placeholder messages in the message area', () => {
        render(<App />)

        expect(screen.getByText('Hey, how are you today?')).toBeInTheDocument()
        expect(screen.getByText('This is a fake message to fill the chat.')).toBeInTheDocument()
        expect(screen.getByText('Another one just for testing purposes.')).toBeInTheDocument()
    })

    it('adds a new sent message when user types and clicks send', async () => {
        render(<App />)

        const input = screen.getByTestId('message-input')
        const sendButton = screen.getByTestId('send-button')

        await userEvent.type(input, 'Hello from test!')

        await userEvent.click(sendButton)

        expect(screen.getByText('Hello from test!')).toBeInTheDocument()
        
        const newMessage = screen.getByText('Hello from test!').closest('.message-sent')
        expect(newMessage).toBeInTheDocument()
    })
})