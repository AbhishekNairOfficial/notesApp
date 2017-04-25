# React-Cordova-Boilerplate

A boilerplate application using React JS and Apache Cordova to make web applications. Using this boilerplate app, you can use your JS code built through React, and run it as a webview application in Android, iOS, Windows, OSX, browser.

- When you're done with your work, run the command <code>npm run build / yarn run build</code>. This runs <code>npm run build</code>, which builds a minified version of your application, and then moves the build files to the `./cordova/www` folder.
- Now, change directory to `./cordova`, and run <code>cordova run android</code> or <code>cordova build ios</code>, or whichever platform you have installed.
