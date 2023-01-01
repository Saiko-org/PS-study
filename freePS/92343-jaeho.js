// 프로그래머스 / 92343 / 양과 늑대 (Lv3 2022 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/92343
// solve: 60분
// 풀이 참고 : https://blog.encrypted.gg/1029

function solution(info, edges) {
  let answer = 1;
  const n = info.length;
  const l = Array.from({ length: n }, () => -1);
  const r = Array.from({ length: n }, () => -1);
  const val = Array.from({ length: n }, () => -1);
  const visited = Array.from({ length: 1 << 17 }, () => false);

  const dfs = (state) => {
    if (visited[state]) {
      return;
    }

    visited[state] = 1;

    let [wolf, num] = [0, 0];

    for (let i = 0; i < n; i++) {
      if (state & (1 << i)) {
        num += 1;
        wolf += val[i];
      }
    }

    if (2 * wolf >= num) {
      return;
    }

    answer = Math.max(answer, num - wolf);

    for (let i = 0; i < n; i++) {
      if (!(state & (1 << i))) {
        continue;
      }
      if (l[i] !== -1) {
        dfs(state | (1 << l[i]));
      }

      if (r[i] !== -1) {
        dfs(state | (1 << r[i]));
      }
    }
  };

  for (let i = 0; i < n; i++) {
    val[i] = info[i];
  }
  for (const edge of edges) {
    const [p, c] = edge;
    if (l[p] === -1) {
      l[p] = c;
    } else {
      r[p] = c;
    }
  }

  dfs(1);

  return answer;
}
