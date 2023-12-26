// Bài 1:
// a. Viết hàm nhập một số từ 1 tới 12 sau đó in ra màn hình tên tháng tương ứng.
//  - Lưu ý: Nếu số nhập vào < 1 hoặc lớn hơn 12 thì phải thông báo lỗi

// let n = 6
// switch(n){
//     case 1:{
//     console.log("Thang 1")
//     break
//     }
//     case 2:{
//         console.log("Thang 2")
//         break
//     }
//     case 3:{
//         console.log("Thang 3")
//         break
//     }
//     case 4:{
//         console.log("Thang 4")
//         break
//     }
//     case 5:{
//         console.log("Thang 5")
//         break
//     }
//     case 6:{
//         console.log("Thang 6")
//         break
//     }
//     case 7:{
//         console.log("Thang 7")
//         break
//     }
//     case 8:{
//         console.log("Thang 8")
//         break
//     }
//     case 9:{
//         console.log("Thang 9")
//         break
//     }
//     case 10:{
//         console.log("Thang 10")
//         break
//     }
//     case 11:{
//         console.log("Thang 11")
//         break
//     }
//     case 12:{
//         console.log("Thang 12")
//         break
//     }
//     default:{
//         console("Nhap sai")
//     }
// }
    
    

// b. Viết hàm nhập vào số điểm theo thang điểm 100 và in ra xếp loại theo chữ cái với logic sau:
//  - 90 – 100: Hạng A
//  - 80 – 89: Hạng B
//  - 70 – 79: Hạng C
//  - 60 – 69: Hạng D
//  - Dưới 60: Hạng F
// let n = 51
// switch(true){
//     case n>=90 && n<=100:{
//         console.log(" Hang A")
//         break
//     }
//     case n>=80 && n<=89:{
//         console.log(" Hang B")
//         break
//     }
//     case n>=70 && n<=79:{
//         console.log(" Hang C")
//         break
//     }
//     case n>=60 && n<=69:{
//         console.log(" Hang D")
//         break
//     }
//     case n<60:{
//         console.log(" Hang F")
//         break
//     }
//     default: {
//         console.log("Nhap Sai")
//     }
// }

// // c. Viết hàm nhập 2 số và 1 phép toán (+, -, *, /) tính giá trị của của số với phép toán tương ứng.

// function giatri(a, b, pheptoan){
//     switch(pheptoan){
//         case '+':{
//             console.log(' %s %s  %s = %s', a, '+', b, a+b)
//             break
//         }
//         case '-':{
//             console.log(' %s %s  %s = %s', a, '-', b, a-b)
//             break
//         }
//         case '*':{
//             console.log(' %s %s  %s = %s', a, '*', b, a*b)
//             break
//         }
//         case '/':{
//             console.log(' %s %s  %s = %s', a, '/', b, a/b)
//             break
//         }
//     }
// }
// let kq = giatri(4, 2, '*')

// Bài 2:
// a. Viết hàm nhập vào số từ 1 tới 12 sau đó in ra màn hình số ngày tương ứng của tháng đó
// - Lưu ý: Nếu số nhập vào < 1 hoặc lớn hơn 12 thì phải thông báo lỗi

// function hamnhap(n){
//         switch(n){
//             case 1:{
//             }
//             case 3:{
//             }
//             case 5:{
//             }
//             case 7:{
//             }
//             case 8:{
//             }
//             case 10:{
//             }
//             case 12:{
//                 console.log(" Thang %s La Thang Co 31 Ngay", n)
//                 break
//             }
//             case 4:{
//             }
//             case 6:{
//             }
//             case 9:{
//             }
//             case 11:{
//                 console.log(" Thang %s La Thang Co 30 Ngay", n)
//                 break
//             }
//             case 2:{
//                 console.log(" Thang %s La Thang Co 28 Hoac 29 Ngay", n)
//                 break
//             }
//             default:{
//                 console.log(" Thang Khong Hop Le")
//             }
//         }
//     }
// let kq = hamnhap(1)

// b. Viết hàm nhập vào số từ 1 tới 12 sau đó in ra mùa tương ứng trong năm của tháng đó
// - 3 -> 5: Mùa xuân
// - 6 -> 8: Mùa hè
// - 9 -> 11: Mùa thu
// - 12 -> 2: Đông


// function ham(n){
//         switch(true){
//             case n >=3 && n <=5:{
//                 console.log("Thang %s La Mua Xuan", n)
//                 break
//             }
//             case n >=6 && n <=8:{
//                 console.log("Thang %s La Mua He", n)
//                 break
//             }
//             case n >=9 && n <=11:{
//                 console.log("Thang %s Mua Thu", n)
//                 break
//             }
//             case n === 12 || n >= 1 && n<=2:{
//                 console.log("Thang %s La Mua Dong", n)
//                 break
//             }
//             default:{
//                 console.log("Thang %s Khong Co",n)
//             }
//         }
//     }
// let kq = ham(1)

// c. Viết hàm nhập vào thể loại của bộ phim và tuổi của người xem, kiểm tra xem người đó có đủ 
// tuổi để xem bộ phim đó không?
// - Hành động (HD): trên 16 tuổi
// - Kinh dị (KD): trên 18 tuổi
// - Hài kịch (HK): Không giới hạn lứa tuổi
// - Hoạt hình (HH): Không giới hạn lứa tuổi


// function vietham(theloai, tuoi){
//     switch(theloai){
//         case 'HD':{
//             if(tuoi>16){
//                 console.log("tuoi hop le xem phim hanh dong")
//             }
//             else{
//                 console.log("tuoi k hop le xem phim hanh dong")
//             }
//             break
//         }
//         case 'KD':{
//             if(tuoi>18){
//                 console.log("tuoi hop le xem phim Kinh di")
//             }
//             else{
//                 console("tuoi k hop le xem phim Kinh di")
//             }
//             break
//         }
//         case 'HK':{
//             console.log("Phim hai kich khong gioi han lua tuoi")
//             break
//         }
//         case 'HH':{
//             console.log("Phim hoat hinh khong gioi han lua tuoi")
//             break
//         }
//         default:{
//             console.log("The Loai phim khong hop le")
//         }
//     }
// }
// var kq = vietham('HD', 11)
