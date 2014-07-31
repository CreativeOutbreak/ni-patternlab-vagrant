module.exports = function(grunt) {

    // Configuration 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {                    // Task
            dist: {                   // Target
                options: {            // Target options
                    sassDir: 'scss',
                    cssDir: ['output/css', 'css'],
                    environment: 'production'
                }
            }
        },
        watch: {
            css: {
                files: ['scss/**/*.scss', 'scss/*.scss'],
                tasks: ['compass'],
                options: {
                    spawn: true 
                }
           }

        }
    });

    // Plugins
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    
        
    // Tasks
    grunt.registerTask('default', ['watch']);
    };
