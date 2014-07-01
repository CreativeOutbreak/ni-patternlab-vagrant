module.exports = function(grunt) {

    // Configuration 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            patternlab: {
                command: "php core/builder.php -wr"
            },
        },
        compass: {                    // Task
            dist: {                   // Target
                options: {            // Target options
                    sassDir: 'source/scss',
                    cssDir: 'public/css',
                    environment: 'production'
                }
            }
        },
        watch: {
            html: {
                files: ['source/_patterns/**/*.mustache', 'source/_patterns/**/*.json', 'source/_data/*.json'],
                tasks: ['shell:patternlab'],
                options: {
                    nospawn: true 
                }
            },
            css: {
                files: ['source/scss/**/*.scss', 'source/scss/*.scss'],
                tasks: ['compass'],
                options: {
                    spawn: true 
                }
           }

        },
        parallel: {
          html: {
            options: {
              stream: true
            },
            tasks: [{
              grunt: true,
              args: ['watch:html']
            }, {
              grunt: true,
              args: ['watch:css']
            }]
          },
        }
    });

    // Plugins
    grunt.loadNpmTasks('grunt-parallel');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-compass');
    
    grunt.registerTask('dev', 'launch webserver and watch tasks', [
    'parallel:html',
  ]);
    
    // Tasks
    grunt.registerTask('default', ['dev']);
    };
