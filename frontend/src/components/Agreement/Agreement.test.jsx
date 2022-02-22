import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Agreement from './Agreement';

describe('intro component with agreement', () => {
  describe('button', () => {
    it('has proper name', () => {
      render(<Agreement />);
      const agreementButton = screen.getByRole('button');
      expect(agreementButton).toHaveTextContent('Rozumiem');
    });

    it('not disabled', () => {
      render(<Agreement />);
      expect(screen.getByRole('button')).not.toBeDisabled();
    });

    it('button calls onAccept', () => {
      const accept = jest.fn();
      render(<Agreement onAccept={accept} />);
      expect(accept).not.toHaveBeenCalled();
      screen.getByRole('button').click();
      expect(accept).toHaveBeenCalled();
    });
  });
});
