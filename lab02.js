//1
// let troimua = true

// if (troimua = true) { 
//     console.log('ban phai mac ao mua')
// }
// else {
//     console.log('ban khong can mac ao mua')
// }
// //bai 1
// //a. Viết hàm kiểm tra một số là số âm hay số dương.

//   //so duong la so lon hon 0
// function SoAmSoDuong(n){
//     if (n>0){
//         console.log("So Duong")
//     }
//     else if(n==0){
//         console.log("So k Am k Duong")
//     }
//     else{
//         console.log("So Am")
//     }
// }
// SoAmSoDuong(2)

// // b. Viết hàm kiểm tra một số là số chẵn hay số lẻ.
// //  so chan la so chia het cho 2 va bang 0
// function SoChanSoLe(n){
//     if (n%2==0){
//         console.log("So Chan")
//     }
//     else{
//         console.log("So Le")
//     }
// }
// SoChanSoLe(0)

// //c. Viết hàm tìm số lớn nhất trong 3 số

// function SoLonNhatTrong3So(a, b, c){
//     max=a
//     if(b>max){
//         max=b
//     }
//     if(c>max){
//         max=c
//     }
//     return max
// }
// var solonnhat = SoLonNhatTrong3So(2,4,3)
// console.log("So Lon Nhat La:", solonnhat)

// // d. Viết hàm kiểm tra một năm có phải là năm nhuận hay không.
// // nam nhuan la nam chia het cho 4 va bang 0

// function NamNhuanNamKhongNhuan(n){
//     if ((n%4===0&&
//         n%100!=0)||
//         n%400===0
//         ){
//         console.log("Nam Nhuan")
//     }
//     else {
//         console.log("Nam Khong Nhuan")
//     }
// }
// NamNhuanNamKhongNhuan(2020)
//e Viết hàm kiểu tra một kí tự là nguyên âm hay phụ âm

// // nguyen am la chu: a, e, i, u, o

// function NguyenAmPhuAm(n){
//     if (
//       n === 'a'||
//       n === 'A'||
//       n === 'e'||
//       n === 'E'||
//       n === 'u'||
//       n === 'U'||
//       n === 'i'||
//       n === 'I'||
//       n === 'o'||
//       n === 'O'
//     )
//     {
//         return "nguyen am"
//     }
//     else{
//         return "Phu Am"
//     }
//  }
//  var kq=NguyenAmPhuAm('U')
//  console.log("ki tu la:", kq)

// //2
// //a. Viết hàm kiểm tra một số là số âm hay số dương.

// function kiemtrasoamsoduong(n){
//     if(n>0){
//         return ' So Duong'
//     }
//     else if(n<0){
//         return " So Am"
//     }
//     else{
//         return " So k Am k Duong"
//     }
// }
// var kq = kiemtrasoamsoduong(2)
// console.log("So Do La So:"+kq)
// // //b. Viết hàm kiểm tra một số là số chẵn hay số lẻ.

// function SoChanSoLe(n){
//     if(n%2===0){
//         return "So Chan"
//     }
//     else{
//         return "So Le"
//     }
// }
// var kq = SoChanSoLe(3)
// console.log("So Do La So:", kq)
// // //c. Viết hàm tìm số lớn nhất trong 3 số.

// function SoLonNhatTrong3So(a, b, c){
//     max=a
//     if(b>max){
//         max=b
//     }
//     if(c>max){
//         max=c
//     }
//     return max
// }
// var kq = SoLonNhatTrong3So(7, 9, 6)
// console.log("So Lon Nhat La:", kq)
// //d. Viết hàm kiểm tra một năm có phải là năm nhuận hay không.

// function NamNhuanNamKhongNhuan(n){
//     if((n%4===0 && n%100!=0)|| n%400===0){
//         return "Nam Nhuan"
//     }
//     else{
//         return "Nam Khong Nhuan"
//     }
// }
// var kq = NamNhuanNamKhongNhuan(2024)
// console.log("Nam Do La:" +kq)
// //e. Viết hàm kiểu tra một kí tự là nguyên âm hay phụ âm

// function kitunguyenamphuam (n){
//     if(
//         n==='A'||
//         n==='a'||
//         n==='E'||
//         n==='e'||
//         n==='O'||
//         n==='o'||
//         n==='I'||
//         n==='i'||
//         n==='U'||
//         n==='u'
//         ){
//             return "Nguyen Am"
//         }
//         else{
//             return "Phu Am"
//         }
// }
// var kq = kitunguyenamphuam('o')
// console.log("Ki tu do la:"+ kq)

// // bài2
// // a Viết hàm tìm nghiệm của phương trình bậc hai: ax^2 + bx + c = 0
// // - Nếu a và b cùng bằng 0 thì phương trình vô nghiệm
// // - Nếu a=0 thì phương trình có một ngh/iệm là (-c/b).
// // - Nếu b2-4ac < 0, thì phương trình vô nghiệm.
// // - Hàm tính căn bậc 2 trong js là: Math.sqrt()

