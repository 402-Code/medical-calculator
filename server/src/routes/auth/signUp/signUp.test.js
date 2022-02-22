import { jest } from '@jest/globals';
import { StatusCodes } from 'http-status-codes';
import signUp from '.';

describe('Sign Up', () => {
  let request;
  let response;

  beforeEach(() => {
    request = {};
    response = { json: jest.fn() };
  });

  describe('when proper email and password is provided', () => {
    it('new user object is returned', () => {
      request.body = { email: 'test@email.com', password: 'Password123' };
      signUp(request, response);

      expect(response.json).toHaveBeenCalledWith({ email: 'test@email.com' });
    });
  });

  describe('when proper email is invalid', () => {
    it('error is returned', () => {
      request.body = { email: 'not_really_an_email.com', password: 'Password123' };
      signUp(request, response);

      expect(response.json).toHaveBeenCalledWith({ error: 'Email is invalid' });
      expect(response.status).toHaveBeenCalledWith(StatusCodes.BAD_REQUEST);
    });
  });
});
