
console.log(global);

// we can omit the global. (just like window obj)
global.setTimeout(() => {
    
},1000);

setTimeout( ()=> {
    console.log('in the time out');
    clearInterval(int);
}, 3000);

const int = setInterval(() => {
    console.log('0.5 seconds');
}, 1000);

console.log(__dirname);
console.log(__filename);

