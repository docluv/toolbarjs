module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        lint: {
            all: ['grunt.js', 'js/debug/*.js']
        },
        jshint: {
            options: {
                browser: true
            }
        },
        min: {
            helper: {
                src: [
                    'js/debug/helper.js',
                    'js/debug/helper.extensions.js'
                    ],
                dest: 'helper.min.js'
            },

            dist: {
                src: [
                    'js/debug/toolbar.js'],
                dest: 'toolbar.min.js'
            }
        },
        concat: {
            license: {
                src: ['js/debug/license.txt',
                'js/deep-tissue.min.js'
                ],
                dest: 'js/deep-tissue.min.js',
                separator: ';'
            }

        }
    });


    // Default task.
    grunt.registerTask('default', [/*"lint",*/'min']);

};