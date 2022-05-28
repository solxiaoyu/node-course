let p = new Promise((resolve, reject) => {
    fs.readFile('test.txt', 'utf-8', (err, data) => {
        if (err) {
            // 錯誤了
            reject('喔喔喔，發生錯誤了')
            // reject(console.error(err);)
            // console.log('喔喔喔，發生錯誤了');
            // console.error(err);
        } else {
            // 因為沒有 err，所以是正確的
            resolve('沒有錯誤喔')
            // resolve(console.log(data))
            // console.log(data)
        }
    });

})

async function ex() {
    let a = await doWork("工作", 3000);
    console.log(a);

    let b = await doWork("讀書", 2000);
    console.log(b);
    try {
        console.log(`這裡是`, e);
    } catch (e) {
        console.error(`這裡是`, e);
    }
}
ex();