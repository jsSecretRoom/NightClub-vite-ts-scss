const express = require('express');
const router = express.Router();

router.get("/home/orderdata/:formattedDate", (req, res) => {
    res.send('something text');
});

module.exports = router;