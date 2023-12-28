//bai 1
// //a. In ra màn hình console từ “Hello world!”
// console.log("Hello world!")
// //b. In ra màn hình console họ và tên của bạn
// console.log("Lê Văn Cảnh")
// //c. Clear message trong console
// console.clear()
// //d. In ra màn hình các dấu sao (*) theo định dạng sau
// console.log('*****')
// console.log('*****')
// console.log('*****')
// console.log('*****')
// console.log('*****')
// //e. In ra màn hình các dấu sao (*) theo định dạng sau
// console.log('     *')
// console.log('    ***')
// console.log('   *****')
// console.log('  *******')
// console.log(' *********')
// console.log('***********')
// //f. In ra màn hình các dấu sao (*) theo định dạng sau
// console.log('  * *   * *')
// console.log('*     *     *')
// console.log('*           *')
// console.log(' *         *')
// console.log('   *     *')
// console.log('      *')
// //bai 2
// //a. Khởi tạo biến a có gía trị bằng 10 và in ra màn hình console
// let a = 10
// console.log(a)
// //b. Khởi tạo biến b có giá trị bằng ‘10’ và in ra màn hình console
// let b = '10'
// console.log(b)
// //c. Thay đổi giá trị của biến a thành 20 và in kết quả ra màn hình
// a = 20
// console.log(a)
// //d. Khởi tạo hằng số pi = 3.14 và in ra màn hình console
// const pi = 3.14
// console.log(pi)
// //e. Thay đổi hằng số pi=5 và in ra màn hình console
// pi = 5
// console.log(pi)
// //f. Khởi tạo object điện thoại, với các thuộc tính sau: ten = iPhone 14, hangSanXuat = Apple, mauSac = Trang, gia = 1000USD và in ra màn hình console
// let dienThoai = {
//     ten: 'iPhone14',
//     hangSanXuat: 'apple',
//     mauSac: 'trang',
//     gia: '1000 USD'
// }
// console.log(" Ten: " + dienThoai.ten +"," + " Hang San Xuat: "+ dienThoai.hangSanXuat +"," + " Mau Sac: " + dienThoai.mauSac +"," + " Gia: " + dienThoai.gia)

// //g. Thay đổi giá của điện thoại từ 1000USD thành 750USD và in ra màn hình console
// dienThoai.gia = "750 USD"
// console.log("Gia Moi Cua DT:" ,dienThoai.gia)
// //h. Thay đổi tên của điện thoại từ iPhone 14 thành iPhone 14 promax in ra màn hình console
// dienThoai.ten = "Iphone 14 Promax"
// console.log("Ten Moi Cua DT:", dienThoai.ten)
// //Bài 3
// // //a. Thực hiện phép tính tổng, hiệu, tích, thương của 2 nguyên a và b với a và b là 2 số nguyên được khởi tạo dưới dạng biến (giá trị tuỳ chọn)
// // let a = 8
// // let b = 2
// // let tong = a + b
// // let hieu = a - b
// // let thuong = a * b
// // let tich = a / b
// // console.log("Tong: " + tong + "," + " Hieu: " + hieu + "," + "Tich: " + tich + "," + "Thuong: ", thuong )
// // //b. Thực hiện phép tính trung bình cộng 2 số nguyên a và b, với a và b là 2 số nguyên được khởi tạo dưới dạng biến (giá trị tuỳ chọn)
// // let a = 8
// // let b = 2
// // let tong = 0
// // let TBC = 0
// // tong = a + b
// // TBC = tong / 2
// // console.log("TBC a,b la:", TBC)
// //c. Khởi tạo số nguyên x = 3, y = 4, z = 6 Tính giá trị các biểu thức sau: 
// //1; x^2 + 2x + 1
// //2; x^3 – 3xy – 5y + 3y^2
// //3; (xy)^2 – 2x^2*y + 13y
// //4; 4x^3 + 3xy + y^2 – (2x^2 – 3y)
// //5; (5x^2 / 4xy) + y^2
// //6; x^2 – 2zxy / y^2 + 5x – 2y^2 + 4xz^3 + z^3
// let x = 3
// let y = 4
// let z = 6
// let BT1 = Math.pow(x, 2) + 2*x + 1
// let BT2 = Math.pow(x, 3) - (3 * y * x) - (5 * y) + 3*Math.pow(y, 2)
// let BT3 = Math.pow(x * y, 2) - 2*Math.pow(x, 2)*y + 13*y
// let BT4 = 4 * Math.pow(x, 3) + 3 * x * y +Math.pow(y, 2) - (2*Math.pow(x, 2)-3 *y)
// let BT5 = (5*Math.pow(x, 2)/ 4 * x * y) + Math.pow(y , 2)
// let BT6 = Math.pow(x, 2) - 2 * z * x * y / Math.pow(y, 2) + 5 * x - 2 * Math.pow(y , 2) + 4 * x * Math.pow(z , 3) + Math.pow(z ,3)
// console.log(BT1, BT2, BT3, BT4, BT5, BT6)