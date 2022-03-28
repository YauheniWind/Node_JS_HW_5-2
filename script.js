const fs = require('fs');

const { createGzip } = require('zlib');
const { pipeline } = require('stream');

const gzip = createGzip();
const source = fs.createReadStream(process.argv[2])
const destination = fs.createWriteStream(process.argv[3] + '.zip');

pipeline(source, gzip, destination, (err) => {
    if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
});