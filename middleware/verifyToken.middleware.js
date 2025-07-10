const admin = require('../config/firebaseAdmin');


async function verifyTokenMiddleware  (req, res, next) {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({error : 'Unauthorized : No Token Provided'});
    }

const idToken = authHeader.split(' ')[1];
    console.log('Received ID Token:', idToken); 


    try {
        const decodedToken = await admin.auth().verifyIdToken(idToken);
        req.user = decodedToken;
        next();
    } catch (error) {
         console.error('Token verification failed:', error);
        return res.status(401).json({error : 'Unauthorized : Invaild Token'});

    }
}


module.exports = verifyTokenMiddleware;