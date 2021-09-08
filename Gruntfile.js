var pkg = require('./package.json');


//var seleniumServer = require('selenium-server');
var path = require('path');
var chromedriver = require('chromedriver');
var saucelabsUserName = process.env.Saucelabs_USER_NAME;
var saucelabsAccessKey = process.env.Saucelabs_ACCESS_KEY;
var browserstackUserName = process.env.CUP_Browserstack_USER_NAME;
var browserstackAccessKey = process.env.CUP_Browserstack_ACCESS_KEY;

module.exports = function (grunt) {

    grunt.initConfig({
        nightwatch: {
            options: {
                standalone: true,
                jar_version: '2.53.1',
                jar_path: 'node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.53.1.jar',
                config_path: './nemoReset/nightwatch.conf.js', // Update the path based on your application
                custom_commands_path: "",
                src_folders: ['./nemoReset/specs'], // Update the path based on your application
                page_objects_path: './nemoReset/pages/',   // path where page object files will be loaded from. Update the path based on your application
                test_runner: {
                    type: 'mocha'
                    // options : {
                    //     ui : 'bdd',
                    //     reporter : 'mochawesome',
                    //     reporterOptions: {
                    //         reportName: 'index',
                    //         reportDir: './reports'
                    //     }
                    // }
                },
                test_settings: {
                    chrome: {
                        selenium_host: '127.0.0.1',
                        selenium_port: 5554,
                        end_session_on_fail: true,
                        screenshots: {
                            enabled: true,
                            on_failure: true,
                            on_error: true,
                            path: './screenshots'
                        },

                        desiredCapabilities: {       // specify browser name along with other capabilities
                            browserName: 'chrome',
                            javascriptEnabled: true,
                            acceptSslCerts: true,
                            'chromeOptions': {
                                "args": ["start-maximized"]
                            }
                        },
                        cli_args: {
                            //   'webdriver.chrome.driver' : 'node_modules/chromedriver/lib/chromedriver/chromedriver.exe'
                            'webdriver.chrome.driver': chromedriver.path
                        }
                    },
                    firefox: {
                        selenium_host: '127.0.0.1',
                        selenium_port: 5554,
                        end_session_on_fail: false,
                        screenshots: {
                            enabled: true,
                            on_failure: false,
                            path: 'screenshots'
                        },

                        desiredCapabilities: {       // specify browser name along with other capabilities
                            browserName: 'firefox',
                            javascriptEnabled: true,
                            acceptSslCerts: true
                        }
                    },
                    detailedsaucelabs: {
                        selenium_host: 'ondemand.saucelabs.com',
                        selenium_port: '80',
                        end_session_on_fail: false,
                        screenshots: {
                            enabled: true,
                            on_failure: false,
                            path: 'screenshots'
                        },
                        username: saucelabsUserName,
                        access_key: saucelabsAccessKey,
                        desiredCapabilities: {       // specify browser name along with other capabilities
                            name: 'SmokeTest',
                            browserName: 'chrome',
                            version: "60",
                            javascriptEnabled: true,
                            acceptSslCerts: true,
                            platform: 'Win8',
                            "screen-resolution": '1920x1200'
                        }
                    },
                    smokeTest: {
                        selenium_host: '127.0.0.1',
                        selenium_port: 5554,
                        end_session_on_fail: true,
                        src_folders: ['./nemoReset/specs/healthChecks/healthCheck_Scenario1.spec.js'], // Update the path based on your application
                        screenshots: {
                            enabled: true,
                            on_failure: true,
                            on_error: true,
                            path: './screenshots'
                        },
                        desiredCapabilities: {  // specify browser name along with other capabilities
                            browserName: 'chrome',
                            javascriptEnabled: true,
                            acceptSslCerts: true,
                            'chromeOptions': {
                                //"args" : ['headless']
                                "args": ['start-maximized', 'no-sandbox', 'disable-dev-shm-usage']
                            }
                        },
                        cli_args: {
                            //  'webdriver.chrome.driver' : 'node_modules/chromedriver/lib/chromedriver/chromedriver.exe'
                            'webdriver.chrome.driver': chromedriver.path
                        }
                    }

                }
            }
        }
    });

    //Load grunt Tasks
    grunt.loadNpmTasks('grunt-nightwatch');

    grunt.registerTask('default', ['test']);

    //Grunt task to run nightwatch tests with test parameter
    grunt.registerTask('test', 'Runs e2e tests', function () {
        var testParam = grunt.option('testParam');
        grunt.task.run('nightwatch:' + testParam)
        if (grunt.option('testEnv')) {
            global.testEnv = grunt.option('testEnv')
        } else {
            global.testEnv = "thor"
        }

        if (grunt.option('count')) {
            global.count = grunt.option('count')
        } else {
            global.count = 1
        }
    });

};
