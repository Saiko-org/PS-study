// 프로그래머스 / 12987 / 숫자 게임 (Lv3 Summer/Winter Coding(~2018))
// https://school.programmers.co.kr/learn/courses/30/lessons/12987
// solve: 40분
// A의 숫자보다 가장 작은 차이로 이길 수 있는 수를 골라내면 O(N)으로 해결가능

function solution(A, B) {
  let answer = 0;

  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  let indexB = 0;
  for (let index = 0; index < A.length; index++) {
    const numberA = A[index];

    while (indexB < B.length && numberA >= B[indexB]) {
      indexB += 1;
    }
    if (indexB === B.length) {
      break;
    }
    indexB += 1;
    answer += 1;
  }

  return answer;
}
