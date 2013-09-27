window.JSP = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {},

  initialize: function(data) {
    requirejs(['routers/app'], function() {
      JSP.appRouter = new JSP.Routers.App;
      if (!Backbone.history.started) {
        Backbone.history.start();
        Backbone.history.started = true;
      }
    })
  }
}
