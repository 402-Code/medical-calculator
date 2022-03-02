import { Router } from 'express';
import User from '../../models/user';

const userRouter = Router();

userRouter.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});
userRouter.get('/:userId', async (req, res) => {
  try {
    const users = await User.findOne({ _id: req.params.userId });
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});
userRouter.get('/:userId/kids', async (req, res) => {
  try {
    const users = await User.findOne({ _id: req.params.userId });
    res.status(200).send(users.kids);
  } catch (error) {
    res.status(500).send(error);
  }
});
userRouter.get('/:userId/kids/:kidId', async (req, res) => {
  const { userId, kidId } = req.params;
  try {
    const users = await User.findOne({ _id: userId });
    const kid = users.kids.filter((kid) => kid._id.toString() === kidId);
    res.status(200).send(kid);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default userRouter;
