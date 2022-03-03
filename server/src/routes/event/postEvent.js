import { StatusCodes } from 'http-status-codes';
import User from '../../models/user';

const postEvent = async (req, res) => {
  const event = ({ createdAt: Date.now(), type: "string", drugId: req.body});
  
  try {
    const disease = await req.user.disease(req.body);
    
    disease.event.push(event);    
    await req.user.save();
    
    res.status(StatusCodes.CREATED).send(event);
  } catch (err) {
    res.status(StatusCodes.BAD_REQUEST).send({ message: err.message });
  }
};

export default postEvent;