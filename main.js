// Bài 1
function xemKetQua(){
    var monThu1 = +document.getElementById('monThu1').value;
    var monThu2 = +document.getElementById('monThu2').value;
    var monThu3 = +document.getElementById('monThu3').value;
    var diemChuan = +document.getElementById('diemChuan').value;
    var khuVuc = +document.getElementById('khuVuc').value;
    var doiTuong = +document.getElementById('doiTuong').value;
    var diemTong = monThu1 + monThu2 + monThu3 + khuVuc + doiTuong;
    var xetDuyet = '';
    if (monThu1 > 0 && monThu1 <= 10 && monThu2 > 0 && monThu2 <= 10 && monThu3 > 0 && monThu3 <= 10 && diemTong >= diemChuan && diemChuan <= 30) {
        xetDuyet = 'Đã đậu. ' + 'Tổng: ' + diemTong + ' Điểm';
    }else if(diemChuan > 30 || diemChuan < 0){
        xetDuyet = 'Sai điểm chuẩn';
    }else {
        xetDuyet = 'Rớt';
    }
    document.getElementById('ketQua').innerHTML = xetDuyet;
}
btnKetQua.onclick = function(){
    xemKetQua();
}
