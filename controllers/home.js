
module.exports = function (passport) {
    return {
        SetRouting: function (router) {
            router.get('/', this.index);
            router.get('/visitorSignup', this.localVisitorsignup);

            router.post('/visitorSignup', this.postVisitorSignUp);
        },
        index: function (req, res) {
            if (req.user) {
                res.render('index', { user: req.user });
            }
            else {
                res.redirect('/visitorSignup');
            } 
        },
        
        // VISTOR SIGNUP AREA

        localVisitorsignup: function (req, res) {
            res.render('visitorSignup');
        },
        postVisitorSignUp: passport.authenticate('local.signup', {
            successRedirect: '/',
            failiureRedirect: '/visitorSignup',
            failiureFlash: true
        }),


        //HOST SIGNUP AREA
    }
}
