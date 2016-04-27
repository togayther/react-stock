module.exports = function(grunt) {
    // 配置
	grunt.file.defaultEncoding = 'utf8';

    grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

        buildPath : 'build/www',

        banner: '/*!\n' +
            ' * Finland v<%= pkg.version %> (<%= pkg.repository %>)\n' +
            ' * Copyright 2016-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * This file is created by grunt\n' +
            ' */\n',
        sass: {
            dist: {
                files: {
                    'asset/css/main.css': 'asset/sass/app.scss'
                },
                options: {
                    sourcemap: 'true'
                }
            }
        },    
		concat:{
            dist : {
                src: [
					'asset/css/weui.min.css',
					'asset/css/iconfont.css',
                    'asset/css/main.css'
				],
                dest: 'asset/css/bundle.css'
            }
        },
		cssmin: {
            options: {
                keepSpecialComments: 0,
                banner: '<%= banner %>'
            },
            dist: {
                src: ['<%= concat.dist.dest %>'],
                dest: '<%= buildPath %>/css/bundle.min.css'
            }
        },
		uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: { 
                src: ['dist/js/bundle.js'],
                dest: '<%= buildPath %>/js/bundle.min.js'
            }
        },
        copy: {
            dist: {
                files: [{
                    expand: true,
                    filter: 'isFile',
                    cwd: 'asset/fonts/',
                    src: ['**'],
                    dest: '<%= buildPath %>/fonts/'
                },{
                    expand: true,
                    cwd: 'asset/img/',
                    filter: 'isFile',
                    src: ['**'],
                    dest: '<%= buildPath %>/img/'
                }]
            }
        },
        autoprefixer: {
          options: {
            browsers: [
              "Android 2.3",
              "Android >= 4",
              "Chrome >= 20",
              "Firefox >= 24",
              "Explorer >= 8",
              "iOS >= 6",
              "Opera >= 12",
              "Safari >= 6"
            ]
          },
          core: {
            src: ['<%=concat.dist.dest%>']
          }
        }
    });

    //加载本地自定义任务 ()
    //grunt.loadTasks('tasks');
	
    grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');

    //样式任务
    grunt.registerTask('build-css', ['sass:dist', 'concat:dist', 'autoprefixer:core', 'cssmin:dist']);

    //脚本任务
    grunt.registerTask('build-js', ['uglify:dist']);

    //文件任务
    grunt.registerTask('build-file', ['copy:dist']);

    // 默认任务
    grunt.registerTask('build', ['build-css', 'build-js', 'build-file']);
};