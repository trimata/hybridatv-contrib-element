/* globals define, requirejs */

define([
  'hybridatv/core/class',
], function(Class) {
  'use strict';

  return Class.extend({
   init: function(el, config) {
      this._el = el;
      this._config = config || {};
      this._listeners = {};
      el._el = this;
    },

    //always use this method since prop can be changed
    raw: function() {
      return this._el;
    },

    config: function() {
      return this._config;
    },

    on: function(evtName, handler) {
      var fn = this._listeners[evtName];
      var newFn;

      if (typeof fn === 'function') {
        this.raw().removeEventListener(evtName, fn);
        newFn = function(evt) {
          fn(evt);
          handler(evt);
        };
        this._listen(evtName, newFn);
      } else {
        this._listen(evtName, handler);
      }

      return this;
    },

    _listen: function(evtName, handler) {
      this.raw().addEventListener(evtName, handler);
      this._listeners[evtName] = handler;
    },

    off: function(evtName) {
      var fn = this._listeners[evtName];

      if (typeof fn === 'function') {
        this.raw().removeEventListener(evtName, fn);
      }

      return this;
    },

  });
});
