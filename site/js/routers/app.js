define(['views/index'], function() {
  JSP.Routers.App = Backbone.Router.extend({
    initialize: function() {
      this.$el = $('.container');
    },
    routes: {
      '': 'index'
    },

    index: function() {
      var indexView = new JSP.Views.Index;
      this.$el.find('#code-editor').html(indexView.render().$el);
    }
  });
});
