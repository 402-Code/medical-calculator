const getCurrentUser = async (req, res) => {
  const { username, email, createdAt, kids, id } = req.user;
  res.json({ username, email, createdAt, kids, id });
};

export default getCurrentUser;
