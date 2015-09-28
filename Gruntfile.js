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
          { pattern: 'hybridatv/dist/**/*.js', included: false },

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

    clean: {
      dist: {
        src: 'dist',
      },
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          flatten: true,
          src: 'src/base.js',
          dest: 'dist/',
        }],
      }
    },
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('test', ['karma']);
  grunt.registerTask('build', [
    'clean',
    'copy',
  ]);
};
