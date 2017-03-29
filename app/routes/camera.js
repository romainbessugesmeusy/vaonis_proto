const router = require('express').Router();
const hal = require('../hal');

router.get('/state', (req, res) => {
    hal.camera.getState((err, value) => {

    });
});

router.get('/autofocus', (req, res) => {
    hal.camera.getAutoFocusState()
        .then((value) => {
            return res.json({
                value: value
            });
        }).catch((error) => {
            return res.json({
                error: error,
            });
        }
    )
});


router.post('/autofocus', (req, res) => {
    hal.camera.setAutoFocusState(req.body, (err) => {
        if (err) res.status(500);
        res.json({
            error: err
        })
    });
});

module.exports = router;