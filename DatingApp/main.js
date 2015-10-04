//http://stepansuvorov.com/blog/2012/10/%D0%B7%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D1%87%D0%B8%D0%BA-%D0%BC%D0%BE%D0%B4%D1%83%D0%BB%D0%B5%D0%B9-requirejs/

// Filename: main.js

require.config({
  baseUrl: '/',
  paths: {
    angular: 'bower_components/angular/angular',
    route: 'bower_components/angular-route/angular-route',
    underscore: 'bower_components/underscore/underscore',
    app : 'app',
  },
  shim: {
          app: {
            exports : 'app'
          },
          angular: {
              exports: "angular"
          },
          route: {
             exports: "route",
             deps: ['angular']
          },
          underscore : {
            exports: '_'
          }
      }
});

require(['app'], function (app) {
  app.init();
});