// function nghiemcuaphuongtrinh(a, b, c){
//     var delta = b*b-4*a*c
//     if((a===0 && b===0)||(delta<0)){
//         return "Vo Nghiem"
//     }
//     else if(a===0){
//         var nghiem = (-c/b)
//         return "Co 1 Nghiem la:"+nghiem
//     }
//     else{
//         var x1 = (-b+Math.sqrt(delta))/(2*a)
//         var x2 = (-b-Math.sqrt(delta))/(2*a)
//         return "Co 2 Nghiem"
//     }   
// }
// var kq = nghiemcuaphuongtrinh(2, -8, 4)
// console.log("Phuong trinh:",kq)

// // b. Viết hàm tính thuế thu nhập và lương NET của nhân viên:
// // - 20% thuế thu nhập nếu lương từ 20 triệu trở lên
// // - 15% thuế thu nhập nếu lương từ 8 triệu đến 15 triệu
// // - 0% thuế thu nhập nếu lương dưới 8 triệu
// // Lưu ý: Tiền lương của nhân viên sẽ được nhập vào từ tham số của hàm

// function thuethunhapvaluongnet(luong){
//     let thue = 0
//     let luongNet =0
//     if(luong>20000000){
//         thue = 0.2*luong
//     }
//     else if(luong>=8000000 && luong<=15000000){
//         thue = 0.15*luong
//     }
//     else if(luong>15000000 && luong<=20000000){
//         thue = 0.18*luong
//     }
//     let luongNet = luong - thue
//     return{
//         Luongnet: luongNet,
//         ThueThuNhap: thue
//     }
// }
// var kq = thuethunhapvaluongnet(17000000)
// console.log("Thue Thu Nhap La:"+ kq.ThueThuNhap + "Luong net la:" + kq.Luongnet)
//////
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
// //////////////

// let arr2 = ["a", "b", "c", "a", "c"]
// let tansuatxuathien2 = {}
// for(i = 0; i < arr2.length; i++){
//     let phantuthui = arr2[i]
//     if(tansuatxuathien2[phantuthui] === undefined){
//         tansuatxuathien2[phantuthui] = 1
//     }
//     else{
//         tansuatxuathien2[phantuthui]= tansuatxuathien2[phantuthui] + 1
//     }
// }
// console.log(tansuatxuathien2)

// // c. Viết hàm xếp hạng học lực của học sinh dựa trên điểm kiểm tra, điểm thi giữa kì và điểm thi 
// //    cuối kì:
// // - Điểm trung bình >= 9 là hạng A
// // - Điểm trung bình >= 7 và <9 là hạng B
// // - Điểm trung bình >=5 và <7 là hạng C
// // - Điểm trung bình <5 là hạng F
// // Lưu ý: Điểm kiểm tra, điểm thi giữa kì và điểm cuối kì sẽ được nhập vào từ tham số của hàm
   
// function hocluc(a, b, c){
//     var tb = (a + b + c)/3
//     if(tb>=9){
//         return "Hang A"
//     }
//     else if(tb>=7 && tb<9){
//         return "Hang B"
//     }
//     else if(tb>=5 && tb<7){
//         return "Hang C"
//     }
//     else{
//         return "Hang F"
//     }
// }
// var kq = hocluc(7, 8, 9)
// console.log("Hoc Luc Cua HS la:"+kq)

// // d. Viết hàm tính giá cước điện thoại của một hộ gia đình với các thông tin như sau:
// // - Phí thuê bao bắt buộc là 25 ngìn đồng
// // - 600 đồng cho mỗi phút gọi của 50 phút đầu tiên
// // - 400 đồng cho mỗi phút gọi của 150 phút tiếp theo
// // - 200 đồng cho bất kỳ phút gọi nào sau 200 phút đầu tiên
// // - Số phút gọi điện thoại của gia đình sẽ được nhập vào từ tham số của hàm

// function giacuocdienthoai(sophutgoi){
//     const phithuebaobatbuoc = 25000
//     const phi50phutdautien = 600*50
//     const phi150PhutTiepTheo = 400 * 150
//     const phiSau200Phut = 200
//     let giacuoc = 0
//     if(sophutgoi>0){
//         if(sophutgoi<=50){
//             giacuoc = phithuebaobatbuoc + 600*sophutgoi
//         }
//         else if(sophutgoi<=200){
//             giacuoc = phithuebaobatbuoc + phi50phutdautien +400*(sophutgoi - 50)
//         }
//         else{
//             giacuoc = phithuebaobatbuoc + phi50phutdautien + phi150PhutTiepTheo + 200*(sophutgoi - 200)
//         }
//     }
//     return giacuoc   
// }
// var kq = giacuocdienthoai(50)
// console.log("Gia Cuoc Dien thoai la:",kq)
