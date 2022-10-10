const jwt = require('jsonwebtoken')

module.exports = function (role) {
    return function (req, res, next) {
        try {

            const token = req.headers.authorization.split(' ')[1];

            if (!token) return res.status(401).json({ message: 'no auth' })

            const decodedToken = jwt.verify(token, process.env.CLIENT_SECRET);
            const userRole = decodedToken.role

            if (userRole !== role) {
                res.status(403).json({ message: 'You dont have permission' })
            }

            req.user = decodedToken;
            next()
        }
        catch (e) {
            res.status(402).json({ message: 'Acces denied' })
        }

    }
}