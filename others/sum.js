// 回傳 1 + 2 + ... + n 的結果
// function sum(n) {

//     // return 結果
//   }

//   console.log(sum(1)); // 1
//   console.log(sum(2)); // 3
//   console.log(sum(10)); // 55
//   console.log(sum(100)); // 5050






function sum(n) {
    let result = 0;
    for (let i = 0; i <= n; i++) {
        result += n;

    }
    return result;
}

sum(10);





// function sum(n) {
//     n.reduce((acc, cur) => {
//         acc + cur
//     }, 0)
// };
// sum(20);




// 失敗寫法
// function sum(...n) {
//     n.reduce((acc, cur) => {
//         acc + cur
//     }, [])
// };

// sum(100);



// 失敗寫法
// function sum(n) {
//     // console.log(...n);
//     n.reduce((acc, cur) => {
//         acc + cur
//     }, [])
// };

// sum(100);
