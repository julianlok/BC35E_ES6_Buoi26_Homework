/* Bài tập tính điểm trung bình **/

let getE = id => document.querySelector(id);

const AVG = (...arrScore) => {
    let result = 0;
    let sum = 0;

    for (let score of arrScore) {
        result += score;
        sum = arrScore.length
    }
    return result / sum;
}


getE('#btnKhoi1').onclick = () => {
    let diemToan = +getE('#inpToan').value;
    let diemLy = +getE('#inpLy').value;
    let diemHoa = +getE('#inpHoa').value;
    let avg1 = AVG(diemToan, diemLy, diemHoa).toFixed(2)

    getE('#tbKhoi1').innerHTML = avg1;
}

getE('#btnKhoi2').onclick = () => {
    let diemVan = +getE('#inpVan').value;
    let diemSu = +getE('#inpSu').value;
    let diemDia = +getE('#inpDia').value;
    let english = +getE('#inpEnglish').value;
    let avg2 = AVG(diemVan, diemSu, diemDia, english).toFixed(2)

    getE('#tbKhoi2').innerHTML = avg2;
}


