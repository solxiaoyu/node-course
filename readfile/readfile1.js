const fs = require('fs');
// const { resolve } = require('path');

// fs.readFile('test11111.txt', 'utf-8', (err, data) => {
//   if (err) {
//     // 錯誤了
//     console.log('喔喔喔，發生錯誤了');
//     console.error(err);
//   } else {
//     // 因為沒有 err，所以是正確的
//     console.log(data);
//   }
// });



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

p
  .then(function (message1) { console.log(`嗨${message1}`) })
  .catch(function (message1) { console.log(`收到data${message1}`) })