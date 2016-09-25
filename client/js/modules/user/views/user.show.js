define([
    'jquery',
    'underscore',
    'backbone',
    'text!../templates/user.html'
],
    function ($, _, Backbone, template)
    {
        'use strict';

        var UserView = Backbone.View.extend({

            initialize: function() {
                this.render();
            },

            el: $('.container'),

            render : function() {
                var signIn = _.template(template, {});
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