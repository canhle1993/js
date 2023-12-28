// // Bài 1: Cho mảng 1 chiều: arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]. 
// // Thực hiện các bài tập sau bằng 3 cách (for, while, do-while)
// // a. In ra màn hình console tất cả các phần tử của mảng
// // b. Tính tổng các phần tử trong mảng
// // c. Tìm phần tử lớn nhất, phần tử nhỏ nhất trong mảng
// // d. Tính trung bình cộng các phần tử trong mảng
// // e. Đảo ngược thứ tự các phần tử trong mảng
// // xf. Tìm số lần xuất hiện của mỗi phần tử trong mảng
// // g. Chèn phần tử 117 vào đầu mảng // push, unshift
// // xh. Kiểm tra xem mảng có phải là mỗi dãy số tăng dần hay không
// // i. Sắp xếp mảng theo thứ tự tăng dần // sort
// // j. Sắp xếp mảng theo thứ tự giảm dần // sort
// // k. Liệt kê danh sách các số chẵn trong mảng trên // push
// // l. Liệt kê danh sách các số lẽ trong mảng trên // push

// // a. In ra màn hình console tất cả các phần tử của mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for(let i = 0; i < arr.length; i++){
//     console.log('phan tu %s la: %s', i, arr[i])
// }


// // b. Tính tổng các phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let tong = 0
// for(let i = 0; i < arr.length; i++){
//     tong = tong + arr[i]
// }
// console.log('Tong cua cac phan tu la:', tong)

// // c. Tìm phần tử lớn nhất, phần tử nhỏ nhất trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let max = arr[0]
// let min = arr[0]
// for (let i =0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }
// console.log('Phan tu lon nhat la: %s, phan tu nho nhat la: %s', max, min)

// // d. Tính trung bình cộng các phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let tong = 0
// let trungbinhcong = 0
// for(let i = 0; i < arr.length; i++){
//     tong = tong + arr[i]
//     trungbinhcong = tong/arr.length
// }
// console.log('trung binh cong la:', trungbinhcong)

// // e. Đảo ngược thứ tự các phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for(let i = arr.length-1; i >= 0; i--){
//     console.log('cac phan tu dao nguoc la:', arr[i])
// }


// f. Tìm số lần xuất hiện của mỗi phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let tansuatxuathien = {}
// for(i = 0; i < arr.length; i++){
//     let phantuthui = arr[i]
//     if(tansuatxuathien[phantuthui] === undefined){
//         tansuatxuathien[phantuthui] = 1
//     }
//     else{
//         tansuatxuathien[phantuthui]= tansuatxuathien[phantuthui] + 1
//     }
// }
// console.log(tansuatxuathien)


