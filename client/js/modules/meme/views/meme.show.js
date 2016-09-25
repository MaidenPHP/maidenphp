define([
    'jquery',
    'underscore',
    'backbone',
    'text!../templates/meme.show.html'
], function ($, _, Backbone, template) {
    'use strict';

    var view = Backbone.View.extend({

        initialize: function(attributes) {
            this.render(attributes);
        },

        el: $('.container'),

        render : function(attributes) {

            console.log(attributes.model.message);
            var the_template = _.template(template)({
                meme: attributes.model.data
            });

            this.$el.html(the_template);
        },

        clickedButton: function(e) {
            alert('hey u pressed something');
        },

        events: {
            "click #button1": "clickedButton"
        }

    });

    return view;
});