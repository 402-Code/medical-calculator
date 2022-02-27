import { StatusCodes } from 'http-status-codes';
import Kid from '../../models/kid';

const addKid = async (req, res) => {
    const { name, dateOfBirth, height, weight, gender, avatar, diseases } = req.body;
    const kid = new Kid({ name, dateOfBirth, height, weight, gender, avatar, diseases })

    const isNameExists = await Kid.findOne({ name });
    if (isNameExists) return res.status(StatusCodes.BAD_REQUEST).send({ message: 'Name already exist' });

    try {
        const newKid = await kid.save()
        res.status(StatusCodes.CREATED).send(newKid)
    } catch (err) {
        res.status(StatusCodes.BAD_REQUEST).send({ message: err.message })
    }      
}

export default addKid
