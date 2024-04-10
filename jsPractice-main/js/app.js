const date = new Date();

const viewYear = date.getFullYear();
const viewMonth = date.getMonth();

document.querySelector('.yearMonth').textContent = `${viewYear}. ${viewMonth + 1}`;

const prevLast = new Date(viewYear, viewMonth, 0);
const thisLast = new Date(viewYear, viewMonth + 1, 0);

const PrevLastDate = prevLast.getDate();
const PrevLastDay = prevLast.getDay();

const ThisLastDate = thisLast.getDate();
const ThisLastDay = thisLast.getDay();

const PDates = []; //전체 달력 기준 이전달
const TDates = [...Array(ThisLastDate + 1).keys()].slice(1);
const NDates = []; // 전체 달력 기준 다음달

if (PrevLastDay !== 6) {
    for (let i = 0; i < PrevLastDay + 1; i++) {
        PDates.unshift(PrevLastDate - i);
    }
}

for (let i = 1; i < 7 - ThisLastDay; i++) {
    NDates.push(i);
}

const dates = PDates.concat(TDates, NDates);

// 배열 대신 문자열로 날짜를 직접 수정
const modifiedDates = dates.map(date => `<div class="date">${date}</div>`);

document.querySelector('.dates').innerHTML = modifiedDates.join('');


