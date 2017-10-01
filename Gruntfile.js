'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Pattern lab
    shell: {
      server: {
        command: 'php core/console --server'
      },
      generate: {
        command: 'php core/console --generate'
      }
    },

    sass: {
      options: {
        sourceMap: true,
        outputStyle: 'compressed',
        includePaths: ['node_modules/normalize-scss/sass']
      },
      dist: {
        files: {
          'source/css/style.css': 'source/scss/style.scss'
        }
      }
    },

    sass_globbing: {
      default_options: {
        files: {
          'source/scss/_patternMap.scss': 'source/_patterns/**/*.scss',
          'source/scss/_baseMap.scss': ['source/scss/settings/{,**/}*.scss', 'source/scss/base/{,**/}*.scss']
        },
        options: {
          useSingleQuotes: false
        }
      }
    },

    watch: {
      scss: {
        files: [
          'source/_patterns/**/*.scss',
          'source/scss/{,**/}*.scss'
        ],
        tasks: ['sass_globbing', 'sass']
      },
      css: {
        files: [
          'source/css/{,**/}*.css'
        ],
        tasks: ['generate']
      },
      twig: {
        files: [
          'source/_patterns/**/*.twig'
        ],
        tasks: ['generate']
      },
      options: {
      }
    }
  });

  grunt.registerTask('generate', ['shell:generate']);
  grunt.registerTask('server', ['shell:server']);
  grunt.registerTask('default', ['sass_globbing', 'sass', 'watch']);
};
