const User = require('../User/user.model');

 const authMiddleware = async (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).send({ message: 'User not Authenticated' });
    }
  
    try {
        const userId  =  token;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(401).send({ message: 'User not found' });
        }
        req.userId = userId;

        next();
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
};

    module.exports = authMiddleware;