import { StatusCodes } from 'http-status-codes';

const signOut = async (req, res) => {
    return res
      .clearCookie('access-token')
      .status(StatusCodes.OK)
      .json({ message: 'Successfully logged out' });
  };

  export default signOut
