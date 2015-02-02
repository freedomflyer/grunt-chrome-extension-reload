/*
 * grunt-chrome-extension-reload
 * https://github.com/freedomflyer/grunt-chrome-extension-reload
 *
 * Copyright (c) 2014 Spencer Gardner
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  var chromeExtensionTabId = 0;


  grunt.config.merge({

    /**
      Reloads tab in chrome with id of chromeExtensionTabId
      Called after correct tab number is found from chrome-cli binary. 
    */
    exec: {
      reloadChromeTab: {
        cmd: function() {
          return chromeExtensionTabId ? "chrome-cli reload -t " + chromeExtensionTabId : "chrome-cli open chrome://extensions && chrome-cli reload"; 
        }
      }
    },

    /**
      Executes "chrome-cli list tabs", grabs stdout, and finds open extension tabs ID's.
      Sets variable chromeExtensionTabId to the first extension tab ID
    */
    external_daemon: {
      getExtensionTabId: {
        options: {
          verbose: true,
          startCheck: function(stdout, stderr) {

            // Find any open tab in Chrome that has the extensions page loaded, grab ID of tab
            var extensionTabMatches = stdout.match(/\[\d{1,5}\] Extensions/);

            if(extensionTabMatches){
              var chromeExtensionTabIdContainer = extensionTabMatches[0].match(/\[\d{1,5}\]/)[0];

              chromeExtensionTabId = chromeExtensionTabIdContainer.substr(1, chromeExtensionTabIdContainer.length - 2);
              console.log("Chrome Extension Tab #: " + chromeExtensionTabId);
            }

            return true;
          }
        },
        cmd: "chrome-cli",
        args: ["list", "tabs"]
      }
    }

  });

  grunt.registerTask('chrome_extension_reload', function() {
    grunt.task.run(['external_daemon:getExtensionTabId', 'exec:reloadChromeTab']);
  });

};
