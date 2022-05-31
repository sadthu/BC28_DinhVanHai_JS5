// Bài 1
function xemKetQua() {
	var monThu1 = +document.getElementById('monThu1').value;
	var monThu2 = +document.getElementById('monThu2').value;
	var monThu3 = +document.getElementById('monThu3').value;
	var diemChuan = +document.getElementById('diemChuan').value;
	var khuVuc = +document.getElementById('khuVuc').value;
	var doiTuong = +document.getElementById('doiTuong').value;
	var diemTong = monThu1 + monThu2 + monThu3 + khuVuc + doiTuong;
	var xetDuyet = '';
	if (monThu1 > 0 && monThu1 <= 10 && monThu2 > 0 && monThu2 <= 10 && monThu3 > 0 && monThu3 <= 10 && diemTong >= diemChuan && diemChuan <= 30 && diemChuan > 0) {
		xetDuyet = 'Đã đậu. ' + 'Tổng: ' + diemTong + ' Điểm';
	} else if (diemChuan > 30 || diemChuan <= 0) {
		xetDuyet = 'Sai điểm chuẩn';
	} else {
		if (monThu1 < 0 || monThu1 > 10 || monThu2 < 0 || monThu2 > 10 || monThu3 < 0 || monThu3 > 10) {
			xetDuyet = 'sai điểm thi';
		} else {
			xetDuyet = 'Rớt';
		}
	}
	document.getElementById('ketQua').innerHTML = xetDuyet;
}
btnKetQua.onclick = function () {
	xemKetQua();
}

// Bài 2
let soKwTieuThu = 0;
btnTinhTien.onclick = function () {
	var hoTen = document.getElementById('hoTen').value;
	let tien = Intl.NumberFormat('en-Us');
	soKwTieuThu = Number(document.getElementById('soKwTieuThu').value);
	document.getElementById ('ketQua2').innerHTML =hoTen + ': ' + tien.format(tongTien(soKwTieuThu)) + ' VND';
}

function tongTien(soKwTieuThu) {
	const conLai = 1300;
	const Amounts = [50, 50, 100, 150];
	const Prices = [500, 650, 850, 1100];

	if (soKwTieuThu <= 0 || !Number.isInteger(soKwTieuThu)) {
		return 0;
	}
	let soTien = 0;

	for (let index = 0; index < Amounts.length; index++) {
		if (soKwTieuThu > Amounts[index]) {
			soTien += Prices[index] * Amounts[index];
			soKwTieuThu -= Amounts[index];
		}
		else {
			soTien += Prices[index] * soKwTieuThu;
			soKwTieuThu = 0;
		}
	}

	soTien += soKwTieuThu * conLai;

	return soTien;
}
