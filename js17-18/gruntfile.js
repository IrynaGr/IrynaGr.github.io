/*module.exports = function(grunt) {


  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.min.js'
      }
      dist: {
        src: ['css/src/*.css'],
        dest: 'css/dist/style.main.min.css'
      }
    },
    uglify: {
      dist: {
        src: ['js/dist/script.main.min.js'],
        dest: 'js/dist/script.main.min.js'
      }
    },
    cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'release/css',
      src: ['*.css', '!*.min.css'],
      dest: 'release/css',
      ext: '.min.css'
    }]
  }
}
       
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};*/

module.exports = function(grunt) {

  grunt.initConfig({

   //pkg: grunt.file.readJSON('package.json'),

   concat:{
    option:{
      separator:';'
    },
    dist:{
      src:['js/src/*.js'],
      dest: 'js/dist/script.main.min.js'
    }
   },
   concat:{
    option:{
      separator:';'
    },
    dist:{
      src:['css/*.css'],
      dest: 'css/dist/style.main.css'
    }
   },
   uglify:{
    dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.min.js'
      }
   },
   cssmin:{
    dist:{
      src:['css/dist/style.main.css'],
      dest: 'css/dist/style.main.min.css'
    }
   }

  });
 
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};