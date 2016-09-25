define([
    'jquery',
    'underscore',
    'backbone',
    'js/modules/meme/views/meme.index',
    'js/modules/meme/views/meme.show',
    'js/modules/meme/views/meme.create',
    'js/modules/meme/views/meme.edit',
    'js/modules/meme/models/meme.model'
], function($, _, Backbone,
            MemeIndexView, MemeShowView, MemeCreateView, MemeEditView,
            MemeModel
) {
    'use strict';

    var router = Backbone.Router.extend({

        initialize: function()
        {
            console.log('----------------------');
            console.log('----- meme.router ----');
            console.log('----------------------');
        },

        routes: {
            "memes": "getAllMemes",
            "memes/create": "createMeme",
            "memes/:id": "getMemeById",
            "memes/edit/:id": "editMemeById"
        },

        getAllMemes: function ()
        {
            new MemeModel()
                .fetch()
                .then(function(response) {
                    //console.log(JSON.stringify(response.data, null, '\t'));
                    return new MemeIndexView(response.data);
                })
        },

        createMeme: function()
        {
            return new MemeCreateView();
        },

        getMemeById: function (id)
        {
            new MemeModel({id: id})
                .fetch()
                .then(function(response) {
                    console.log(1);
                    return new MemeModel({id: 1}).fetch();
                })
                .then(function(response) {
                    console.log(2);
                    return response;
                })
                .then(function(response) {
                    console.log(3);
                    return new MemeShowView({
                        id: id,
                        model: response
                    });
                }, function handleError(xhr, status, error) {
                    console.log(error);
            });
        },

        editMemeById: function(id)
        {
            new MemeModel({id: id})
                .fetch()
                .then(function(response) {
                    console.log(3);
                    return new MemeEditView({
                        id: id,
                        model: response
                    });
                });
        }

    });

    return router;
});
