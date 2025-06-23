const admin = require('firebase-admin');
const serviceAccount = require('../whatapp-clone-9f74c-firebase-adminsdk-fbsvc-3c5cee24f1.json'); 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;
