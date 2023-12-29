//bai 1 Lab01
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

// //d. Tính chu vi, diện tích hình tròn có đường kính là 5
// let duongKinh = 5
// let banKinh = 5/2
// const pi = 3.14
// let chuVi = duongKinh * pi
// let dienTich = pi * Math.pow(banKinh, 2)
// console.log("Chu vi:", chuVi)
// console.log("Dien Tich:", dienTich)

// //e. Tính chu vi, diện tính hình chữ nhật có chiều dài = 15, chiều rộng = 10
// // chu vi = (chieu dai + chieu rong) * 2
// // dien tich = chieu dai * chieu rong
// let chieuDai = 15
// let chieuRong = 10
// let chuVi = (chieuDai + chieuRong) * 2
// let dienTich = chieuDai * chieuRong
// console.log("Chu Vi la:", chuVi + "," + "Dien Tich:", dienTich)

// // f. Tính vận tốc của xe hởi khi di chuyển quãng đường 120km trong thời gian 130 phút (đơn 
// //     vị vận tốc là km/h)
// // van toc = quan duong / thoi gian
// let quangDuong = 120
// let thoiGian = 130/60
// let vanToc = quangDuong / thoiGian
// console.log("Van toc la: %s km/h", vanToc)

// // g. Tính quãng đường mà xe có thể di chuyển được trong thời gian 150 phút với vận tốc là 
// // 60 km/h
// // quang duong = van toc * thoi gian
// let thoiGian = 150/60
// let vanToc = 60
// let quangDuong = vanToc * thoiGian
// console.log("Quang duong la: %s km", quangDuong)

// //h. Một ca nô đi với vận tốc 15,2 km/ giờ. Tính quãng đường đi được của ca nô trong 3 giờ.
// let vanToc = 15.2
// let thoiGian = 3
// let quangDuong = vanToc * thoiGian
// console.log(quangDuong)

// //i. Một xe máy đi từ A lúc 8 giờ 20 phút với vận tốc 42 km/ giờ đến B lúc 11 giờ. Tính độ dài của quãng đường AB
// // A den B = 2h40'
// let thoiGian = 2 + (2/3)
// let vanToc = 42
// let quangDuong = vanToc * thoiGian
// console.log(quangDuong)

// j. Tính thể tích của khối gỗ bên dưới và in ra màn hình console
// chia khoi go ra 4 phan ta co
// chieu dai 8
// chieu rong 5
// chieu cao 6
// the tich = dai * rong * cao
// let chieuDai = 8
// let chieuRong = 5
// let chieuCao = 6
// let theTichMotKhoigo = chieuDai * chieuRong * chieuCao
// let theTichtongkhoGo = theTichMotKhoigo * 4
// console.log(theTichtongkhoGo)


//Bài 1: lab02
// a. Viết hàm kiểm tra một số là số âm hay số dương.
// b. Viết hàm kiểm tra một số là số chẵn hay số lẻ.
// c. Viết hàm tìm số lớn nhất trong 3 số.
// d. Viết hàm kiểm tra một năm có phải là năm nhuận hay không.
// e. Viết hàm kiểu tra một kí tự là nguyên âm hay phụ âm

// // a. Viết hàm kiểm tra một số là số âm hay số dương.
// function kiemTraSoAmSoDuong(n){
//     if(n > 0){
//         return 'So Duong'
//     }
//     else if (n < 0){
//         return ' So Am'
//     }
//     else{
//         return 'So khong Am khong Duong'
//     }
// }
// let kq = kiemTraSoAmSoDuong(0)
// console.log(kq)

// // b. Viết hàm kiểm tra một số là số chẵn hay số lẻ.
// function soChanSole(n){
//     if(n % 2 === 0){
//         return 'So Chan'
//     }
//     else{
//         return 'So Le'
//     }
// }
// let kq = soChanSole(3)
// console.log(kq)

// // c. Viết hàm tìm số lớn nhất trong 3 số.
// function SoLonNhatTrong3So(a, b, c){
//     let max = a
//     if(b > max){
//         max = b
//     }
//     if(c > max){
//         max = c
//     }
//     return max
// }
// let kq = SoLonNhatTrong3So(7,4,3)
// console.log(kq)

// //d. Viết hàm kiểm tra một năm có phải là năm nhuận hay không
// function namNhuanNamKhongNhuan(n){
//     if(n % 4 === 0 && n % 100 !==0 || n % 400 === 0){
//         return ' Nam Nhuan'
//     }
//     else{
//         return 'Nam khong Nhuan'
//     }
// }
// let kq = namNhuanNamKhongNhuan(2021)
// console.log(kq)

// //e. Viết hàm kiểu tra một kí tự là nguyên âm hay phụ âm
// function kiTuNguyenAmPhuAm(n){
//     if( n === 'a'||
//         n === 'o'||
//         n === 'u'||
//         n === 'i'||
//         n === 'e'){
//             return 'ki tu nguyen am'
//         }
//         else{
//             return 'ki tu phu am'
//         }
// }
// let kq = kiTuNguyenAmPhuAm('o')
// console.log(kq)

