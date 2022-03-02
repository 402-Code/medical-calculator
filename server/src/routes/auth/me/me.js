const me = async (req, res) => {
    const { username, email, createdAt } = req.user;
    res.json({ username, email, createdAt });
};

export default me
