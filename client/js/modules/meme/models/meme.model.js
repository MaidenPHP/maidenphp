define([
    'jquery',
    'underscore',
    'backbone'
], function ($, _, Backbone) {
    'use strict';

    var model = Backbone.Model.extend({

        urlRoot: 'http://localhost:8069/github/meme_base_app/public/api/v1/memes',

        initialize: function () {
            console.log('backbone model is created.');

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

        // meme.set('age', 27)
        getNameAndAge: function () {
            ///console.log(this.get('name'), this.get('age'))
        }

    });

    return model;
});