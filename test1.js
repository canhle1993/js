// // Câu 2: Tuấn, em trai Linh, có một hộp bi. Tuấn dự định sẽ mở bi ra đếm và nếu có thể, nhóc muốn chia bi cho anh Linh. Cụ thể, dự định của Tuấn như sau:

// // Nếu có 1 bi, thì Tuấn sẽ có một viên bi, còn anh Linh thì cái hộp bi cũng không có.
// // Nếu có 2 viên, thì Tuấn sẽ chia đôi: Tuấn một viên, Linh một viên.
// // Nếu có 3 viên, thì Tuấn lấy 2, và chừa cho Linh 1.
// // Nếu có ít nhất 4 viên, thì Tuấn cho hết.
// // Cho n là số bi hiện tại Tuấn có. Hãy xác định xem với lượng bi này, Tuấn sẽ làm gì với nó (bạn chỉ cần thao tác với n, chứ không cần phải khởi tạo n, và giả sử n đã có sẵn).

// function sobi(n){
//     if(n===1){
//         return {
//             Tuan:1,
//             Linh:0
//         }
//     }
//     else if (n===2){
//         return{
//             Tuan:1,
//             Linh:1
//         }
//     }
//     else if(n===3){
//         return{
//             Tuan:2,
//             Linh:1
//         }
//     }
//     else if(n>=4){
//         return{
//             Tuan:0,
//             Linh:n
//         }
//     }
//     else{
//         return{
//             Tuan:0,
//             Linh:0
//         }
//     }
// }
// var kq = sobi(0)
// console.log("So Bi Cua Tuan La:" +kq.Tuan+" Va "+"So Bi Cua Linh La:" +kq.Linh)


// // Bài tập 1
// // Khai báo số x có giá trị bất kỳ

// // Nếu x < 0 thì in ra x là số âm

// // Nếu x = 0 thì in ra x = 0

// // Nếu x > 0, và x là số nguyên thì in ra x là số nguyên dương

// // Nếu x > 0 và x là số  thập phân thì in ra x là số thập phân dương

// function giatricuax(x){
//     if(x>0){
//         if (Number.isInteger(x)){
//             return "X là số nguyên dương"
//         }
//         else{
//             return "X là số thập phân dương"
//         }
//     }
//     else if(x===0){
//         return "X = 0"
//     }
//     else{
//         return "X La So Am"
//     }
// }
// var kq = giatricuax(1.1)
// console.log(kq)


// Bài tập 2
// Viết chương trình JS để tính hoa hồng đại lý bạn sẽ nhận được tùy theo mức doanh số bán hàng.

// Cửa hàng của bạn nhận gửi bán sản phẩm cho một công ty khác và sau mỗi tháng bạn cần tính toán số tiền hoa hồng bạn nhận được. Với mức hoa hồng theo doanh số bán hàng như sau:

// 5% nếu tổng doanh số nhỏ hơn hoặc bằng 100 triệu.

// 10% nếu tổng doanh số nhỏ hơn hoặc bằng 300 triệu.

// 20 % nếu tổng doanh số là lớn hơn 300 triệu.

// Dựa vào dữ liệu trên, bạn viết chương trình JS để tính hoa hồng đại lý bạn sẽ nhận được.
// let hoahong=0
// function hoahongdaily(doanhso){
//     if(doanhso<=100000000){
//         hoahong = 0.05 * doanhso
//     }
//     else if(doanhso <= 300000000){
//         hoahong = 0.1 * doanhso
//     }
//     else{
//         hoahong = 0.2 * doanhso
//     }
    
//     return hoahong.toLocaleString("de-DE")
// }

// var kq = hoahongdaily(350000000)
// console.log("Hoa Hong Dai Ly La:", kq + " VND")

// Bài tập 3
// Xét tuyển thi đại học
// Yêu cầu bài tập này là nhập điểm thi ba môn Toán, Lý, Hóa của một thí sinh,
// kiểm tra theo tiêu chí đã cho, sau đó thông báo thí sinh có trúng tuyển hay không.
// Đây là bài tập khá cơ bản minh họa cho bạn cách sử dụng của lệnh IF ELSE.
// Tiêu chí:
// Điểm Toán >= 6.5
// Điểm Lý >= 5.5
// Điểm Hóa >= 5.0
// Tổng điểm ba môn >= 18.0
// hoặc
// Tổng điểm Toán và Vật lý >= 14.0
// Kết quả chương trình 
// Biên dịch và chạy chương trình trên

