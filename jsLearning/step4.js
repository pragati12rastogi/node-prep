// Async and promise

// async call
const fetchData = callback => {
    setTimeout(() => {
        callback('Done');
    },1500);
}

setTimeout(() => {
    console.log('Timer is done');
    fetchData(text => {
        console.log(text);
    })
},2000);

// sync call



const syncData = () => {
    const promise = new Promise((resolve, reject) => {
       setTimeout(() => {
            resolve('Sync Done');
        },1500); 
    }) 
    return promise;
}

setTimeout(() => {
    console.log('Sync function');
    syncData().then(text => {
        console.log(text);
        return syncData();
         
    })
    .then(text2 => {
        console.log(text2);
    })
},2000);