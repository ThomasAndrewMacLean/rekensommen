/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs');

if (!fs.existsSync('dist')) {
    fs.mkdirSync('dist');
}

fs.copyFileSync('src/static/robots.txt', 'dist/robots.txt');
fs.copyFileSync('src/static/android-chrome-192x192.png', 'dist/android-chrome-192x192.png');
