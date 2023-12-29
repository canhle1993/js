//Bài 1: (2 điểm) Viết hàm tính giá trị của biểu thức: 
// Với x = 5, y = 1, z = 2
let x = 5
let y = 1
let z = 2
let giaTriBieuThuc = 3 * Math.pow(x, 4) - 5 * x * y + 6 * z * Math.pow(y, 2) - ((7/2)* Math.pow(z, 4))
console.log("Gia Tri Bieu Thuc la:", giaTriBieuThuc)

//bai 2;
let BMI = 0
function kiemTraCanNang(chieuCao, canNang) {
  BMI = canNang / (chieuCao * chieuCao)
    if (BMI < 17) {
      console.log("Nguoi Nay Bi Om")
    } 
    else if (BMI >= 17 && BMI <= 25) {
      console.log("Nguoi Nay Binh Thuong")
    } 
    else {
      console.log("Nguoi Nay Thua Can")
    }
  }
  //a. kiem tra can nang cua Nguyen Van A
  kiemTraCanNang(1.7, 80)
  //b. Kiem Tra Can nang cua Nguyen Van B
  kiemTraCanNang(1.65, 63)

//Bài 3: Viết hàm giải phương trình bậc 2
// a. Với a = 1, b =1, c =1
// b. Với a = 1, b = -5, c = 6
function giaiPhuongTrinhBacHai(a, b, c) {
    let delta = b * b - 4 * a * c
    let x1 = 0
    let x2 = 0
    if (delta > 0) {
      x1 = (-b + Math.sqrt(delta)) / (2 * a)
      x2 = (-b - Math.sqrt(delta)) / (2 * a)
      return "Phuong Trinh co hai nghiem: x1 = " + x1 + ", x2 = " + x2
    } else if (delta === 0) {
        let nghiem = -c / b
      return 'Phuong Trinh Co mot Nghiem:',nghiem
    } else {
      return 'Phuong Trinh Vo Nghiem'
    }
  }
  //a
  console.log(giaiPhuongTrinhBacHai(1, 1, 1))
  //b
  console.log(giaiPhuongTrinhBacHai(1, -5, 6))
  
//   Bài 4: (2 điểm) Cho mảng 1 chiều: arr = [5, 1, -2, 8, 10]
// a. (1 điểm) Tìm độ lệch giữa phần tử lớn nhất và phần tử nhỏ nhì trong mảng trên
// Lưu ý:
// - Phần tử lớn nhất là phần tử có giá trị lớn nhất trong mảng
// - Phần tử nhỏ nhì là phần tử có giá trị nhỏ thứ 2 trong mảng
// b. (1 điểm) Tìm tất cả các cặp số có tổng bằng 6

//a
//em sap xep mang tang dan de tim phan tu nho nhi
let arr = [5, 1, -2, 8, 10]
for(let i = 0; i < arr.length - 1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            let tam = arr[i]
            arr[i] = arr[j]
            arr[j] = tam
         }
    }
}
// em tim phan tu lon nhat
let max = arr[0]
let doChenhLechLonNhat = [0]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
    doChenhLechLonNhat = max - arr[1]
}
console.log("Do chenh lech giua 2 phan tu la:",doChenhLechLonNhat)

// b.Tìm tất cả các cặp số có tổng bằng 6
for (let i = 0; i < arr.length - 1; i++){
    for(let j = i + 1; j < arr.length; j++){
         if(arr[i] + arr[j] === 6){
             console.log('Cap so cua %s cong cap so cua %s = 6',arr[i], arr[j])
        }
     }
 }


