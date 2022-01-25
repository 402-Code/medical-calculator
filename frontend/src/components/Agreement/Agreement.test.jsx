import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Agreement from './Agreement';

describe('Intro component with agreement', () => {
    describe('button', () => {
        it('has proper name', () => {
            render(<Agreement />);
            const agreementButton = screen.getByRole('button');
            expect(agreementButton).toHaveTextContent('Rozumiem')
        });

        it('not disabled', () => {
            render(<Agreement/>)
            expect(screen.getByRole('button')).not.toBeDisabled();
        })
    })
    
    describe('paragraph', () => {
        it('has a proper text', () => {
            render(<Agreement />);
            const agreementText = screen.getByRole('heading');
            expect(agreementText).toHaveTextContent('Kalkulator Medyczny nie stanowi oraz nie zastępuje porady lekarskiej. Kliknięcie przycisku Rozumiem jest konieczne, by móc korzystać z aplikacji.');
        });
    });
});
