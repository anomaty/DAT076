var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');
var admin = require('../models/admin.js');
var employee = require('../models/admin.js');

module.exports = function(passport){

  passport.serializeUser(function(user, done) {
    console.log("serializing " + user.username);
    done(null, user);
  });

  passport.deserializeUser(function(obj, done) {
    console.log("deserializing " + obj);
    done(null, obj);
  });

  passport.use('local-signin',new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true
      },
    function(req, username, password, done) {
      admin.findOne({
        where: {
          'username': username
        }
      }).then(function (user) {
        if (user == null) {
          return done(null, false, req.flash('message','No user found'));
        }

        if (bcrypt.compareSync(password, user.password)) {
          return done(null, user)
        }

        return done(null, false, req.flash('message','Wrong password'));
      })
    }
  ))

  passport.use('local-signup', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true
  },
  function (req, username, password, done){
  admin.findOne({
    where: {
      'username' : username
    }
  }).then(function(user) {
    if(user != null) {
      return done(null,false, req.flash('message','That username is already in use') );
    } else {

      admin.create({
        username: username,
        password: bcrypt.hashSync(password,null,null)
      }).then(function(user) {
        return done(null, user, req.flash('message','User created'));
      })
    }
  }
)}
))
};
