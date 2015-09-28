/* globals module */

module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    karma: {
      options:{
        basePath: '.',
        frameworks: ['jasmine', 'requirejs'],
        files: [
          { pattern: 'src/**/*.js', included: false },
          { pattern: 'test/spec/**/*.js', included: false },
          { pattern: 'bower_components/requirejs/**/*.js', included: false },
          { pattern: 'bower_components/sizzle/**/*.js', included: false },

          'test/config.js'
        ],

        autoWatch: true,
        reportSlowerThan: 3000,
        logLevel: 'ERROR',

        browsers: [
          'PhantomJS',
        ],
      },

      unit: {
        singleRun: true,
      },
    },
  });

  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('test', ['karma']);
};
