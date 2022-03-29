const fs = require('fs');
const path = require('path');

const { createGzip } = require('zlib');
const { pipeline } = require('stream');

const gzip = createGzip();
const source = fs.createReadStream(path.resolve(process.argv[2]));
const destination = fs.createWriteStream(path.resolve(process.argv[3]) + '.zip');

pipeline(source, gzip, destination, (err) => {
    if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
});