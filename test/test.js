var req = require.context("./", true, /^(.*\.((tsx?)$))[^.]*$/igm);
req.keys().forEach(function(key){
    req(key);
});