// 프로그래머스 / 42586 / 기능개발 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/42586
// solve: 11분

function solution(progresses, speeds) {
  const answer = [];
  const restDays = [];

  // 개발완료까지 남은 일수 계산
  for (let index = 0; index < progresses.length; index++) {
    const restProgress = 100 - progresses[index];
    const restDay = Math.ceil(restProgress / speeds[index]);
    restDays.push(restDay);
  }

  // 기준 요소로부터 오른쪽으로 더 작거나 같은 요소의 갯수를 센다.
  // 그것은 같은 날에 배포되는 기능의 수를 뜻한다.
  let left = 0;
  let right = 0;

  while (right < restDays.length && left <= right) {
    while (right < restDays.length && restDays[right] <= restDays[left]) {
      right += 1;
    }
    answer.push(right - left);
    left = right;
  }

  return answer;
}
