const admin = require('../config/firebaseAdmin');


async function verifyTokenMiddleware(req, res, next) {
    const { token } = req.body;

    if(!token){
        return res.status(401).json({'message': 'No token provided'});
    }

    try {
        const decodedToken = await admin.auth().verifyIdToken(token);
        const uid = decodedToken.uid;
        const phone = decodedToken.phone_number;
        
        res.status(200).json({ uid, phone });
    } catch (error) {
        return res.status(401).json({'message': 'Invaild or expired token'});
    }
}


module.exports = verifyTokenMiddleware;