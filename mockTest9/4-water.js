// 프로그래머스 / 72414 / 광고 삽입
// https://school.programmers.co.kr/learn/courses/30/lessons/72414
// fail: 1시간
// add: 3시간
// 참고: https://velog.io/@longroadhome/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-LV.3-%EA%B4%91%EA%B3%A0-%EC%82%BD%EC%9E%85-JS

const HOUR = 3600;
const MINUTE = 60;
const SECOND = 1;

const timeToSeconds = (time) => {
  const [hours, minutes, seconds] = time.split(':').map(Number);
  return HOUR * hours + MINUTE * minutes + SECOND * seconds;
};

const convertToDoubleDigits = (number) => {
  return number.toString().padStart(2, '0');
};

const formattedToTime = (number) => {
  const hour = convertToDoubleDigits(Math.floor(number / HOUR));
  const minute = convertToDoubleDigits(Math.floor((number % HOUR) / MINUTE));
  const second = convertToDoubleDigits(number % MINUTE);

  return `${hour}:${minute}:${second}`;
};

function solution(play_time, adv_time, logs) {
  const playSeconds = timeToSeconds(play_time);
  const advSeconds = timeToSeconds(adv_time);
  const times = new Array(playSeconds).fill(0);

  logs.forEach((log) => {
    const [startTime, endTime] = log.split('-');
    const startTimeSeconds = timeToSeconds(startTime);
    const endTimeSeconds = timeToSeconds(endTime);

    times[startTimeSeconds] += 1;
    times[endTimeSeconds] -= 1;
  });

  for (let i = 1; i <= playSeconds; i++) {
    times[i] += times[i - 1];
  }

  for (let i = 1; i <= playSeconds; i++) {
    times[i] += times[i - 1];
  }

  let accPlayCount = times[advSeconds - 1];
  let startTimeIndex = 0;

  for (let i = advSeconds - 1; i < playSeconds; i++) {
    const nextPlayCount = times[i] - times[i - advSeconds];
    if (accPlayCount < nextPlayCount) {
      accPlayCount = nextPlayCount;
      startTimeIndex = i - advSeconds + 1;
    }
  }

  return formattedToTime(startTimeIndex);
}
