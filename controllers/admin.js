const nodemailer = require("nodemailer");

module.exports = function (_, passport, Admins, Users, async) {
    return {
        SetRouting: function (router) {
            router.get('/', this.index);
            router.get('/admin/dash', this.adminDash);
            router.get('/admin/signup', this.localadminsignup);
            router.get('/logout', this.logout);
            router.get('/admin/dash/settings', this.adminSettings);
            router.get('/admin/login', this.localadminLogin);

            router.post('/admin/dash/settings/update', this.adminUpdate);
            router.post('/admin/login', this.postadminLogin);
            router.post('/admin/signup', this.postadminSignUp);
        },
        localadminLogin: function(req,res){
            res.render('host/adminLogin');
        },
        postadminSignUp:function(req,res){

        },
        adminSettings:function(req,res){
            res.render('host/adminSettings', { user: req.user });

        },
        adminUpdate: function (req, res) {
            async.parallel([
                function (callback) {
                    console.log(req.body);
                    Admins.update({
                        'email': req.body.visitorEmail
                    }, {
                        $set: {
                            "email": req.body.email, 
                            "username":req.body.username,
                            "phone":req.body.phone
                        }
                    }, (err, count) => {
                        callback(err, count);
                    })
                    res.redirect('/admin/dash/settings');

                }
            ])
        },
        index: function (req, res) {
            res.render('index');
        },

        logout: function (req, res) {
            req.logout();
            req.session.destroy((err) => {
                res.redirect('/');
            });
        },

        //admin SIGNUP AREA

        postadminLogin: passport.authenticate('local.Adminlogin', {
            successRedirect: '/admin/dash',
            failureRedirect: '/admin/login',
            failureFlash: true
        }),
        adminDash: function (req, res) {
            console.log(req.user);
            if (req.user) {
                res.render('host/adminDash', { user: req.user });
            }
            else {
                res.redirect('/admin/signup');
            }
        },
        localadminsignup: function (req, res) {
            res.render('host/adminSignup');
        },
        postadminSignUp: passport.authenticate('local.adminSignup', {
            successRedirect: '/admin/dash',
            failiureRedirect: '/admin/signup',
            failiureFlash: true
        }),
    }

}
