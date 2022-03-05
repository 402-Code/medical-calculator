import User from '../../models/user';
import { StatusCodes } from 'http-status-codes';


const getAllUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.send(users);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  };

  export default getAllUsers;
