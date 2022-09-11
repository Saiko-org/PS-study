// 프로그래머스 / 42862 / 체육복
// https://school.programmers.co.kr/learn/courses/30/lessons/42862
// solve : 16분

function solution(n, lost, reserve) {
  // 모두 1개씩 있다고 가정
  const checkList = Array.from({length: n}, () => 1);

  // 잃어버린 사람 체크
  for (const studentID of lost) {
      checkList[studentID - 1] -= 1;
  }

  // 여분있는 사람 체크
  for (const studentID of reserve) {
      checkList[studentID - 1] += 1;
  }

  for (let current = 0; current < n; current++) {
      if (checkList[current] !== 0) {
          continue;
      }

      const prev = current - 1;
      const next = current + 1;
      if (0 <= prev && checkList[prev] === 2) {
          checkList[prev] -= 1;
          checkList[current] += 1;
      } else if (next < n && checkList[next] === 2) {
          checkList[next] -= 1;
          checkList[current] += 1;
      }
  }

  return checkList.filter((value) => 0 < value).length;
}
