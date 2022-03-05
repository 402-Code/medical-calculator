import { StatusCodes } from "http-status-codes";

const getDiseases = async (req, res) => {

    if (!req.user.kids) {
        res.status(StatusCodes.NOT_FOUND).send({ message: "404" });
    } else {
        const kid = await req.user.kids.id(req.body.kidId);
        res.json(kid.diseases);
    }
}

export default getDiseases;
