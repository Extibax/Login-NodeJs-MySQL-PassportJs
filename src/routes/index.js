const express = require('express');
const expressRouter = express.Router();

expressRouter.get('/', (req, res) => {
    res.render('index');
});

module.exports = expressRouter;