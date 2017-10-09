require.config({
    paths: {
        jquery: 'empty:',
        underscore: 'empty:',
        backbone: 'empty:',
        modernizr: 'empty:',
        handlebars: 'empty:',
        velocity: 'empty:',
        imageReady: 'empty:',
        inview: 'empty:',
        a11y: 'empty:',
        scrollTo: 'empty:',
        libraries: 'empty:',
        bowser: 'empty:',
        'core/js/libraries/bowser': 'empty:',
        'coreJS/libraries/bowser': 'empty:'
    },
    map: {
        '*': {
            components: '',
            extensions: '',
            theme: '',
            menu: '',
            core: 'adapt-contrib-core',
            coreJS: 'adapt-contrib-core/js',
            coreViews: 'adapt-contrib-core/js/views',
            coreModels: 'adapt-contrib-core/js/models',
            coreHelpers: 'adapt-contrib-core/js/helpers'
        },
        'adapt-contrib-core/js/app': {
            'plugins': 'empty:'
        }
    }
});