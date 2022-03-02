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
    const user = await User.findOne({ _id: userId });
    const kid = user.kids.filter((kid) => kid._id.toString() === kidId);
    res.status(200).send(kid);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

userRouter.put('/:userId/kids/:kidId', async (req, res) => {
  const { userId, kidId } = req.params;
  try {
    const user = await User.findOne({ _id: userId });
    const kid = user.kids.find((kid) => kid._id.toString() === kidId);
    propertyUpdate(kid, req.body);
    await user.save();
    res.status(200).send(kid);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

userRouter.delete('/:userId/kids/:kidId', async (req, res) => {
  const { userId, kidId } = req.params;
  try {
    const user = await User.findOne({ _id: userId });
    const kidIndex = user.kids.findIndex((kid) => kid._id.toString() === kidId);
    user.kids.splice(kidIndex, 1);
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

userRouter.post('/:userId/kids', async (req, res) => {
  const { userId } = req.params;
  try {
    const kid = { ...req.body };
    const user = await User.findOne({ _id: userId });
    user.kids.push(kid);
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

function propertyUpdate(kid, data) {
  kid.name = data.name;
  kid.dateOfBirth = data.dateOfBirth;
  kid.height = data.height;
  kid.weight = data.weight;
  kid.gender = data.gender;
}

export default userRouter;
