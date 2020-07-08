const express = require("express");
const userRouter = express.Router();
const passport = require("passport");
const passportConfig = require("../config/passport");
const JWT = require("jsonwebtoken");
const User = require("../models/User");
const Todo = require("../models/Todo");


const signToken = userID => {
    return JWT.sign({
        iss: "ACS",
        sub: userID
    }, "ACS",{expiresIn : "1 day"});
    
}

userRouter.post("/register", (req, res) => {
    const { username, email, password } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err)
            res.status(500).json({ message: { msgBody: "Error has occured.", msgError: true } })
        if (user)
            res.status(400).json({ message: { msgBody: "Username is already taken.", msgError: true } })
        else {
            const newUser = new User({ username, email, password });
            newUser.save(err => {
                if (err)
                    res.status(500).json({ message: { msgBody: "Error has occured.", msgError: true } })
                else (user)
                res.status(201).json({ message: { msgBody: "Account successfully created!", msgError: false } })


            });
        }
    });
});

userRouter.post("/login", passport.authenticate("local", { session: false }), (req, res) => {
    if (req.isAuthenticated()) {
        console.log(req.user);
        const {_id,username} = req.user;
        const token = signToken(_id);
        res.cookie("access_token",token,{httpOnly: true, sameSite: true});
        res.status(200).json({isAuthenticated: true,user: {username}});
    }

});

userRouter.get("/logout", (req, res) => {
    req.logOut();
  res.clearCookie("access_token");
  res.json({user:{username : "", email : ""}, success:true});

});

module.exports = userRouter;