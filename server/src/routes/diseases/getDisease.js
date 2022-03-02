import { StatusCodes } from "http-status-codes";

const getDisease = async (req, res) => {
    try {
        const kid = await req.user.kids.id(req.body.kidId);

        res.json(kid.diseases);
    } catch (err) {
        res.status(StatusCodes.BAD_REQUEST).send({ message: err.message });
    }
};

export default getDisease;
