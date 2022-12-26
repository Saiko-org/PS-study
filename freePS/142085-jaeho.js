// 프로그래머스 / 142085 / 디펜스 게임 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/142085
// solve: 30분

function solution(n, k, enemy) {
  if (enemy.length <= k) {
    return enemy.length;
  }

  const totalEnemy = (end) => {
    return enemy
      .slice(0, end)
      .sort((a, b) => b - a)
      .slice(k)
      .reduce((sum, current) => sum + current, 0);
  };

  let left = 0;
  let right = enemy.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid <= k) {
      left = mid + 1;
      continue;
    }
    if (n < totalEnemy(mid)) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return left - 1;
}
