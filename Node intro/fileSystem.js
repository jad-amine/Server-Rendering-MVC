// file system module
const fs = require('fs');

// reading files

fs.readFile('./docs/blog1.txt',(err,data)=>{   // Async non-blocking fct that will return data as buffer
    if(err){
        console.log(err);
        return;
    };
    console.log(data.toString());    //toString to transform the buffer to string
})

// writing files
fs.writeFile('./docs/blog1.txt', 'Hello world !', ()=>{   //change content of blog 1
    console.log('file was written');
});

fs.writeFile('./docs/blog2.txt', 'Hello again !', ()=>{   // create blog 2
    console.log('file was written');
});

// Directories
if(!fs.existsSync('./assets')){           // check for existence 
    fs.mkdir('./assets', err => {
        if(err){
            console.log(err);
        };
        console.log('Folder created');
    });
} else{
    fs.rmdir('./assets', (err)=>{            // remove directory
        if(err){
            console.log(err);
        };
        console.log('Folder Deleted');
    });
};

// Deleting files
if(!fs.existsSync('./docs/deleteme.txt')){
    fs.writeFile('./docs/deleteme.txt','hello',()=>{});
}

if(fs.existsSync('./docs/deleteme.txt')){
    fs.unlink('./docs/deleteme.txt', err=>{         //delete file
        if(err){
            console.log(err);
        };
        console.log('file deleted');
    });
};