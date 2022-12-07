// 프로그래머스 / 64065 / 튜플 (Lv2 2019 카카오 개발자 겨울 인턴십)
// https://school.programmers.co.kr/learn/courses/30/lessons/64065
// solve: 30분

function solution(s) {
  s = s.replaceAll("{{", "");
  s = s.replaceAll("}}", "");
  s = s.replaceAll("},{", "/");

  const nums = s.split("/").sort((a, b) => a.length - b.length);
  const set = new Set();

  for (const num of nums) {
    const array = num.split(",");
    for (const element of array) {
      set.add(parseInt(element));
    }
  }

  return Array.from(set);
}
