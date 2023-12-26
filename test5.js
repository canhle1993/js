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
//     console.log('phan tu thu: %s la: %s', i, arr[i])
// }

// // b. Tính tổng các phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let tong = 0
// for(let i = 0; i < arr.length; i++){
//     tong = tong + arr[i]
// }
// console.log('tong cua cac phan tu trong mang la:', tong)

// // c. Tìm phần tử lớn nhất, phần tử nhỏ nhất trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// max = arr[0]
// min = arr[0]
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > max){
//         max = arr[i]
//     }
//     if(arr[i] < min){
//         min = arr[i]
//     }
// }
// console.log('Phan tu lon nhat la: %s, Phan Tu nho nhat la: %s', max, min)

// // d. Tính trung bình cộng các phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let tong = 0
// let TBC = 0
// for(let i =0; i < arr.length; i++){
//     tong = tong + arr[i]
//     TBC = tong/arr.length
// }
// console.log('TBC cua cac phan tu trong mang la:', TBC)

// // e. Đảo ngược thứ tự các phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for(let i = arr.length - 1; i >= 0; i--){
//     console.log(arr[i])
// }

// // f. Tìm số lần xuất hiện của mỗi phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let soLanXuatHien = {}
// for(let i = 0; i < arr.length; i++){
//     if(soLanXuatHien[arr[i]]===undefined){
//         soLanXuatHien[arr[i]] = 1
//     }
//     else{
//         soLanXuatHien[arr[i]] = soLanXuatHien[arr[i]] + 1
//     }
// }
// console.log('So lan xuat hien cua phan tu la:', soLanXuatHien)

// // g. Chèn phần tử 117 vào đầu mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for(let i = arr.length; i >=0; i--){
//     arr[i] =  arr[i-1]
// }
// arr[0] = 117
// console.log(arr)

// // h. Kiểm tra xem mảng có phải là mỗi dãy số tăng dần hay không
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let mangtangdan = true
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > arr[i + 1]){
//         mangtangdan = false
//     }
// }
// if(mangtangdan === true){
//     console.log('Mang tang dan')
// }
// else{
//     console.log('mang khong tang dan')
// }

// // i. Sắp xếp mảng theo thứ tự tăng dần
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for(let i = 0; i < arr.length-1; i++){
//     for(let j = i + 1; j < arr.length; j++){
//         if (arr[i] > arr[j]){
//             tam = arr[i]
//             arr[i] = arr[j]
//             arr[j] = tam
//         }
//     }
// }
// console.log(arr)

// // j. Sắp xếp mảng theo thứ tự giảm dần
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// for( let i = 0; i < arr.length - 1; i++){
//     for(let j = i+1; j < arr.length; j++){
//         if(arr[i] < arr[j]){
//             tam = arr[i]
//             arr[i] = arr[j]
//             arr[j] = tam
//         }
//     }
// }
// console.log(arr)

// // k. Liệt kê danh sách các số chẵn trong mảng trên
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let sochan = []
// let sole = []
// for(let i = 0; i < arr.length; i++){
//     if(arr[i]%2 === 0){
//         sochan[sochan.length] = arr[i]
//     }
//     else{
//         sole[sole.length] = arr[i]
//     }
// }
// console.log('mang so chan la: %s, mang so le la: %s', sochan, sole)


//Bài 2: Cho mảng 1 chiều: arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// . Thực hiện các bài tập sau bằng 3 cách (for, while, do while)
// a. Tìm các cặp số có tổng bằng 10
// tb. Xoá các phần tử trùng nhau trong mảng
// tc. Tính tổng n số tự nhiên đầu tiên, với n biến số được khai báo trước đó với giá trị là 200
// d. Tính tổng 3 số lớn nhất trong mảng
// e. Tính trung bình cộng 3 số lớn nhất trong mảng
// f. Tìm độ lệch lớn nhất giữa các phần tử trong mảng (Gợi ý: max – min)

// // a. Tìm các cặp số có tổng bằng 10
// let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// for(let i = 0; i < arr2.length; i++){
//     for(let j = i +1; j < arr2.length; j++){
//         if(arr2[i] + arr2[j] === 10){
//             console.log('tong 2 cap so %s va %s bang 10', arr2[i], arr2[j])
//         }
//     }
// }

// // d. Tính tổng 3 số lớn nhất trong mảng
// let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// let tong = 0
// for(let i = 0; i < arr2.length-1; i++){
//     for(let j = i + 1; j < arr2.length; j++){
//         if(arr2[i] < arr2[j]){
//             tam = arr2[i]
//             arr2[i] = arr2[j]
//             arr2[j] = tam
//         }
//     }
// }
// tong = arr2[0] + arr2[1] + arr2[2]
// console.log(tong)

// // e. Tính trung bình cộng 3 số lớn nhất trong mảng
// let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// let tong = 0
// let trungbinhcong = 0
// for(let i = 0; i < arr2.length; i++){
//     for(let j = i + 1; j < arr2.length; j++){
//         if(arr2[i] < arr2[j]){
//             tam = arr2[i]
//             arr2[i] = arr2[j]
//             arr2[j] = tam
//         }
//     }
// }
// tong = arr2[0] + arr2[1] + arr2[2]
// trungbinhcong = tong / 3
// console.log('TBC 3 So la;', trungbinhcong)


// // f. Tìm độ lệch lớn nhất giữa các phần tử trong mảng (Gợi ý: max – min)
// let arr2 = [5, -2, 5, -6, 23, 69, 100, -13, 10, 0, 14]
// let max = arr2[0]
// let min =arr2[0]
// let dotrenlech = 0
// for(let i = 0; i < arr2.length; i++){
//     if(arr2[i] > max){
//         max = arr2[i]
//     }
//     if(arr2[i] < min){
//         min = arr2[i]
//     }
// }
// dotrenlech = max - min
// console.log('Do tren lech la:', dotrenlech)