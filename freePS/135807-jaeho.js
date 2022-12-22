// 프로그래머스 / 135807 / 숫자 카드 나누기 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/135807
// solve: 30분

function solution(arrayA, arrayB) {
  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);

  const getA = (left, right) => {
    for (let a = left[0]; a > 0; a--) {
      if (left.every((v) => v % a === 0) && !right.some((v) => v % a === 0)) {
        return a;
      }
    }
    return 0;
  };

  return Math.max(getA(arrayA, arrayB), getA(arrayB, arrayA));
}
