module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: {
          "index.html": "index.jade"
        }
      }
    },

    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.sass'],
          dest: './css',
          ext: '.css'
        }]
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      jade: {
        files: '**/*.jade',
        tasks: ['jade'],
      },
      sass: {
        files: '**/*.sass',
        tasks: ['sass'],
      }      
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['watch', 'jade', 'sass']);
};
