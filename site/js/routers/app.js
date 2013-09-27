JSP.Routers.App = Backbone.Router.extend({
  initialize: function() {
    this.$el = $('.container')
  },
  routes: {
    '': 'index'
  },

  index: function() {
    console.log("index")
  }
});
