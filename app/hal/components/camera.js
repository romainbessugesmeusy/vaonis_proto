const STATES = module.exports.STATES = {
    IDLE: 0,
    WAITING: 1,
    EXPOSING: 2,
    TRANSFERRING: 4,
    ERROR: 5
};

let fakeFocusValue = 0;
let fakeCameraState = STATES.IDLE;

module.exports.getState = (cb) => {
    return new Promise((resolve, reject)=>{
        cb(null, fakeCameraState);
    });
};

module.exports.getAutoFocusState = (cb) => {
    cb(null, fakeFocusValue);
};

module.exports.setAutoFocusState = (value, cb) => {
    fakeFocusValue = value;
    cb();
};

