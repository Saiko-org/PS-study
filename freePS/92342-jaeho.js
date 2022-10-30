// 프로그래머스 / 92342 / 양궁대회 (Lv2 2022 KAKAO BLIND RECRUITMENT)
// https://school.programmers.co.kr/learn/courses/30/lessons/92342
// solve: 1시간
// 테스트 8, 18를 찾느라 오래 걸림

function solution(n, info) {
  if (n === info[0]) {
    return [-1];
  }

  let answer = Array.from({ length: 11 }, () => 0);
  let answerGap = 0;
  const board = Array.from({ length: 11 }, () => 0);

  const dfs = (index, count, ryan, apeach) => {
    if (n < count) {
      return;
    }

    if (index === 11) {
      const gap = ryan - apeach;

      if (answerGap < gap) {
        answer = [...board];
        answerGap = gap;
      } else if (answerGap !== 0 && answerGap === gap) {
        for (let i = 10; i >= 0; i--) {
          if (answer[i] < board[i]) {
            answer = [...board];
            return;
          } else if (answer[i] > board[i]) {
            // 화살이 있는 점수에는 기존 정답의 화살보다 적으면 안됨
            // 테스트 8, 18 통과할 수 있는 부분
            return;
          }
        }
      }
      return;
    }

    if (index === 10) {
      board[index] = n - count;
      dfs(index + 1, n, ryan, apeach);
      board[index] = 0;

      return;
    }

    const usedArrow = info[index] + 1;
    const score = 10 - index;

    board[index] = usedArrow;
    dfs(index + 1, count + usedArrow, ryan + score, apeach);
    board[index] = 0;
    if (info[index] === 0) {
      dfs(index + 1, count, ryan, apeach);
    } else {
      dfs(index + 1, count, ryan, apeach + score);
    }
  };

  dfs(0, 0, 0, 0);

  // 테스트 23
  if (answerGap === 0) {
    return [-1];
  }

  return answer;
}
