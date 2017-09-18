'use strict';

module.exports = function (grunt) {

  grunt.initConfig({
    watch: {
      scss: {
        files: [
          'source/scss/{,**/}*.{scss,scss}',
          'source/_patterns/*/*/*.{scss,scss}'
        ],
        tasks: ['compass'],
        options: {}
      },
      images: {
        files: ['images/**']
      },
      css: {
        files: [
          'source/css/{,**/}*.css',
          'source/_patterns/**/*.twig'
        ],
        tasks: ['generate']
      }
    },

    compass: {
      options: {
        config: 'config.rb',
        bundleExec: true,
        force: true
      },
      dev: {
        options: {
          environment: 'development'
        }
      }
    },

    shell: {
      server: {
        command: 'php core/console --server'
      },
      generate: {
        command: 'php core/console --generate'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('generate', ['shell:generate']);
  grunt.registerTask('server', ['shell:server']);
  grunt.registerTask('default', ['server']);
};