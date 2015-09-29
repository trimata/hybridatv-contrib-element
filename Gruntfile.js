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

    version: {
      dist: {
        src: ['package.json'],
      },
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          flatten: true,
          src: 'src/base.js',
          dest: 'dist/' + grunt.file.readJSON('package.json').version,
        }],
      }
    },
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-version');

  grunt.registerTask('test', ['karma']);
  grunt.registerTask('build', function(arg) {
    arg = arg || 'patch';

    grunt.task.run([
      'version::' + arg,
      'copy',
    ]);
  });
};
