const fs = require('fs');

fs.readFile('./src/index.html', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    var result = data.split('app.ts').join('app.js');

    fs.writeFile('./dist/index.html', result, 'utf8', function(err) {
        if (err) return console.log(err);
    });
});
