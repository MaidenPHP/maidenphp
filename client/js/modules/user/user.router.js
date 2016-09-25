define([
    'jquery',
    'underscore',
    'backbone',
    'js/modules/user/views/user.show'
],
    function($, _, Backbone, UserShowView)
    {
        var UserRouter = Backbone.Router.extend({

            initialize: function()
            {
                console.log('----------------------');
                console.log('----- user.router ----');
                console.log('----------------------');
            },

            routes: {
                '': function () {},
                "user" : "user"
            },

            user: function () {

                return this.navigate('#/memes');
                //return new UserShowView;
            }
        });

    return UserRouter;
});
