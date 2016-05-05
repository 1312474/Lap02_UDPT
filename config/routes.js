
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var home = require('home');
var login =require('login');
var signup = require('signup');


/**
 * Expose
 */

module.exports = function (app, passport) {

  app.get('/', home.index);
  app.get('/login',login.index);
  app.get('/signup',signup.index);
  app.post('/signup', signup.signup);  
  app.post('/login', login.login);
  /**
   * Error handling
   */

  app.use(function (err, req, res, next) {
    // treat as 404
    if (err.message
      && (~err.message.indexOf('not found')
      || (~err.message.indexOf('Cast to ObjectId failed')))) {
      return next();
    }
    console.error(err.stack);
    // error page
    res.status(500).render('500', { error: err.stack });
  });

  // assume 404 since no middleware responded
  app.use(function (req, res, next) {
    res.status(404).render('404', {
      url: req.originalUrl,
      error: 'Not found'
    });
  });
};
