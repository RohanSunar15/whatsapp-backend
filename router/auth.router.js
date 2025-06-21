const router = require('express').Router();
const verifyToken = require('../middleware/auth.middleware')

// verify Token 
router.post('/verify-token', verifyToken, (req, res)=>{
    res.json({    
        message: 'Authenticated',
        uid: req.user.uid, 
        phone: req.user.phone
    });
},);


module.exports = router;