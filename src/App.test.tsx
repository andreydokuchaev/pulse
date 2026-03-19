import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from './App'

describe('Pulse App Layout', () => {
    it('renders the main layout containers with correct labels', () => {
        render(<App />)

        expect(screen.getByText('Header Area')).toBeInTheDocument()
        expect(screen.getByText('Messages Area')).toBeInTheDocument()
        expect(screen.getByText('Input Area')).toBeInTheDocument()
    })
    it('renders placeholder messages in the message area', () => {
        render(<App />)

        expect(screen.getByText('Hey, how are you today?')).toBeInTheDocument()
        expect(screen.getByText('This is a fake message to fill the chat.')).toBeInTheDocument()
        expect(screen.getByText('Another one just for testing purposes.')).toBeInTheDocument()
    })
})