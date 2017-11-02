define([
    'adapt-contrib-core/js/adapt',
    'adapt-contrib-core/js/models/adaptModel'
], function (Adapt, AdaptModel) {

    var CourseModel = AdaptModel.extend({

        initialize: function(attrs, options) {
            AdaptModel.prototype.initialize.apply(this, arguments);
            Adapt.trigger('courseModel:dataLoading');

            this.url = options.url;

            this.loadData();
        },

        loadData: function() {
            var data = Adapt.dataLoader.findByFile(this.url)[0];
            this.set(data);
            _.defer(function() {
                this.loadedData();
            }.bind(this));
        },

        loadedData: function() {
            Adapt.trigger('courseModel:dataLoaded');
        },

        _children: "contentObjects"

    });

    return CourseModel;

});
