// bài 1: tính ngày kế tiếp
// input: nhập vào số ngày, tháng, năm

// process: 
/*
b1: check năm phải năm nhuận ko?
b2: tính số ngày trong tháng
b3: tính số ngày kế tiếp và ngày trước đó
*/

// output: xuất ra ngày tiếp theo và ngày trước đó

function checkYear(y) {
    return ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0);
}

function numDayInMonth(m,y) {
    switch(m) {
        case 1:case 3:case 5:case 7:case 8:case 10:case 12:
        {
            return 31;
            break;
        }
        case 2:
        {
            if(checkYear(y))
            {
                return 29;
            }
            return 28;
            }
        case 4:case 6:case 9:case 11:
            {
            return 30;
            }   
    }
}

function nextDay(y, m, d) {
    let ny = y;
    let nm = m;
    let nd = d;
    if (m!=2) {
        nd = d + 1;
        if(m!=12 && d==numDayInMonth(m,y)) {
            nd = 1;
            nm = m++;
        } else if(m==12 && d==numDayInMonth(m,y)) {
            nd = 1;
            ny = ++y;
            nm = 1;
            } else if (m==2) {
                if (checkYear(y)) {
                    if (d==29) {
                        nd = 1;
                        nm = ++m;
                    }
                } else {
                    if (d==28) {
                        nd = 1;
                        nm = ++m;
                    }
                }
            }
        return (nd + '/' + nm + '/' + ny);
    }
}

function lastDay(y, m, d) {
    let ly = y;
    let lm = m;
    let ld = d;
    ld = d - 1;
    // TH không phải tháng 1 và ngày 1
    if(m!=1 && d==1) {
        // TH1: tháng 2,4,6,8,9,11
        if (m == 2 || m == 4 || m == 6 || m == 8 || m == 9 || m == 11) {
            ld = 31;
            lm = --m;
        }
        //TH2: tháng 3
        if (m==3) {
            if (checkYear(y)) {
                ld = 29;
                lm = --m;
            } else {
                ld = 28;
                lm = --m;
            }
        }
        //TH3: tháng 5,7,10,12
        if(m == 5 || m == 7 || m == 10 || m == 12) {
            ld = 30;
            lm = --m;
        }
    } else if (m==1&&d==1) {
        ld = 31;
        ly =--y;
        lm =12;
    }
        
    return (ld + '/' + lm + '/' + ly);
    
}

function ex1() {
    let day = +document.getElementById('day').value;
    let month = +document.getElementById('month').value;
    let year = +document.getElementById('year').value;
    if (year>0 && month>0 && month<13 && day>0 && day<=(numDayInMonth(month,year))) {
        
        document.getElementById('nextDay').innerHTML = nextDay(year,month,day);
        document.getElementById('lastDay').innerHTML = lastDay(year,month,day);

    } else alert ('Nhập sai ngày, tháng, năm!!!')
}

// bài 2 tính số ngày trong tháng
// input: nhập vào số tháng, năm

// process: 
/*
b1: check năm phải năm nhuận ko?
b2: tính số ngày trong tháng
*/

// output: xuất ra số ngày trong tháng

function ex2() {
    let month2 = +document.getElementById('month2').value;
    let year2 = +document.getElementById('year2').value;
    if (year2>0 && month2>0 && month2<13) {
        
        document.getElementById('numDayInMonth2').innerHTML = numDayInMonth(month2,year2);

    } else alert ('Nhập sai tháng, năm!!!')
}

// bài 3: nhập vào số nguyên có 3 chữ số và in ra cách đọc
// input: nhập vào số nguyên có 3 chữ số

// process: 
/*
b1: in ra hàng trăm
b2: in ra hàng chục
b3: in ra hàng đơn vị
*/

// output: xuất ra cách đọc chữ số

function ex3() {
    let n = +document.getElementById('num').value;
    let readC;
    let readB;
    let readA;
    // a số đơn vị
    let a = n%10;

    // b số hàng chục
    let b = Math.floor((n/10)%10);

    // c số hàng trăm 
    let c = Math.floor(n/100);
    if (n<100 || n>999) alert ('Nhập vào số có 3 chữ số')
    else {
        switch (c) {
            case 1: readC = 'Một trăm'; break;
            case 2: readC = 'Hai trăm'; break;
            case 3: readC = 'Ba trăm'; break;
            case 4: readC = 'Bốn trăm'; break;
            case 5: readC = 'Năm trăm'; break;
            case 6: readC = 'Sáu trăm'; break;
            case 7: readC = 'Bảy trăm'; break;
            case 8: readC = 'Tám trăm'; break;
            case 9: readC = 'Chín trăm'; break;
        }
        if (b == 0 && a !=0) readB = 'lẻ';
        switch (b) {
            case 1: readB = 'mười'; break;
            case 2: readB = 'hai mươi'; break;
            case 3: readB = 'ba mươi'; break;
            case 4: readB = 'bốn mươi'; break;
            case 5: readB = 'năm mươi'; break;
            case 6: readB = 'sáu mươi'; break;
            case 7: readB = 'bảy mươi'; break;
            case 8: readB = 'tám mươi'; break;
            case 9: readB = 'chín mươi'; break;
        }

        switch (a) {
            case 1: readA = 'một'; break;
            case 2: readA = 'hai'; break;
            case 3: readA = 'ba'; break;
            case 4: readA = 'bốn'; break;
            case 5: readA = 'năm'; break;
            case 6: readA = 'sáu'; break;
            case 7: readA = 'bảy'; break;
            case 8: readA = 'tám'; break;
            case 9: readA = 'chín'; break;
        }
    }
    if (a == 0) document.getElementById('resultB3').innerHTML = readC;
    else document.getElementById('resultB3').innerHTML = readC + ' ' + readB + ' ' + readA;
}

// bài 4: tìm sinh viên có khoản cách đến trường xa nhất
// input: tên 3 sinh viên, vị trí 3 sinh viên, vị trí trường học
// process:
/*
B1: tính dc khoản cách từ nhà đến trường từng SV
B2: tìm ra sv có khoản cách xa nhất
*/
// output: tên sv có nhà xa nhất

function calDistance(x, y,xT, yT) {
    let d = Math.sqrt((xT-x)*(xT-x) + (yT-y)*(yT-y));
    return d;
}

function ex4() {
    let s1 = document.getElementById('name1').value;
    let x1 = +document.getElementById('x1').value;
    let y1 = +document.getElementById('y1').value;
    let s2 = document.getElementById('name2').value;
    let x2 = +document.getElementById('x2').value;
    let y2 = +document.getElementById('y2').value;
    let s3 = document.getElementById('name3').value;
    let x3 = +document.getElementById('x3').value;
    let y3 = +document.getElementById('y3').value;
    let xT = +document.getElementById('xT').value;
    let yT = +document.getElementById('yT').value;
    let d1 = calDistance(x1, y1, xT, yT);
    console.log(d1);
    let d2 = calDistance(x2, y2, xT, yT);
    console.log(d2);
    let d3 = calDistance(x3, y3, xT, yT);
    console.log(d3);
    let max = Math.max (d1,d2,d3);
    console.log(max);
    let sMax = 'Sinh viên xa trường nhất là: ';
    switch (max) {
        case d1: sMax += s1;
        case d2: sMax += s2;
        case d3: sMax += s3;
        default:
            break;
    }
    document.getElementById('resultB4').innerHTML = sMax;
}