// 프로그래머스 / 72414 / 광고 삽입 (Lv3 2021 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/72414
// solve: 1시간

function solution(play_time, adv_time, logs) {
  const getpad = (number) => {
    return number.toString().padStart(2, "0");
  };
  const timeToSecond = (time) => {
    const [h, m, s] = time.split(":");
    return parseInt(h) * 3600 + parseInt(m) * 60 + parseInt(s);
  };
  const secondToTime = (second) => {
    const h = getpad(Math.floor(second / 3600));
    const m = getpad(Math.floor((second - h * 3600) / 60));
    const s = getpad(second % 60);
    return [h, m, s].join(":");
  };
  const playTime = timeToSecond(play_time);
  const advTime = timeToSecond(adv_time);

  // 영상 길이보다 광고 길이가 더 긴 경우
  if (playTime <= advTime) {
    return "00:00:00";
  }

  // 초단위로 통일
  logs = logs
    .map((value) => value.split("-").map((time) => timeToSecond(time)))
    .sort((a, b) => a[0] - b[0]);

  // 누적합을 작성할 1차원 배열
  const board = Array.from({ length: playTime + 1 }, () => 0);

  // 시청자 출입 기록
  logs.forEach(([start, end]) => {
    board[start] += 1;
    board[end] -= 1;
  });

  // 시간별 시청자 수 기록
  for (let index = 1; index <= playTime; index++) {
    board[index] += board[index - 1];
  }

  // 구간별 누적 시청자 수 기록
  for (let index = 1; index <= playTime; index++) {
    board[index] += board[index - 1];
  }

  // 구간 합을 구하고 비교하여 정답 구하기
  let answer = 0;
  let answerSum = 0;
  for (let index = 0; index <= playTime - advTime; index++) {
    const prefixSum =
      board[index + advTime - 1] - (index === 0 ? 0 : board[index - 1]);
    if (answerSum < prefixSum) {
      answerSum = prefixSum;
      answer = index;
    }
  }

  return secondToTime(answer);
}
