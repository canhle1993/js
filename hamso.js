// //d:
// // Khai báo hàm tính chu vi hình tròn
// function tinhChuVi(duongKinh) {
//     var chuVi = Math.PI * duongKinh
//     return chuVi
// }
// // Khai báo hàm tính diện tích hình tròn
// function tinhDienTich(duongKinh) {
//     var banKinh = duongKinh / 2
//     var dienTich = Math.PI * Math.pow(banKinh, 2)
//     return dienTich
// }
// var duongKinh = 5
// var chuVi = tinhChuVi(duongKinh)
// var dienTich = tinhDienTich(duongKinh)
// console.log("Chu vi của hình tròn là:", Math.round(chuVi))
// console.log("Diện tích của hình tròn là:", Math.round(dienTich))
// //e:
// // Khai báo hàm tính chu vi hình chữ nhật
// function tinhChuViChuNhat(chieuDai, chieuRong) {
//     var chuVi = 2 * (chieuDai + chieuRong)
//     return chuVi
// }
// // Khai báo hàm tính diện tích hình chữ nhật
// function tinhDienTichChuNhat(chieuDai, chieuRong) {
//     var dienTich = chieuDai * chieuRong
//     return dienTich
// }
// var chieuDai = 15
// var chieuRong = 10
// var chuVi = tinhChuViChuNhat(chieuDai, chieuRong)
// var dienTich = tinhDienTichChuNhat(chieuDai, chieuRong)
// console.log("Chu vi của hình chữ nhật là:", chuVi)
// console.log("Diện tích của hình chữ nhật là:", dienTich)
// //f
// // Khai báo hàm tính vận tốc
// function tinhVanToc(quangDuong, thoiGian) {
//     var gio = thoiGian / 60; // chuyển thời gian từ phút sang giờ
//     var vanToc = quangDuong / gio; // tính vận tốc
//     return vanToc
// }
// var quangDuong = 120; // đơn vị: km
// var thoiGian = 130; // đơn vị: phút
// var vanToc = tinhVanToc(quangDuong, thoiGian)
// console.log("Vận tốc của xe hơi là:", vanToc, "km/h")
// //g:
// // Khai báo hàm tính quãng đường di chuyển
// function tinhQuangDuong(vanToc, thoiGian) {
//     var gio = thoiGian / 60; // chuyển thời gian từ phút sang giờ
//     var quangDuong = vanToc * gio; // tính quãng đường di chuyển
//     return quangDuong
// }
// var vanToc = 60; // đơn vị: km/h
// var thoiGian = 150; // đơn vị: phút
// var quangDuong = tinhQuangDuong(vanToc, thoiGian)
// console.log("Quãng đường mà xe có thể di chuyển được là:", quangDuong, "km")
// //h:
// // Khai báo hàm tính quãng đường di chuyển
// function tinhQuangDuong(vanToc, thoiGian) {
//     var quangDuong = vanToc * thoiGian; // tính quãng đường di chuyển
//     return quangDuong
// }
// var vanToc = 15.2; // đơn vị: km/h
// var thoiGian = 3; // đơn vị: giờ
// var quangDuong = tinhQuangDuong(vanToc, thoiGian)
// console.log("Quãng đường mà ca nô đi được là:", quangDuong, "km")
// //i:
// // Khai báo hàm tính quãng đường di chuyển
// function tinhQuangDuong(vanToc, thoiGian) {
//     var quangDuong = vanToc * thoiGian// tính quãng đường di chuyển
//     return quangDuong
// }
// var vanToc = 42; // đơn vị: km/h
// // Chuyển đổi thời gian thành giờ để dễ tính toán
// var thoiGianBatDau = 8 + 20 / 60; // Thời gian bắt đầu: 8 giờ 20 phút
// var thoiGianKetThuc = 11; // Thời gian kết thúc: 11 giờ
// // Tính thời gian di chuyển từ thời gian bắt đầu đến thời gian kết thúc
// var thoiGianDiChuyen = thoiGianKetThuc - thoiGianBatDau
// var quangDuong = tinhQuangDuong(vanToc, thoiGianDiChuyen)
// console.log("Độ dài của quãng đường AB là:", quangDuong, "km")
// //j:
// // Khai báo hàm tính thể tích của một khối gỗ
// function tinhTheTich(dai, rong, cao) {
//     var theTich = dai * rong * cao; // tính thể tích
//     return theTich
// }
// // Khai báo hàm tính tổng thể tích của 4 khối gỗ
// function tinhTongTheTich() {
//     var soKhốiGo = 4
//     var dai = 8
//     var rong = 5
//     var cao = 6
// var theTichMotKhoiGo = tinhTheTich(dai, rong, cao); // tính thể tích của một khối gỗ
// var tongTheTich = soKhốiGo * theTichMotKhoiGo; // tính tổng thể tích của 4 khối gỗ
//  return tongTheTich
// }
// var tongTheTich = tinhTongTheTich()
// console.log("Tổng thể tích của khối gỗ là:", tongTheTich)
