requirejs.config({
  baseUrl: 'js',
  paths: {
    jquery: 'lib/jquery.min',
    collections: 'collections',
    models: 'models',
    views: 'views',
    templates: 'templates',
    routers: 'routers',
    helpers: 'helpers',
    mixins: 'mixins'
  },
  shim: {
    'lib/underscore': {
      exports: '_'
    },
    'lib/backbone': {
      deps: ["lib/underscore", "jquery"],
      exports: 'Backbone'
    },
    'lib/backbone.forms': {
      deps: ["lib/backbone"],
      exports: 'Backbone.Form'
    }
  }
});

requirejs(['jquery', 'lib/underscore', 'lib/backbone', 'js_patterns'], function() {
  JSP.initialize();
});