// // bài2
// // a Viết hàm tìm nghiệm của phương trình bậc hai: ax^2 + bx + c = 0
// // - Nếu a và b cùng bằng 0 thì phương trình vô nghiệm
// // - Nếu a=0 thì phương trình có một ngh/iệm là (-c/b).
// // - Nếu b2-4ac < 0, thì phương trình vô nghiệm.
// // - Hàm tính căn bậc 2 trong js là: Math.sqrt()
// function nghiemCuaPhuongTrinh(a, b, c){
//     let delta = b*b-4*a*c
//     if(a === 0 && b ===0){
//         return 'PT vo nghiem'
//     }
//     else if(a===0){
//         return 'PT co 1 nghiem' -c/b
//     }
//     else if(delta < 0){
//         return 'PT vo nghiem'
//     }
//     else{
//         let x1 = (-b+Math.sqrt(delta))/(2*a)
//         let x2 = (-b-Math.sqrt(delta))/(2*a)
//         return 'PT co 2 nghiem'
//     }
// }
// let kq = nghiemCuaPhuongTrinh(2,-7,4)
// console.log(kq)

// //b. Viết hàm tính thuế thu nhập và lương NET của nhân viên:
// // - 20% thuế thu nhập nếu lương từ 20 triệu trở lên
// // - 15% thuế thu nhập nếu lương từ 8 triệu đến 15 triệu
// // - 0% thuế thu nhập nếu lương dưới 8 triệu
// // Lưu ý: Tiền lương của nhân viên sẽ được nhập vào từ tham số của hàm
// function thuethunhapvaluongnet(luong){
//     let thue = 0
//     let luongNET = 0
//     if(luong >= 20000000){
//         thue = 0.2 * luong
//     }
//     else if(luong >= 8000000 && luong <= 15000000){
//         thue = 0.15 * luong
//     }
//     else{
//         thue = 0
//     }
//     luongNET = luong - thue
//     return{
//         luongNet: luongNET,
//         TTNCN: thue
//     }
// }
// let kq = thuethunhapvaluongnet(10000000)
// console.log("Luong Net la: %s, Thue TNCN la:%s", kq.luongNet , kq.TTNCN)

// //c. Viết hàm xếp hạng học lực của học sinh dựa trên điểm kiểm tra, điểm thi giữa kì và điểm thi cuối kì:
// // - Điểm trung bình >= 9 là hạng A
// // - Điểm trung bình >= 7 và <9 là hạng B
// // - Điểm trung bình >=5 và <7 là hạng C
// // - Điểm trung bình <5 là hạng F
// // Lưu ý: Điểm kiểm tra, điểm thi giữa kì và điểm cuối kì sẽ được nhập vào từ tham số của hàm
// function hocluc(a, b, c){
//     let d = (a + b + c)/3
//     if(d >= 9){
//         return 'hang A'
//     }
//     else if(d >= 7 && d < 9){
//         return 'hang B'
//     }
//     else if(d >=5 && d < 7){
//         return 'hang C'
//     }
//     else{
//         return 'hang F'
//     }
// }
// let kq = hocluc(4,5,7)
// console.log(kq)

// d. Viết hàm tính giá cước điện thoại của một hộ gia đình với các thông tin như sau:
// - Phí thuê bao bắt buộc là 25 ngìn đồng
// - 600 đồng cho mỗi phút gọi của 50 phút đầu tiên
// - 400 đồng cho mỗi phút gọi của 150 phút tiếp theo
// - 200 đồng cho bất kỳ phút gọi nào sau 200 phút đầu tiên
// - Số phút gọi điện thoại của gia đình sẽ được nhập vào từ tham số của hàm

// function giacuocdt(soPhutgoi){
//     const PTBBB = 25000
//     let giacuoc = 0
//     let so50PhutGoiDau = 600
//     let so150PhutgoiTT = 400
//     let soSau200Phut = 200
//     if(soPhutgoi <= 50 && soPhutgoi > 0){
//         giacuoc = PTBBB + so50PhutGoiDau * soPhutgoi
//     }
//     else if(soPhutgoi >= 150 && soPhutgoi <= 200){
//         giacuoc = PTBBB + (so50PhutGoiDau*50)+(so150PhutgoiTT*(soPhutgoi-50))
//     }
//     else if(soPhutgoi > 200){
//         giacuoc = PTBBB + (so50PhutGoiDau*50)+(so150PhutgoiTT*150)+(soSau200Phut*(soPhutgoi-200))
//     }
//     return giacuoc
// }
// let kq = giacuocdt(201)
// console.log("gia cuoc la:", kq)



function timDoLech(arr) {
    let max = -Infinity;
    let secondMax = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
      } else if (arr[i] > secondMax && arr[i] < max) {
        secondMax = arr[i];
      }
    }
  
    return max - secondMax;
  }
  
  let arr = [5, 1, -2, 8, 10];
  console.log(`Độ lệch giữa phần tử lớn nhất và phần tử nhỏ nhì là: ${timDoLech(arr)}`);

  
  function timCapSo(arr) {
    let pairs = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === 6) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
  
    return pairs;
  }
  
  let arr = [5, 1, -2, 8, 10];
  console.log(`Các cặp số có tổng bằng 6 là: ${JSON.stringify(timCapSo(arr))}`);
  