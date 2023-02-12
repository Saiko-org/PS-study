// 프로그래머스 / 155652 / 둘만의 암호 (Lv1)
// https://school.programmers.co.kr/learn/courses/30/lessons/155652
// solve: 18분

function solution(s, skip, index) {
  const asciiS = s.split("").map((value) => value.charCodeAt());
  const asciiSkip = skip
    .split("")
    .map((value) => value.charCodeAt())
    .sort((a, b) => a - b);

  return asciiS.map((value) => String.fromCharCode(convert(value))).join("");

  function convert(start) {
    let result = start + index;
    for (const skipIndex of asciiSkip) {
      if (start < skipIndex && skipIndex <= result) {
        result += 1;
      }
    }
    while ("z".charCodeAt() < result) {
      result -= "z".charCodeAt();
      result += "a".charCodeAt() - 1;
      for (const skipIndex of asciiSkip) {
        if ("a".charCodeAt() <= skipIndex && skipIndex <= result) {
          result += 1;
        }
      }
    }
    return result;
  }
}
