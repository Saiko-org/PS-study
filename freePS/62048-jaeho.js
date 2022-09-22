// 프로그래머스 / 62048 / 멀쩡한 사각형 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/62048
// solve: 40분
// 하나의 파티션에서 못 쓰는 정사각형 갯수 세기 부분에서 시간 뺏김
// 참고 링크 : https://taesan94.tistory.com/55

const getGCD = (a, b) => {
  const smaller = Math.min(a, b);

  for (let n = smaller; 0 < n; n--) {
    if (a % n === 0 && b % n === 0) {
      return n;
    }
  }
  return 1;
};

function solution(w, h) {
  const gcd = getGCD(w, h);

  const partitionWidth = w / gcd;
  const partitionHeight = h / gcd;

  // 하나의 파티션에서 못 쓰는 정사각형 갯수 세기 : 가로 + 세로 - 1
  const partitionBlock = partitionWidth + partitionHeight - 1;

  return w * h - partitionBlock * gcd;
}
