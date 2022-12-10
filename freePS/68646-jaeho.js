// 프로그래머스 / 68646 / 풍선 터트리기 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/68646
// solve: 30분

function solution(a) {
  if (a.length < 4) {
    return a.length;
  }

  let minIndex = 0;
  a.forEach((value, index) => {
    if (value < a[minIndex]) {
      minIndex = index;
    }
  });

  let answer = minIndex === 0 || minIndex === a.length - 1 ? 2 : 3;

  let target = 0;
  for (let index = 1; index < minIndex; ) {
    if (a[index] < a[target]) {
      target = index;
      answer += 1;
    }
    index += 1;
  }

  target = a.length - 1;
  for (let index = target - 1; minIndex < index; ) {
    if (a[index] < a[target]) {
      target = index;
      answer += 1;
    }
    index -= 1;
  }

  return answer;
}
