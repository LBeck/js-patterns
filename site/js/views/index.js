define(['lib/mustache', 'lib/chai', 'lib/codemirror', 'lib/mocha'], function(Mustache, chai) {
  JSP.Views.Index = Backbone.View.extend({
    events: {
      'submit form': 'runTest'
    },

    render: function() {
      var template = Mustache.render($("#codemirror").html());
      this.$el.html(template);
      this.renderEditor();
      this.setupMocha();
      this.runTest();
      return this;
    },

    renderEditor: function() {
      this.editor = CodeMirror.fromTextArea(this.$('textarea#editor')[0], {
        lineNumbers: true,
        styleActiveLine: true,
        matchBrackets: true,
        theme: 'twilight'
      });
    },

    setupMocha: function() {
      mocha.setup('bdd');
      mocha.checkLeaks();
      mocha.globals(['jQuery']);
      var test = "it('has init function', function(){ \
                    expect(Menu.init).to.be.a('function');}); \
it('has options as an object', function () { \
  expect(Menu.options).to.be.a('object'); \
});";
      eval(test);
      var expect = chai.expect;
      mocha.setup('bdd');
    },

    runTest: function() {
      event.preventDefault();
      this.clearPreviousResults();
      eval(this.editor.getValue());
      mocha.bail();
      mocha.run();

    },

    clearPreviousResults: function() {
      $('#mocha').html('');
    }
  })
});
