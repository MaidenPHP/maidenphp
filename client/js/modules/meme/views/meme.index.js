define([
    'jquery',
    'underscore',
    'backbone',
    'text!../templates/meme.index.html'
], function ($, _, Backbone, template)
    {
        'use strict';

        var UserView = Backbone.View.extend({

            initialize: function(attributes) {
                this.render(attributes);
            },

            el: $('.container'),

            render: function(attributes) {
                var signIn = _.template(template)({
                    memes: attributes
                });
                this.$el.html(signIn);
            },

            clickedButton: function(e) {
                alert('hey u pressed something');
            },

            events: {
                "click #button1": "clickedButton"
            }

        });

        return UserView;
});