const express = require('express');
const router = express.Router();

router.get('/whoami', (req, res) => {
    const forwarded = req.headers['x-forwarded-for'];
    const language = req.headers['accept-language'];
    const ipaddress = req.socket.remoteAddress;
    const software = req.headers['user-agent'];

    res.status.json({ ipaddress, language, software });
})

module.exports = router;