define([
    'jquery',
    'underscore',
    'backbone',
    'js/modules/meme/models/meme.model'
], function ($, _, Backbone, MemeModel) {
    'use strict';

    var collection = Backbone.Collection.extend({

        model: MemeModel,

        initialize: function () {
            console.log('backbone collection initialized.');
        }

    });

    return collection;
});