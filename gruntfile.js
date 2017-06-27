module.exports = function(grunt) {

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9001,
          base: './',
          keepalive: true
        }
      }
    },
    watch: {
      // targets
      less: {
        files: ['./less/styles.less'],
        tasks: ['less']
      }
    },
    less: {
      development: {
        files: {
          'css/styles.css': './less/styles.less'
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-less");

  grunt.registerTask('default', ["connect"]);
};
