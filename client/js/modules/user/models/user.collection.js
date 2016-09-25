var UserCollection = Backbone.Collection.extend({
    initialize: function () {
        console.log('backbone model is created.');
    },

    defaults: {
        name: 'default',
        age: 10
    },

    url: 'http://localhost:8000/api/v1/blog'
});