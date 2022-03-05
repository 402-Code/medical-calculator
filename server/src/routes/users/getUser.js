import User from '../../models/user';
import { StatusCodes } from 'http-status-codes';


const getUser = async (req, res) => {
    try {
      const users = await User.findOne({ _id: req.params.userId });
      res.send(users);
    } catch (error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(error);
    }
  };

  export default getUser;
