/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const signUp = async (req, res) => {
  const { email } = req.body;
  res.json({ email });
};

export default signUp;
