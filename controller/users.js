const User = require("../models/user");

module.exports.renderSignup = (req, res) => {
    res.render("./users/signup.ejs");
}

module.exports.completeSignup = async (req, res, next) => {
    try {
        let { username, email, password } = req.body;
        const newUser = new User({ email, username });
        let registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {
            if (err) {
                next(err)
            }
            username = username.charAt(0).toUpperCase() + username.slice(1);
            req.flash("success", `Welcome to Vibnb, ${username}`);
            res.redirect("/listings")
        })
    } catch (e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}

module.exports.renderLogin =  (req, res) => {
    res.render("./users/login.ejs");
}

module.exports.completeLogin = async(req, res) => {
    let { username } = req.body;
    username = username.charAt(0).toUpperCase() + username.slice(1);
    req.flash("success", `${username}, Welcome back to Vibnb `);
    let redirectUrl = res.locals.redirectUrl || "/listings";
    return res.redirect(redirectUrl);
}

module.exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err)
        }
        req.flash("error", "You have been LoggedOut now!");
        res.redirect("/listings")
    })
}