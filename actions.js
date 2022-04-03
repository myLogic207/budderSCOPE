const eLogPath = require("../../config.json").eLog.eLogPath;
const { eLog } = require(eLogPath);

module.exports = {
    init: function(){
        //initialize your scope, gets called when the scope is loaded
        //this function is and should be only called once
    },
    shutdown: function(){
        //shutdown your scope, gets called when budder bot is gracefully shutdown
        //this function is and should be only called once
    }
};