// g. Chèn phần tử 117 vào đầu mảng

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for(let i = arr.length ; i >=0 ; i--){
//     arr[i] = arr[i-1]
// }
// arr[0] = 117
// console.log(arr)


// h. Kiểm tra xem mảng có phải là mỗi dãy số tăng dần hay không
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let mangtangdan = true
// for(let i = 0; i < arr.length; i++){
//     if(arr[i]> arr[i+1]){
//         mangtangdan = false
//         break
//     }
// }
// if(mangtangdan === true){
//     console.log('mang tang dan')
// }
// else{
//     console.log('mang k tang dan')
// }


// i. Sắp xếp mảng theo thứ tự tăng dần
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for( let i = 0; i < arr.length - 1; i++){
//     for( let j = i+1; j < arr.length; j++){
//         if(arr[i] > arr[j]){
//             let tam = arr[i]
//             arr[i] = arr[j]
//             arr[j] = tam
//         }
//     }
// }
// console.log(arr)

// j. Sắp xếp mảng theo thứ tự giảm dần 
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for( let i = 0; i < arr.length - 1; i++){
//     for( let j = i+1; j < arr.length; j++){
//         if(arr[i] < arr[j]){
//             let tam = arr[i]
//             arr[i] = arr[j]
//             arr[j] = tam
//         }
//     }
// }
// console.log(arr)

// k, l. Liệt kê danh sách các số chẵn trong mảng trên
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let mangsochan = []
// let mangsole = []

// for(let i = 0; i < arr.length; i++){
//     if(arr[i]%2===0){
//         mangsochan[mangsochan.length] = arr[i]
//     }
//     else{
//         mangsole[mangsole.length] = arr[i]

//     }
// }
// console.log(mangsochan)
// console.log(mangsole)

//Bài 2: Cho mảng 1 chiều: arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// . Thực hiện các bài tập sau bằng 3 cách (for, while, dowhile)
// a. Tìm các cặp số có tổng bằng 10
// tb. Xoá các phần tử trùng nhau trong mảng
// tc. Tính tổng n số tự nhiên đầu tiên, với n biến số được khai báo trước đó với giá trị là 200
// d. Tính tổng 3 số lớn nhất trong mảng
// e. Tính trung bình cộng 3 số lớn nhất trong mảng
// f. Tìm độ lệch lớn nhất giữa các phần tử trong mảng (Gợi ý: max – min)


// //a. Tìm các cặp số có tổng bằng 10
// let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// for(let i = 0; i < arr2.length; i++){
//     for(let j = i + 1; j < arr2.length; j++){
//         if(arr2[i] + arr2[j] === 10){
//             console.log('Tong hai cap so %s va %s bang 10', arr2[i], arr2[j])
//         }
//     }
// }

// // b. Xoá các phần tử trùng nhau trong mảng
// let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// for (let i = 0; i < arr2.length; i++) {
//     for (let j = i + 1; j < arr2.length; j++) {
//         if (arr2[i] === arr2[j]) {
//             arr2.splice(j, 1)
//             j--
//         }
//     }
// }
// console.log(arr2)


// // c. Tính tổng n số tự nhiên đầu tiên, với n biến số được khai báo trước đó với giá trị là 200
// let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// let n = 200
// let sum = 0
// for (let i = 1; i <= n; i++) {
//     sum += i
// }
// console.log("Tổng của", n, "số tự nhiên đầu tiên là:", sum)

// // d. Tính tổng 3 số lớn nhất trong mảng
// let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// let tong2solonnhat = 0
// for( let i = 0; i < arr2.length - 1; i++){
//         for( let j = i+1; j < arr2.length; j++){
//             if(arr2[i] < arr2[j]){
//                 let tam = arr2[i]
//                 arr2[i] = arr2[j]
//                 arr2[j] = tam
//             }
//             tong2solonnhat = arr2[0] + arr2[1]
//         }
// }
// console.log(tong2solonnhat)

// e. Tính trung bình cộng 3 số lớn nhất trong mảng
// let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// let tong3solonnhat = 0
// let trungbinhcong3solonnhat = 0
// for( let i = 0; i < arr2.length - 1; i++){
//         for( let j = i+1; j < arr2.length; j++){
//             if(arr2[i] < arr2[j]){
//                 let tam = arr2[i]
//                 arr2[i] = arr2[j]
//                 arr2[j] = tam
//             }
//             tong3solonnhat = arr2[0] + arr2[1] + arr2[2]
//             trungbinhcong3solonnhat = tong3solonnhat/3
//         }
// }
// console.log(trungbinhcong3solonnhat)


// // f. Tìm độ lệch lớn nhất giữa các phần tử trong mảng (Gợi ý: max – min)
// let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// let max = arr2[0]
// let min = arr2[0]
// let dolechlonnhat = 0
// for (let i = 1; i < arr2.length; i++) {
//   if (arr2[i] > max) {
//     max = arr2[i]
//   }
//   if (arr2[i] < min) {
//     min = arr2[i]
//   }
// }
// dolechlonnhat = max - min
// console.log("do lech lon nhat la:", dolechlonnhat)

// // c. Tính tổng n số tự nhiên đầu tiên, với n biến số được khai báo trước đó với giá trị là 200
// let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// let n = 200
// let tong = 0
// for(let i = 0; i <= n; i++){
//         tong =tong + i
// }
// console.log(tong)