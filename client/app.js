'use strict';

require.config({
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: '../node_modules/jquery/dist/jquery',
        underscore: '../node_modules/lodash/lodash',
        backbone: '../node_modules/backbone/backbone',
        text: '../node_modules/requirejs-text/text'
    }
});

/* --------------------------------------------- */

require([
    'backbone',
    'app/js/app.router.js',
    'app/js/modules/user/user.router.js',
    'app/js/modules/meme/meme.router.js'
], function (
        Backbone,
        AppRouter,
        UserRouter,
        MemeRouter
) {
    'use strict';

    //var vent = _.extend({}, Backbone.Events);
    //vent.trigger('something:show', {});
    //vent.on('', this.something, this);
/*    Backbone.sync = function(method, model, options)
    {
        console.log('backbone.sync---------------');
    };*/

    new AppRouter;

    /**
     * public routes
     * memes
     * memes/1
     * memes
     */
    new UserRouter();
    new MemeRouter();

    Backbone.history.start({
        //pushState: true,
        //root: "/public/search/",
        //hashChange: false
    });
    
});