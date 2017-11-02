define([
    'adapt-contrib-core/js/adapt'
], function (Adapt) {

    var ConfigModel = Backbone.Model.extend({

        defaults: {
            screenSize : {
                small: 520,
                medium: 760,
                large: 1024
            },
            _forceRouteLocking: false,
            _canLoadData: true,
            _disableAnimation: false
        },

        initialize: function(attrs, options) {
            this.url = options.url;
            // Fetch data & if successful trigger event to enable plugins to stop course files loading
            // Then check if course files can load
            // 'configModel:loadCourseData' event starts the core content collections and models being fetched
            this.listenToOnce(Adapt, "dataloader:ready", this.loadData);
        },

        loadData: function() {
            var data = Adapt.dataLoader.findByFile(this.url)[0];
            this.set(data);
            _.defer(function() {
                Adapt.trigger('configModel:dataLoaded');
                if (this.get('_canLoadData')) {
                    Adapt.trigger('configModel:loadCourseData');
                }
                if(this.get('_defaultDirection')=='rtl'){//We're going to use rtl style
                    $('html').addClass('dir-rtl');
                }
                // check if animations should be disabled
                var disableAnimationArray = this.get('_disableAnimationFor');
                if (disableAnimationArray && disableAnimationArray.length > 0) {
                    for (var i=0; i < disableAnimationArray.length; i++) {
                        if ($("html").is(disableAnimationArray[i])) {
                            this.set('_disableAnimation', true);
                            console.log('Animation disabled.');
                        }
                    }
                }
            }.bind(this));
        }

    });

   return ConfigModel;

});
