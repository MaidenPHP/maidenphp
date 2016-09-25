define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone)
    {
        var router = Backbone.Router.extend({

            execute: function(callback, args, name) {
                console.log(callback);
                console.log(args);
                console.log(name);
            },

            initialize: function()
            {
                console.log('----------------------');
                console.log('----- app.router -----');
                console.log('----------------------');
            },

            routes: {
                '': function () {
                    console.log('home');
                }
            }
        });

        return router;
    });
