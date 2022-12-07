// 프로그래머스 / 12923 / 숫자 블록 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/12923
// solve: 40분
// 효율성 해결하는데 많은 시간 뺏김..
// 최대한 빨리 최대공약수를 알아내는 로직이 필요하다
// 그리고 최대공약수가 1e7 이하임을 확인하지 않으면 효율성에서 탈락한다

function solution(begin, end) {
  const answer = [];

  const getBlockNumber = (target) => {
    // 최대공약수를 찾아간다.
    const root = Math.floor(Math.sqrt(target));
    for (let num = 2; num <= root; num++) {
      if (target % num === 0 && target / num <= 1e7) {
        return target / num;
      }
    }
    return 1;
  };

  if (begin === 1) {
    answer.push(0);
  }

  for (let n = begin === 1 ? 2 : begin; n <= end; n++) {
    answer.push(getBlockNumber(n));
  }

  return answer;
}
