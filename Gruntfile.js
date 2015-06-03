module.exports = function(grunt) {

grunt.initConfig({

  exec: {
    build: {
      cmd: 'jekyll build'
    },
    serve: {
      cmd: 'jekyll serve '
    },
    deploy: {
      cmd: 'rsync --progress -a --delete -e "ssh -q" _site/ myuser@host:mydir/'
    }
  }
});


grunt.loadNpmTasks('grunt-exec');

grunt.registerTask('default', [ 'exec:build' ]);
grunt.registerTask('deploy', [ 'default', 'exec:deploy' ]);

};
