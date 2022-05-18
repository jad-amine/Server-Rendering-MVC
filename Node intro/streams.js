const fs = require('fs');

const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf-8'}); 
    // second argument to specify the encoding type instead of using the 
    // chunk.toString() method
const writeStream = fs.createWriteStream('./docs/blog4.txt');


// 1) Adding a manual event listener to access the buffers of data coming in
readStream.on('data',chunk =>{
    console.log('---New Chunk---');
    console.log(chunk);
    // if we want to pass in the incoming data to another file
    writeStream.write('\nNew Chunk\n');
    writeStream.write(chunk);
});

// 2) Piping automatically transfer readable stream to writable stream directly
//  -->   automatically routes the chunks 
readStream.pipe(writeStream);