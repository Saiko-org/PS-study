// Codility / lesson1 / BinaryGap
// https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
// solve: 15분

// 2진수 문자열로 만들고
// 각 1과 1사이의 길이를 저장
// 가장 큰 길이를 반환
function solution(N) {
  let result = 0;
  let gap = 0;
  const binary = N.toString(2);
  for (const e of binary) {
    if (e === "1") {
      result = Math.max(result, gap);
      gap = 0;
    }

    if (e === "0") {
      gap += 1;
    }
  }
  return result;
}
