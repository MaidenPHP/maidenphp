var UserModel = Backbone.Model.extend({
    initialize: function () {
        console.log('backbone model is created.');

        this.on('change:name', function () {
            console.log('you changed your name.');
        });
    },

    defaults: {
        name: 'johny',
        age: 10
    },

    urlRoot : 'http://localhost:8000/api/v1/blog',

    getNameAndAge: function() {
        console.log(this.get('name'), this.get('age'))
    }
});