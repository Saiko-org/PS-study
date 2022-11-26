// 프로그래머스 / 17678 / [1차 셔틀버스] (Lv3 2018 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/17678
// solve: 60분

function solution(n, t, m, timetable) {
  const convertToTime = (minutes) => {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;

    return (hour + "").padStart(2, "0") + ":" + (minute + "").padStart(2, "0");
  };
  const convertToMinute = (time) => {
    const [hour, minute] = time.split(":").map((value) => parseInt(value));

    return hour * 60 + minute;
  };
  const start = convertToMinute("09:00");
  const end = start + (n - 1) * t;

  timetable = timetable
    .map((time) => convertToMinute(time))
    .filter((value) => value <= end);

  timetable.sort((a, b) => a - b);

  let pointer = 0;
  for (let time = start; time <= end; time += t) {
    let count = 0;
    for (let c = 0; c < m; c++) {
      if (pointer + c < timetable.length && timetable[pointer + c] <= time) {
        count += 1;
      }
    }
    pointer += count;

    if (time === end) {
      if (count < m) {
        return convertToTime(end);
      }
      return convertToTime(timetable[pointer - 1] - 1);
    }
  }
}
