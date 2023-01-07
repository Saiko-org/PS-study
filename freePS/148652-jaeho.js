// 프로그래머스 / 148652 / 유사 칸토어 비트열 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/148652
// solve: 60분

function solution(n, l, r) {
  let result = 0;
  let memo = Array.from({ length: r - l + 1 }, (_, i) => i + l);

  if (n === 1) {
    return memo.filter((e) => e !== 3).length;
  }

  while (memo.length) {
    const newMemo = [];

    for (const e of memo) {
      if (e === 1) {
        result += 1;
        continue;
      }

      if ((e + 2) % 5) {
        const fixedEl = Math.ceil(e / 5);
        newMemo.push(fixedEl);
      }
    }

    memo = newMemo;
  }

  return result;
}
