import React from 'react';
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App';

describe('App', () => {
    describe('button', () => {
        it('has proper name', () => {
            render(<App />);
            const button = screen.getByRole('button');
            expect(button).toHaveTextContent('Material UI')
        });

        it('not disabled', () => {
            render(<App/>)
            expect(screen.getByRole('button')).not.toBeDisabled();
        })
    })
    
    describe('heading', () => {
        it('has a proper text', () => {
            render(<App />);
            const heading = screen.getByRole('heading');
            expect(heading).toHaveTextContent('Hello React')
        });
    });
});
