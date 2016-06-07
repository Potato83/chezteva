module.exports = function(grunt) {
grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      dist: {
        options: {
           banner: '/*! http://sammypotato.com */'
        },
        files: {
           'build/css/style.min.css': ['assets/css/*.css']
        }
      }
    },

    uglify: {
      build: {
        src: 'assets/js/main.js',
        dest: 'build/js/main.min.js'
      }
    },

    imagemin: {
      dist: {
          options: {
            optimizationLevel: 5
          },
          files: [{
             expand: true,
             cwd: 'assets/img',
             src: ['**/*.{png,jpg,gif}'],
             dest: 'build/img/'
          }]
       }
    },
      watch: {
        css: {
          // triggers a soft CSS only refresh
          files: 'assets/**/*.css',
          tasks: ['cssmin'],
          spawn: false,
          options: { livereload: true }
        },
        js_output: {
          // triggers a soft JS only refresh
          files: '**/*.js',
          tasks: ['uglify'],
          spawn: false,
          options: { livereload: true }
        },
        php:  {
          files: ['**/*.php'],
          options: { livereload: true }
        }
      }
      
    });

// Where we tell Grunt we plan to use this plug-in.
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-imagemin');

// Where we tell Grunt what to do when we type "grunt" into the terminal.
grunt.registerTask('default', ['watch']);
grunt.registerTask('img', 'imagemin');
};

