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

// //a. In ra màn hình console tất cả các phần tử của mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for(let i = 0; i < arr.length; i++)
// console.log('phan tu so %s la %s:',i,  arr[i])

// // b. Tính tổng các phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let tong = 0
// for(i = 0; i < arr.length; i++){
//     tong = tong + arr[i]
// }
// console.log(tong)

// // c. Tìm phần tử lớn nhất, phần tử nhỏ nhất trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let max = arr[0]
// let min = arr[0]
// for(let i =  0; i < arr.length; i++){
//     if(arr[i]> max){
//         max = arr[i]
//     }
//     if(arr[i]<min){
//         min = arr[i]
//     }
// }
// console.log('phan tu lon nhat la: %s, phan tu nho nhat la: %s', max, min)

// // d. Tính trung bình cộng các phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let tong = 0
// let trungbinhcong = 0
// for(let i = 0; i < arr.length; i++){
//     tong = tong + arr[i]
//     trungbinhcong = tong/arr.length
// }
// console.log('trung binh cong cua cac phan tu la:', trungbinhcong)

// // e. Đảo ngược thứ tự các phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for(let i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i])
// }

// // g. Chèn phần tử 117 vào đầu mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// arr.push(117)
// arr.unshift(100)
// console.log(arr)


// // i. Sắp xếp mảng theo thứ tự tăng dần
// // arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// arr.sort((a, b) => a - b)
// for(let i = 0; i < arr.length; i++)
// console.log("thứ tự tăng dần là:", arr[i])

// j. Sắp xếp mảng theo thứ tự giảm dần

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// arr.sort((a,b)=> b-a)
// for(let i = 0; i < arr.length; i++)
// console.log('thứ tự giảm dần là:',arr[i])


// //k. Liệt kê danh sách các số chẵn trong mảng trên
// function timsochan(arr){
//     let sochan = []
//     for(let i =0; i < arr.length; i++){
//         if(arr[i]%2===0){
//             sochan.push(arr[i])
//         }
//     }
//     return sochan
// }
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let sochan = timsochan(arr)
// console.log(sochan)

// // l. Liệt kê danh sách các số lẽ trong mảng trên

// // arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

// function timsole(arr){
//     let sole = []
//     for(let i = 0; i < arr.length; i++){
//         if ( arr[i] % 2 !==0){
//             sole.push(arr[i])
//         }
//     }
//     return sole
// }
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let sole = timsole(arr)
// console.log(sole)
