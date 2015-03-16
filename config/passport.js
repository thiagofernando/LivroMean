/**
 * Created by ThiagoFernando on 15/03/2015.
 */
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
//var findOrCreate = require('mongoose-findorcreate');
var mongoose = require('mongoose');

module.exports = function() {

    var Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy ({
        clientID:'948f3b68d97eeeca0dce',
        clientSecret:'aaaba20566a2d4b31fe008b08a77384bf715c45e',
        callbackURL:'http://localhost:3000/auth/github/callback'
    },function(acessToken,refreshToken, profile, done) {
            Usuario.findOrCreate(
                {"login" : profile.username},
                {"nome" : profile.username},
                function(erro, usuario) {
                    if(erro) {
                        console.log(erro);
                        return done(erro);
                    }
                    return done(null, usuario);
                }
            )

        }
    ));

    passport.serializeUser(function(usuario, done) {
                done(null, usuario._id);
    });

    passport.deserializeUser(function(id, done) {
        Usuario.findById(id).exec()
            .then(function(usuario) {
                done(null, usuario);
            });
    });
}