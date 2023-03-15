module.exports = function (grunt) {
  // Load automatically all tasks without using grunt.loadNpmTasks()
  // for each module
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    /*
     * LESS task configuration
     */
    less: {
      dist: {
        files: {
          'src/style/style.css': [
            // <== Write here the path to the compiled CSS
            'src/style/style.less', // <== Write here the path to the LESS file(s)
          ],
        },
        options: {
          compress: true, // This option minimizes the CSS
        },
      },
    },

    /*
     * Watch task configuration
     */
    watch: {
      less: {
        files: [
          'src/style/*.less', // <== Write here the files that Grunt must watches
        ],
        tasks: ['less'],
      },
    },
  });

  /*
   * Registered tasks
   */
  grunt.registerTask('default', ['less']);
};
