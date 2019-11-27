const nodemailer = require("nodemailer");

module.exports = function (_, passport, Admins, Users, async) {
    return {
        SetRouting: function (router) {
            router.get('/visitor/dash', this.visitorDash)
            router.get('/visitor/signup', this.localVisitorsignup);
            router.get('/visitor/dash/past', this.pastVisit);
            router.get('/logout', this.logout);
            router.get('/visitor/dash/settings', this.visitorSettings);

            router.post('/visitor/dash/settings/update', this.visitorUpdate);
            router.post('/checkin', this.checkin);
            router.post('/checkout', this.checkout);
            router.post('/visitor/signup', this.postVisitorSignUp);
        },
        visitorUpdate: function (req, res) {
            async.parallel([
                function (callback) {
                    console.log(req.body);
                    Users.update({
                        'email': req.body.visitorEmail
                    }, {
                        $set: {
                            "email": req.body.email,
                            "username": req.body.username,
                            "phone": req.body.phone
                        }
                    }, (err, count) => {
                        callback(err, count);
                    })
                    res.redirect('/visitor/dash/settings');

                }
            ])
        },
        visitorSettings: function (req, res) {
            res.render('visitor/visitorSettings', { user: req.user });
        },
        logout: function (req, res) {
            req.logout();
            req.session.destroy((err) => {
                res.redirect('/');
            });
        },

        // VISTOR SIGNUP AREA
        pastVisit: function (req, res) {
            if (req.user) {
                return res.render('visitor/pastVisits', { user: req.user });
            }
            else {
                res.redirect('/visitor/signup');
            }
        },
        visitorDash: function (req, res) {

            if (req.user) {

                async.parallel([
                    function (callback) {
                        Admins.find({}, (err, result) => {
                            callback(err, result);
                        })
                    },
                ], (err, results) => {
                    const res1 = results[0];
                    const res2 = results[1];
                    const res3 = results[2];
                    const dataChunk = [];
                    const chunkSize = 3;
                    for (let i = 0; i < res1.length; i += chunkSize) {
                        dataChunk.push(res1.slice(i, i + chunkSize));
                    }


                    return res.render('visitor/visitorDash', { user: req.user, data: res1 });
                })
            }
            else {
                res.redirect('/visitor/signup');
            }
        },
        localVisitorsignup: function (req, res) {
            res.render('visitor/visitorSignup');
        },
        postVisitorSignUp: passport.authenticate('local.signup', {
            successRedirect: '/visitor/dash',
            failiureRedirect: '/visitor/signup',
            failiureFlash: true
        }),


        // Check Out
        checkout: function (req, res) {


            Admins.findOne({ email: req.body.hostEmail }, function (err, foundHost) {
                if (err) {
                    console.log("An error occured, Description: " + err);
                } else {
                    console.log(req.body.visitorEmail);

                    if (foundHost) {
                        foundHost.visitors.push({
                            name: req.body.visitorName,
                            email: req.body.visitorEmail,
                            phone: req.body.visitorPhone
                        });
                        foundHost.save(function (err, data) {
                            if (err) {
                                console.log("An error occured, description: " + err);
                            }
                        })
                    }
                }
            });

            var accountSid = 'AC41800fe3df40a46a943a341a2d628fad';
            var authToken = '6d44b8f268ee1de262abf8a1ee081c09';
            var client = require('twilio')(accountSid, authToken);

            client.messages
                .create({
                    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
                    from: '+19169933224',
                    to: '+917355528616'
                })
                .then(message => console.log(message.sid));

            var time = getDateTime();
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'rvdubey.rvd@gmail.com',
                    pass: '@nainitaal'
                }
            });

            var time = getDateTime();
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'rvdubey.rvd@gmail.com',
                    pass: '@nainitaal'
                }
            });
            var intime;
            Users.findOne({ email: req.body.visitorEmail }, function (err, visitor) {
                console.log(visitor);
                if (visitor) {
                    intime = visitor.past[visitor.past.length - 1].time;
                }
                console.log("hey" + intime);

                var mailOptions = {
                    from: 'rvdubey.rvd@gmail.com',
                    to: req.body.visitorEmail,
                    subject: 'Check Out',
                    html: '<h1>Hi  ' + req.body.hostEmail + ' </h1><p>Check-Out time : ' + time + ' </h1><p>Check-Out time : ' + intime + '</p>'
                };

                transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                res.redirect('/visitor/dash');
            },
            );

        },

        // Check IN
        checkin: function (req, res) {

            Admins.findOne({ email: req.body.hostEmail }, function (err, foundHost) {
                if (err) {
                    console.log("An error occured, Description: " + err);
                } else {
                    console.log(req.body.visitorEmail);
                    Users.findOne({ email: req.body.visitorEmail }, function (err, visitor) {
                        console.log(visitor);
                        if (visitor) {
                            visitor.past.push({
                                name: foundHost.username,
                                time: getDateTime(),
                            });
                            visitor.save(function (err, data) {
                                if (err) {
                                    console.log("An error occured, description: " + err);
                                }
                            })
                        }
                    })

                }
            });


            var accountSid = 'AC41800fe3df40a46a943a341a2d628fad';
            var authToken = '6d44b8f268ee1de262abf8a1ee081c09';
            var client = require('twilio')(accountSid, authToken);

            client.messages
                .create({
                    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
                    from: '+19169933224',
                    to: '+917355528616'
                })
                .then(message => console.log(message.sid));

            var time = getDateTime();
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'rvdubey.rvd@gmail.com',
                    pass: '@nainitaal'
                }
            });

            var mailOptions = {
                from: 'rvdubey.rvd@gmail.com',
                to: req.body.hostEmail,
                subject: 'Check In',
                html: '<table style="width:100%"><tr><th>Visitor Name</th><th>Visitor Email</th><th>Visitor Phone Number</th><th>Check In time</th></tr><tr><td>' + req.body.visitorName + '</td><td>' + req.body.visitorEmail + '</td><td>' + req.body.visitorPhone + '</td><td>' + getDateTime() + '</td></tr></table>'
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log('Email sent: ' + info.response);
                }
            });
            res.redirect('/visitor/dash');
        }
    }
    function getDateTime() {

        var date = new Date();

        var hour = date.getHours();
        hour = (hour < 10 ? "0" : "") + hour;

        var min = date.getMinutes();
        min = (min < 10 ? "0" : "") + min;

        var sec = date.getSeconds();
        sec = (sec < 10 ? "0" : "") + sec;

        var year = date.getFullYear();

        var month = date.getMonth() + 1;
        month = (month < 10 ? "0" : "") + month;

        var day = date.getDate();
        day = (day < 10 ? "0" : "") + day;

        return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

    }
}