// function xettuyendaihoc(toan, ly, hoa){
//     var tongdiembamon = toan + ly + hoa
//     var tongdiemtoavaly = toan + ly
//     if((toan>=6.5 && ly>=5.5 && hoa>=5 && tongdiembamon >=18) || tongdiemtoavaly >=14){
//         return " Trung Tuyen"
//     }
//     else{
//         return " Khong trung tuyen"
//     }
// }
// var kq = xettuyendaihoc(7,7,4)
// console.log("Sinh Vien:", kq)

// Bài tập 4
// Nhập số và hiển thị số bằng chữ tương ứng
// Yêu cầu bài tập JS này là nhập một số bất kỳ và hiển thị số bằng chữ tương ứng 
// ví dụ: 0 là số không, 1 là số một, 11 là mười một ....


// function nhapso(so){
//     switch(so){
//         case 1:{
//             console.log("So Mot")
//             break
//         }
//         case 2:{
//             console.log("So Hai")
//             break
//         }
//         case 3:{
//             console.log("So Ba")
//             break
//         }
//         case 4:{
//             console.log("So Bon")
//             break
//         }
//         case 5:{
//             console.log("So Nam")
//             break
//         }
//         case 6:{
//             console.log("So Sau")
//             break
//         }
//         case 7:{
//             console.log("So Bay")
//             break
//         }
//         case 8:{
//             console.log("So Tam")
//             break
//         }
//         case 9:{
//             console.log("So Chinh")
//             break
//         }
//         case 10:{
//             console.log("So Muoi")
//             break
//         }
//         case 11:{
//             console.log("So Muoi Mot")
//             break
//         }
//     }
// }
// var kq = nhapso(7)


// Bài tập 5
// Viết chương trình tính tiền điện gồm các điều kiện sau:
// Tiền thuê bao điện kế: 1000đ/tháng
// Định mức sử dụng điện cho mỗi hộ là: 50 KW với giá 230đ/KW
// Nếu phần vượt định mức <= 50KW thì tính giá 480đ/KW
// Nếu 50KW < phần vượt định mức < 100KW thì tính giá 700đ/K
// Nếu phần vượt định mức >= 100KW thì tính giá 900đ/KW
// Chỉ số mới và cũ được nhập vào từ bàn phím. In ra màn hình chỉ số cũ, chỉ số mới, tiền trả định mức, tiền trả vượt định mức, tổng tiền phải trả.

// function tinhTienDien(chiSoCu, chiSoMoi) {
//     const dinhMuc = 50
//     const giaDinhMuc = 230
//     const giaDuoiDinhMuc = 480
//     const giaTrenDinhMucNho = 700
//     const giaTrenDinhMucLon = 900
//     const phiThueBao = 1000
//     let soKW = chiSoMoi - chiSoCu
//     let tienDinhMuc = 0
//     let tienVuotDinhMuc = 0
    // if (soKW <= dinhMuc) {
    //     tienDinhMuc = soKW * giaDinhMuc
    // } else if (soKW > dinhMuc && soKW <= 2 * dinhMuc) {
    //     tienDinhMuc = dinhMuc * giaDinhMuc
    //     tienVuotDinhMuc = (soKW - dinhMuc) * giaDuoiDinhMuc
    // } else if (soKW > 2 * dinhMuc && soKW <= 3 * dinhMuc) {
    //     tienDinhMuc = dinhMuc * giaDinhMuc
    //     tienVuotDinhMuc = dinhMuc * giaDuoiDinhMuc + (soKW - 2 * dinhMuc) * giaTrenDinhMucNho
    // } else {
    //     tienDinhMuc = dinhMuc * giaDinhMuc
    //     tienVuotDinhMuc = dinhMuc * giaDuoiDinhMuc + dinhMuc * giaTrenDinhMucNho + (soKW - 3 * dinhMuc) * giaTrenDinhMucLon
    // }
    // tongTien = tienDinhMuc + tienVuotDinhMuc + phiThueBao
