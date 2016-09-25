define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var AuthService = Backbone.Model.extend({

        urlRoot: 'http://localhost:8069/github/meme_base_app/public/api/v1/get-auth-user',

        initialize: function () {
            this.on('change:name', function () {
                console.log('you changed your name.');
            });
        },

        defaults: {
            id: null,
            title: null,
            description: null,
            photo_url: null
        },

        validate: function(attributes)
        {
            // returns a boolean
        },

        parse: function(response)
        {
            response.data;
        },

        getAuthUser: function () {
            var defer = $.Deferred();
            ///console.log(this.get('name'), this.get('age'))
        }

    });

    return AuthService;
});