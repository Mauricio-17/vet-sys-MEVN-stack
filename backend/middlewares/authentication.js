//@ts-check
const jwt = require('jsonwebtoken')

const authVerify = (req, res, next) => {

    const token = req.get('token')
    jwt.verify(token, 'secret', (err, decoded) => {
        if(err) {
            return res.status(401).json({
                message: 'Invalid User'
            })
        }
        req.user = decoded.data
        next()
    })
    
}

export {authVerify}