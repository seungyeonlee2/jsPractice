const date = new Date();

const viewYear = date.getFullYear();
const viewMonth = date.getMonth();

document.querySelector('.yearMonth').textContent = `${viewYear}. ${viewMonth + 1}`;

// new Date(year, monthIndex, day(일));
// 지난달 마지막 날짜, 이번달 마지막 날짜 구하기
// 새로운 date 객체 생성할 때 파라미터 date의 해당부분에 0을 전달하게 되면 지난달 마지막날의 date 객체 생성됨
const prevLast = new date(viewYear, viewMonth, 0);
const thisLast = new date(viewYear, viewMonth + 1, 0);

// 지난 달 마지막 날짜와 요일
const PrevLastDate = prevLast.getDate();
const PrevLastDay = prevLast.getDay();

// 이번 달 마지막 날짜와 요일
const ThisLastDate = thisLast.getDate();
const ThisLastDay = thisLast.getDay();

// ======== 지난달 마지막 날짜와 요일, 이번달 마지막 날짜와 요일 완성

// 전체 달력에 필요한 날짜
const PDates = []; //전체 달력 기준 이전달

// Array(n)으로 배열 만들기 - 길이가 n인 배열 생성 (모든 요소 undifined)
// 빈배열이기 때문에 keys() 함수 사용시 0~ n - 1 까지 배열 생성 ,(마지막날짜) + 1 해줘야 함 
// 맨 앞에 0 삭제 - slice 사용
const TDates = [... Array(ThisLastDate + 1).keys()].slice(1);

const NDates = []; // 전체 달력 기준 다음달

//PDates, NDates 채우기 (반복문 사용) 
// 1) 이전 달 표현 날짜 생성
// 2) 지난 달 마지막 요일이 토요일(6)이면 작성할 필요 없음 - 조건문 사용
if (PrevLastDay !== 6) {
    //반복문의 조건 부분은 0부터 지난달 마지막 요일까지 반복하게 작성
    for (let i = 0; i < PrevLastDay + 1; i++) {
        //지난 달의 마지막 날짜부터 1씩 줄어든 값을 PrevLastDay 배열 앞쪽에 채움
        PDates.unshift(PrevLastDate - i);
    }
}

// 다음 달 표현
// 이번 달 마지막 날짜의 요일 기준, 필요한 개수 파악 후 1부터 1씩 증가
// NDates 배열에 1개씩 채움
for (let i = 1; i < 7 - ThisLastDay; i++) {
    NDates.push(i);
}

// concat 매서드로 세개 배열 합치기 
const dates = PDates.concat(TDates, NDates);

// forEach 매서드로 전체 요소 돌면서 html코드로 데이터 수정
date.forEach((date, i) => {
    dates[i] = `<div class = "date">${date}</div>`;
})

document.querySelector('.dates').innerHTML = dates.join('');