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
})