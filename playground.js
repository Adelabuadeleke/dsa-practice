const nemo = ['nemo'];
// const large = new Array(100000).fill('nemo');
function findNemo(array) {
    let t0 = performance.now()
    for(let i = 0; i < array.length; i++)  {
        if(array[i] === 'nemo'){
            console.log('Found NEMO!');
        }
    }
    let t1 = performance.now()
    console.log('took findNemo ' + (t1 - t0) +'ms');
}

findNemo(nemo);