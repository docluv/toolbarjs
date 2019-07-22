module.exports = function ( grunt ) {

    // Project configuration.
    grunt.initConfig( {
        lint: {
            all: [ 'grunt.js', 'js/debug/*.js' ]
        },
        jshint: {
            options: {
                browser: true
            }
        },
        min: {
            helper: {
                src: [
                    'demo/js/debug/helper.js',
                    'demo/js/debug/helper.extensions.js'
                ],
                dest: 'dist/helper.min.js'
            },

            dist: {
                src: [
                    'demo/js/debug/toolbar.js'
                ],
                dest: 'dist/toolbar.min.js'
            }
        },
        concat: {
            license: {
                src: [ 'js/debug/license.txt',
                    'js/deep-tissue.min.js'
                ],
                dest: 'js/deep-tissue.min.js',
                separator: ';'
            }

        }
    } );


    // Default task.
    grunt.registerTask( 'default', [ /*"lint",*/ 'min' ] );

};