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

// // g. Chèn phần tử 117 vào đầu mảng // push, unshift
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// arr.unshift(117)
// console.log(arr)

// // i. Sắp xếp mảng theo thứ tự tăng dần // sort(a,b) => a-b
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// arr.sort((a, b) => a -b)
// for(let i = 0; i < arr.length; i++){
//     console.log('thu tu tang dan cua cac phan tu la:', arr[i])
// }

// // j. Sắp xếp mảng theo thứ tự giảm dần // sort
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// arr.sort((a, b) => b -a)
// for(let i = 0; i < arr.length; i++){
//     console.log('Thu tu giam dan cua cac phan tu la:', arr[i])
// }

// k. Liệt kê danh sách các số chẵn trong mảng trên // push(arr[i])
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let sochan = []
// function timsochan(arr){
//     for( let i =0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             sochan.push(arr[i])      
//         }
//     }
//     return sochan
// }
// sochan = timsochan(arr)
// console.log('cac so chan trong mang la:', sochan)

// // l. Liệt kê danh sách các số lẽ trong mảng trên // push
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let sole = []
// function timsole(arr){
//     for( let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             sole.push(arr[i])
//         }
//     }
//     return sole
// }
// sole = timsole(arr)
// console.log(' cac so le trong mang la:', sole)

// // h. Kiểm tra xem mảng có phải là mỗi dãy số tăng dần hay không
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

// for(let i =0; i < arr.length; i++){
//     console.log(i ,": ",arr[i])
//     if(arr[i] > arr[i + 1]){
//         return 'khong phai day so tang dan'
//     }
// }


//         if(arr[i] > arr[i + 1]){
//             return 'khong phai day so tang dan'
//         }
//         // else{
//         //     return 'la day so tang dan'
//         // }
//     }
// }
// let kq = kiemtra(arr)
// console.log(kq)







// // b. while 
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let i = 0
// let tong = 0
// while(i<arr.length){
//     tong = tong + arr[i]
//     i = i + 1
// }
// console.log(tong)

// c. while

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let i = 0
// let max = arr[0]
// let min = arr[0]
// while(i < arr.length){
//     if(arr[i] > max){
//         max = arr[i]
//     }
//     if(arr[i] < min){
//         min = arr[i]
//     }
//     i = i + 1
// }
// console.log('Phan tu lon nhat la: %s, phan tu nho nhat la: %s', max, min)

// c. do while
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let i = 0
// let max = arr[0]
// let min = arr[0]
// do {
//     if(arr[i] > max){
//         max = arr[i]
//     }
//     if(arr[i] < min){
//         min = arr[i]
//     }
//     i = i + 1
// } while(i < arr.length)
// console.log('Phan tu lon nhat la: %s, phan tu nho nhat la: %s', max, min)





// a. In ra màn hình console tất cả các phần tử của mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let i = 0
// while(i < arr.length ){
//     console.log(arr[i])
//     i++
// }

// let i = 0
// do{
//     console.log(arr[i])
//     i++
//     // console.log(arr[i])
// }
// while(i < arr.length)

// b. Tính tổng các phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let i = 0
// let tong = 0
// while(i < arr.length){
//     tong = tong + arr[i]
//     i++
// }
// console.log('tong la;', tong)

// let i =0
// let tong = 0
// do{
//     tong = tong + arr[i]
//     i++
// }
// while(i < arr.length)
// console.log('tong:', tong)

// c. Tìm phần tử lớn nhất, phần tử nhỏ nhất trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let i =0 
// let max = arr[0]
// let min = arr[0]
// while(i < arr.length){
//     if(arr[i]>max){
//         max = arr[i]
//     }
//     if(arr[i] < min){
//         min = arr[i]
//     }
//     i++
// }
// console.log('phan tu lon nhat %s, phan tu nho nhat %s', max, min)


// let i =0
// let max = arr[0]
// let min = arr[0]
// do{
//     if(arr[i] > max){
//         max = arr[i]
//     }
//     if(arr[i] < min){
//         min = arr[i]
//     }
//     i++
// }while(i < arr.length)
// console.log('lon nhat %s, nho nhat %s', max, min)

// d. Tính trung bình cộng các phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let i = 0
// let tong = 0
// let tbc = 0
// while( i < arr.length){
//     tong = tong + arr[i]
//     tbc = tong/arr.length
//     i++
// }
// console.log('trung binh cong', tbc)

// let i = 0
// let tong = 0
// let tbc = 0
// do{
//     tong = tong + arr[i]
//     tbc = tong/arr.length
//     i++
// }while( i < arr.length)
// console.log('tbc la:', tbc)

// e. Đảo ngược thứ tự các phần tử trong mảng
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let i = arr.length - 1
// while(i >= 0){
//     console.log(arr[i])
//     i--
// }


// let i = arr.length - 1
// do{
//     console.log(arr[i])
//     i--
// }while(i >= 0)

// i. Sắp xếp mảng theo thứ tự tăng dần // sort(a,b) => a-b
// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// arr.sort((a, b) => a -b)
// let i = 0
// while(i < arr.length){
//     console.log('thu tu tang dan cua cac phan tu la:', arr[i])
//     i++
// }

// arr.sort((a, b) => a -b)
// let i = 0
// do{
//     console.log('thu tu tang dan cua cac phan tu la:', arr[i])
//     i++
// }while(i < arr.length)


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


// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
// let i = 0
// let tansuatxuathien = {}
// while(i < arr.length){
//     let phantuthui = arr[i]
//     if (tansuatxuathien[phantuthui] === undefined){
//         tansuatxuathien[phantuthui] = 1
//     }
//     else {
//         tansuatxuathien[phantuthui] = tansuatxuathien[phantuthui]
//     }
//     i++
// }
// console.log(tansuatxuathien)

let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]
let i = 0
let tansuatxuathien = {}
do{
    // let phantuthui = arr[i]
    if (tansuatxuathien[arr[i]] === undefined){
        tansuatxuathien[arr[i]] = 1
    }
    else {
        tansuatxuathien[arr[i]] = tansuatxuathien[arr[i]] + 1
    }
    i++
}while(i < arr.length)
console.log(tansuatxuathien)


// g. Chèn phần tử 117 vào đầu mảng

// let arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

// for(let i = arr.length ; i >=0 ; i--){
//     arr[i] = arr[i-1]
// }
// arr[5] = 117
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

// k. Liệt kê danh sách các số chẵn trong mảng trên
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


// tim tan so xuat hien cua cac chu cai
// let chucai = ['a', 'v', 'g', 'v', 't', 'a', 'a', 'j', 'a', 'k', 'g', 'a', 'n', 'n', 'l', 'q', 'r', 'g', 'p']
// solanxuathien = {}
// for(let i = 0; i < chucai.length; i++){
//     let kytu = chucai[i]
//     if(solanxuathien[kytu] === undefined){
//         solanxuathien[kytu] = 1
//     }
//     else{
//         solanxuathien[kytu] = solanxuathien[kytu] + 1
//     }
// }
// console.log('so lan xuat hien:', solanxuathien)