//     if (soKW <= dinhMuc) {
//         tienDinhMuc = soKW * giaDinhMuc;
//       } else if (soKW > dinhMuc && soKW <= 2 * dinhMuc) {
//         tienDinhMuc = dinhMuc * giaDinhMuc;
//         tienVuotDinhMuc = (soKW - dinhMuc) * giaVuongDinhMuc;
//       } else if (soKW > 2 * dinhMuc && soKW <= 4 * dinhMuc) {
//         tienDinhMuc = dinhMuc * giaDinhMuc;
//         tienVuotDinhMuc = dinhMuc * giaVuongDinhMuc + (soKW - 3 * dinhMuc) * giaVuong100KW;
//       } else if (soKW > 4 * dinhMuc) {
//         tienDinhMuc = dinhMuc * giaDinhMuc;
//         tienVuotDinhMuc = dinhMuc * giaVuongDinhMuc + dinhMuc * giaVuong100KW + (soKW - 4 * dinhMuc) * giaTren100KW;
//       }
    
//       let tongTien = phiThueBao + tienDinhMuc + tienVuotDinhMuc;
//     return{
//         tiendinhmuc: tienDinhMuc.toLocaleString("de-DE"),
//         tienvuotdinhmuc: tienVuotDinhMuc.toLocaleString("de-DE"),
//         tongtien: tongTien.toLocaleString("de-DE")
//     }
// }
// let kq = tinhTienDien(10, 300)
//     console.log("Chi So Cu:", 10)
//     console.log("Chi So Moi:", 300)
//     console.log("Tien Tra Dinh Muc:", kq.tiendinhmuc)
//     console.log("Tien Tra Vuot Dinh Muc:", kq.tienvuotdinhmuc)
//     console.log("Tong Tien Phai Tra:", kq.tongtien)

//     function tinhTienDien(chiSoCu, chiSoMoi) {
//         const phiThueBao = 1000;
//         const dinhMuc = 50;
//         const giaDinhMuc = 230;
//         const giaVuongDinhMuc = 480;
//         const giaVuong100KW = 700;
//         const giaTren100KW = 900;
      
//         let soKW = chiSoMoi - chiSoCu;
//         let tienDinhMuc = 0;
//         let tienVuotDinhMuc = 0;
      
//         if (soKW <= dinhMuc) {
//           tienDinhMuc = soKW * giaDinhMuc;
//         } else if (soKW > dinhMuc && soKW <= 2 * dinhMuc) {
//           tienDinhMuc = dinhMuc * giaDinhMuc;
//           tienVuotDinhMuc = (soKW - dinhMuc) * giaVuongDinhMuc;
//         } else if (soKW > 2 * dinhMuc && soKW <= 4 * dinhMuc) {
//           tienDinhMuc = dinhMuc * giaDinhMuc;
//           tienVuotDinhMuc = dinhMuc * giaVuongDinhMuc + (soKW - 3 * dinhMuc) * giaVuong100KW;
//         } else if (soKW > 4 * dinhMuc) {
//           tienDinhMuc = dinhMuc * giaDinhMuc;
//           tienVuotDinhMuc = dinhMuc * giaVuongDinhMuc + dinhMuc * giaVuong100KW + (soKW - 4 * dinhMuc) * giaTren100KW;
//         }
      
//         let tongTien = phiThueBao + tienDinhMuc + tienVuotDinhMuc;
//         console.log("Chỉ số cũ:", chiSoCu);
//         console.log("Chỉ số mới:", chiSoMoi);
//         console.log("Tiền trả định mức:", tienDinhMuc, "đồng");
//         console.log("Tiền trả vượt định mức:", tienVuotDinhMuc, "đồng");
//         console.log("Tổng tiền phải trả:", tongTien, "đồng");
//       }
      
//       // Sử dụng hàm và nhập chỉ số cũ và mới từ bàn phím
//       tinhTienDien(10, 300); // Thay thế 100 và 180 bằng chỉ số cũ và mới tương ứng