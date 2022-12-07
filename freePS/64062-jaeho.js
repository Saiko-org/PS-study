// 프로그래머스 / 64062 / 징검다리 건너기 (Lv3 2019 카카오 개발자 겨울 인턴십)
// https://school.programmers.co.kr/learn/courses/30/lessons/64062
// solve: 60분
// 투 포인터
// 해설 참고 링크 : https://velog.io/@hyunjkluz/프로그래머스640464-징검다리-건너기-Java

function solution(stones, k) {
  let answer = 0;
  let left = 0;
  let right = 200000000;

  const check = (friends) => {
    let skip = 0;

    for (let index = 0; index < stones.length; index++) {
      const stone = stones[index];
      if (stone - friends < 0) {
        skip += 1;
      } else {
        skip = 0;
      }

      if (skip === k) {
        return false;
      }
    }
    return true;
  };

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (check(mid)) {
      left = mid + 1;
      answer = Math.max(answer, mid);
    } else {
      right = mid - 1;
    }
  }

  return answer;
}
