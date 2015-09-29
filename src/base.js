/* globals define, requirejs */

define([
  'hybridatv/core/class',
  'hybridatv/core/domtv',
], function(Class, $) {
  'use strict';

  var Element = Class.extend({
    init: function(el) {
      this.el = el;
      this.$el = $(el);
    },

    setData: function(prop, val) {
      this.$el.data(prop, val);

      return this;
    },

    getData: function(prop) {
      return this.$el.data(prop);
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
