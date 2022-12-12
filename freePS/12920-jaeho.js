// 프로그래머스 / 12920 / 선입 선출 스케줄링 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/12920
// solve: 1시간

function solution(n, cores) {
  if (n < cores.length) {
    return n;
  }

  let left = 1;
  let right = Math.max(...cores) * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let worked = cores.length;
    let work = 0;

    for (const core of cores) {
      worked += Math.floor(mid / core);

      if (mid % core === 0) {
        worked -= 1;
        work += 1;
      }
    }

    let totalWork = worked + work;

    if (worked >= n) {
      right = mid - 1;
    } else if (totalWork < n) {
      left = mid + 1;
    } else {
      for (let i = 0; i < cores.length; i++) {
        if (mid % cores[i] === 0) {
          worked += 1;
        }
        if (worked === n) {
          return i + 1;
        }
      }
    }
  }
}
