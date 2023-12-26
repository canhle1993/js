// Bài 1: Cho mảng 1 chiều: arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]. 
// Thực hiện các bài tập sau bằng 3 cách (for, while, do-while)
// a. In ra màn hình console tất cả các phần tử của mảng
// b. Tính tổng các phần tử trong mảng
// c. Tìm phần tử lớn nhất, phần tử nhỏ nhất trong mảng
// d. Tính trung bình cộng các phần tử trong mảng
// e. Đảo ngược thứ tự các phần tử trong mảng
// f. Tìm số lần xuất hiện của mỗi phần tử trong mảng
// g. Chèn phần tử 117 vào đầu mảng
// h. Kiểm tra xem mảng có phải là mỗi dãy số tăng dần hay không
// i. Sắp xếp mảng theo thứ tự tăng dần
// j. Sắp xếp mảng theo thứ tự giảm dần
// k. Liệt kê danh sách các số chẵn trong mảng trên
// l. Liệt kê danh sách các số lẽ trong mảng trên

// //a
// // i = i+1 tuong duong voi i++
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for(let i = 0; i< arr.length; i = i + 1)
// console.log('phan tu thu %s: %s', i , arr[i])

// //b
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
//  let tong = 0
//  for(let i =0; i < arr.length; i++){
//     tong = tong + arr[i]
//  }
// console.log('tong cac phan tu la:', tong)

// //c
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let min = arr[0]
// for(let i =0; i< arr.length; i++){
//     if (arr[i] < min){
//         min = arr[i]
//     }
// }
// console.log('Phan tu nho nhat la;', min)

// //d
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
//   let tong = 0
//   for(let i =0; i < arr.length; i++){
//      tong = tong + arr[i]
//   }
//   let trungbinhcong = tong/arr.length
//  console.log('trung binh cong cac phan tu la:', trungbinhcong)

//e
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// focus(let i )




//  let mang = [1, 3, 7, 11, 2]
// console.log( 'Phan tu thu 0', mang[0])

// for(let index = 0; index <= 10; index = index + 1){
//     console.log(" So i =", index)
// }

// let mang = [1, 3, 7, 11, 2]
// for( let i = 0; i < mang.length; i = i + 1){
//     console.log('phan tu thu i:', mang[i])
// }


// Bài 1: Cho mảng 1 chiều: arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]. 
// Thực hiện các bài tập sau bằng 3 cách (for, while, do-while)
// a. In ra màn hình console tất cả các phần tử của mảng
// b. Tính tổng các phần tử trong mảng
// c. Tìm phần tử lớn nhất, phần tử nhỏ nhất trong mảng
// d. Tính trung bình cộng các phần tử trong mảng
// e. Đảo ngược thứ tự các phần tử trong mảng
// f. Tìm số lần xuất hiện của mỗi phần tử trong mảng
// g. Chèn phần tử 117 vào đầu mảng
// h. Kiểm tra xem mảng có phải là mỗi dãy số tăng dần hay không
// i. Sắp xếp mảng theo thứ tự tăng dần
// j. Sắp xếp mảng theo thứ tự giảm dần
// k. Liệt kê danh sách các số chẵn trong mảng trên
// l. Liệt kê danh sách các số lẽ trong mảng trên

// // a. In ra màn hình console tất cả các phần tử của mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// // chieu dai (length) cua mang la 12, nhung thu tu (i) chi co 11
// for(let i = 0; i < arr.length; i++){
//     // i = 0 la i chay tu phan tu thu 0
//     // chay cho toi i < chieu dai cua mang
//     console.log("Phan tu thu %s la: %s", i, arr[i])
// }

// // tinh chieu dai cua mang
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// console.log('chieu dai cua mang la:', arr.length)
// for(let i =0; i < arr.length; i++){
//     // hien cac phan tu trong mang    
//     console.log(arr[i])
//     // hiehu tn tu i
//     console.log(i)
// }

// // b. Tính tổng các phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let tong = 0
// for(let i = 0; i < arr.length; i++ ){
//     tong = tong + arr[i]
// }
// console.log(tong)


// // c. Tìm phần tử lớn nhất, phần tử nhỏ nhất trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let max = arr[0] // max = 3
// let min = arr[0] // min = 3
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){ //tat ca phan tu con lai trong mang > max
//         max = arr[i] // max = tat ca cac phan tu con lai trong mang
//     }
//     if(arr[i]< min){
//         min = arr[i]
//     }
// }
// console.log('gia tri lon nhat la: %s, gia tri nho nhat la: %s', max,min)


// // d. Tính trung bình cộng các phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let tong = 0
// let trungbinhcong = 0
// for(let i = 0; i < arr.length; i++){
//     tong = tong + arr[i] 
// }
// trungbinhcong = tong/arr.length
// console.log('trung binh cong la:', trungbinhcong)

// // e. Đảo ngược thứ tự các phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for(let i = arr.length -1; i >= 0; i--){
// // i = arr.length la so 4 doan cuoi cua mang
// // i >=0 cho no chay lui ve so 3
// // i-- la i = i-1 de chay lui tu so 4 ve so 3
//     console.log(arr[i])
// }

// // f. Tìm số lần xuất hiện của mỗi phần tử trong mảng//////element
// // let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let solan = []
// for (let i = 0; i < arr.length; i++) {
//   let element = arr[i];
//   if (solan[arr[i]]) {
//     solan[element]++
//   } else {
//     solan[element] = 1
//   }
// }
// for (let key in solan) {
//   console.log(`${key} xuất hiện ${solan[key]} lần`)
// }


// // g. Chèn phần tử 117 vào đầu mảng//// unshift chen vao dau, plush chen vao cuoi

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// arr.unshift(117)

// console.log(arr)
