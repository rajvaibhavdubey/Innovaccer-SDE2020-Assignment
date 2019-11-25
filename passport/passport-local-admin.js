'use strict';

const passport = require('passport');
const Admin = require('../models/admin');
const LocalStrategy = require('passport-local').Strategy;

passport.serializeUser((admin, done) => {
    done(null, admin.id);
});

passport.deserializeUser((id, done) => {
    Admin.findById(id, (err, admin) => {
        done(err, admin);
    });
});

passport.use('local.adminSignup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {

    Admin.findOne({ 'email': email }, (err, admin) => {
        if (err) {
            return done(err);
        }

        if (admin) {
            return done(null, false, req.flash('error', 'User with email already exist'));
        }

        const newAdmin = new Admin();
        newAdmin.username = req.body.username;
        newAdmin.fullname = req.body.username;
        newAdmin.email = req.body.email;
        newAdmin.address = req.body.address;
        newAdmin.phone = req.body.contact;
        newAdmin.password = newAdmin.encryptPassword(req.body.password);

        newAdmin.save((err) => {
            done(null, newAdmin);
        });
    });
}));

passport.use('local.login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, (req, email, password, done) => {

    User.findOne({ 'email': email }, (err, user) => {
        if (err) {
            return done(err);
        }

        const messages = [];
        if (!user || !user.validUserPassword(password)) {
            messages.push('Email Does Not Exist or Password is Invalid');
            return done(null, false, req.flash('error', messages));
        }

        return done(null, admin);
    });
}));