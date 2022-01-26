import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App';
import { expect } from '@jest/globals';

describe('Agreement component', () => {
    it('should go to main component when "rozumiem" button clicked', () => {
        render(<App />);
        screen.getByText('Rozumiem').click();
        expect(screen.queryByText('Rozumiem')).not.toBeInTheDocument();
        expect(localStorage.getItem("agreement")).toBe("true");
    });

    it('should not render Agreement if already accepted', () => {
        localStorage.setItem('agreement', true)
        render(<App />);
        expect(screen.queryByText('Rozumiem')).not.toBeInTheDocument();
    });
});




