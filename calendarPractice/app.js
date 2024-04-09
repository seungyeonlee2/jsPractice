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

//PDates, NDates 채우기

