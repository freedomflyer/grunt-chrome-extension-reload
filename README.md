# grunt-chrome-extension-reload

> Reloads open chrome extension tabs (chrome://extensions) to ease the monotony of chrome extension development. Uses prasmussen's [chrome-cli](https://github.com/prasmussen/chrome-cli) to interface with Chrome.

## Getting Started
This plugin requires Grunt `~0.4.2`

This plugin also requires prassmussen's [chrome-cli](https://github.com/prasmussen/chrome-cli) binary to be installed.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-chrome-extension-reload --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-chrome-extension-reload');
```

## The "chrome_extension_reload" task
Run the grunt-chrome-extension-reload as-is. The recommended use case is as follows:

    watch: {
      js: {
        files: [
          'my/files/**/*.js'
        ],
        tasks: [
          'chrome_extension_reload'
        ]
      }
    }

Note that grunt-chrome-extension-reload works best in concert with [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch). As in the above example, once grunt-contrib-watch detects changes in your chrome extensions source files, it will then automagically reload your chrome://extension tab automatically.


### Overview
In your project's Gruntfile, add a section named `chrome_extension_reload` to the data object passed into `grunt.initConfig()`.

A string value that is used to do something else with whatever else.

### Usage Examples


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
