require.config({
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