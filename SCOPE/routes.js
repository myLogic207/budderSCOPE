const router = require("express").Router();
const path = require('path');
const eLogPath = require("../../config.json").eLog.eLogPath;
const { eLog } = require(eLogPath);

router.use(express.static(path.join(__dirname, 'frontend')));

router.get('/', (req, res) => {
    res.redirect(__dirname + 'index.html');
});

module.exports = router;