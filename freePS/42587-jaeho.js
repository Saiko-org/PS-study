// 프로그래머스 / 42587 / 프린터 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/42587
// solve: 12분

function solution(priorities, location) {
  let answer = 1;
  priorities = priorities.map((value, index) => {
    return { value, target: index === location ? true : false };
  });

  while (0 < priorities.length) {
    const J = priorities.shift();

    if (priorities.find((element) => J.value < element.value)) {
      priorities.push(J);
    } else {
      if (J.target) {
        return answer;
      } else {
        answer++;
      }
    }
  }

  return answer;
}
