define([
    'jquery',
    'underscore',
    'backbone',
    'text!../templates/meme.create.html',
    'js/modules/meme/models/meme.model'
], function ($, _, Backbone, template, MemeModel) {
    'use strict';

    var view = Backbone.View.extend({

        initialize: function(attributes) {
            this.render(attributes);
        },

        el: $('.container'),

        render : function(attributes) {
            var the_template = _.template(template)({});

            this.$el.html(the_template);
        },

        clickedButton: function(event) {
            var data = {};
            $('form.ajax').find('[name]').each(function(key1, value1) {

                var key = $(this).attr('name');
                var value = $(this).val();

                data[key] = value;
            });

            ///new MemeModel.save(data);
            var meme = new MemeModel(data);
            meme.save({
                user_id: 1
            });
            console.log(data);
            return false;
        },

        events: {
            "click #createMeme": "clickedButton"
        }

    });

    return view;
});