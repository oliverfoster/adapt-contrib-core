define([
    'adapt-contrib-core/js/adapt'
], function(Adapt) {

    var AdaptCollection = Backbone.Collection.extend({
        initialize : function(models, options){
            this.url = options.url;
            
            this.once('reset', this.loadedData, this);
            if (this.url) {
                this.reset(Adapt.dataLoader.findByFile(this.url));
            }
        },

        loadedData: function() {
            _.defer(function() {
                Adapt.trigger('adaptCollection:dataLoaded');
            });
        }

    });

    return AdaptCollection;

});
