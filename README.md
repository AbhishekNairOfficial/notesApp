# React-Cordova-Boilerplate
A boilerplate application using React JS and Apache Cordova to make web applications. Using this boilerplate app, you can use your JS code built through React, and  run it as a webview application in Android, iOS, Windows, OSX, browser.

The application uses **Apache Cordova** to build an app file from your web code.

# Installation
Follow the below steps to use this boilerplate for your applications.
- Clone the repo to your system.
- Write your code inside the ./src folder, and use npm start to visualise your development.
- When you're done with your work, run the command <code>gulp build cordova</code>. This runs <code>npm run build</code>, which builds a minified version of your application, and then moves the build files to the ```./cordova/www``` folder.
- Now, change directory to ```./cordova```, and run <code>cordova run android</code> or <code>cordova build ios</code>, or whichever platform you have installed.