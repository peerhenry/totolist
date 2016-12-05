var req = require.context("./components", true, /^(.*\.((jsx?|tsx?)$))[^.]*$/igm);
req.keys().forEach(function(key){
    req(key);
});