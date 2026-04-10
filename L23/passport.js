let passport = require("passport");
let user = require("../model/user");

passport.use(new LicalStrategy(
    function(username, password, done){
        User.findOne({ username: username}, function(err, user){
            if(err) {return done(err); }
            if(!user) {return done(null, false); }
            if(brcypt.compare(password,Hash,(err, result)=>{
                if(!result){
                    {return done(null, false); }
                }
            }))
            return 
        });
    }
))