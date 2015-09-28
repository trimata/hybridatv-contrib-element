/* globals define, requirejs */

define([
  'hybridatv/core/class',
  'hybridatv/core/domtv',
  'module',
], function(Class, $, module) {
  'use strict';

  // FIXME get the correct path
  requirejs.config({
    paths: {
      'components/element': module.uri,
    }
  });

  var Element = Class.extend({
    init: function(el) {
      this.el = el;
      this.$el = $(el);
    },

    setData: function(prop, val) {
      this.$el(prop, val);

      return this;
    },

    getData: function(prop) {
      return this.$el(prop);
    },

    destroy: function() {
      this.$el.destroy();

      return this;
    },

    show: function() {
      this.$el.show();

      return this;
    },

    hide: function() {
      this.$el.hide();

      return this;
    },

    type: 'Hb-Element',
  });

  return Element;
});
