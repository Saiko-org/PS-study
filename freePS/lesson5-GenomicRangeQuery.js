// Codility / lesson5 / GenomicRangeQuery
// https://app.codility.com/programmers/lessons/5-prefix_sums/genomic_range_query/
// solve: 30분

// 시간 복잡도 : O(N * M) => Timeout

// 1. S문자열을 숫자 배열로 구한다.
// 2. 각 범위에서 가장 작은 숫자를 구한다.

// 시간 복잡도 : O(N + M) => 구간합(prefix sum)을 이용한 풀이

// 1. S문자열을 숫자 배열로 구한다.
// 2. 숫자 배열을 순회한다.
// 2-1. 각 index만날때 마다 index(*의 갯수)를 올리고
// 2-2. [A의 갯수, C의 갯수, G의 갯수, T의 갯수]를 매번 저장한다.
// 3. 저장한 배열[Q의 index] - 저장한 배열[P의 index - 1] 했을때 가장 작은 index를 반환한다.

const factorMap = {
  A: 0,
  C: 1,
  G: 2,
  T: 3,
};

function solution(S, P, Q) {
  const result = [];
  const N = S.length;
  const M = P.length;
  const factors = S.split("").map((s) => factorMap[s]);
  const accumulatedDNA = [0, 0, 0, 0];
  const DNAs = [[0, 0, 0, 0]];

  for (let index = 0; index < N; index++) {
    const factor = factors[index];
    accumulatedDNA[factor] += 1;
    DNAs.push([...accumulatedDNA]);
  }

  for (let index = 0; index < M; index++) {
    const start = P[index];
    const end = Q[index];

    result.push(getMinFactor(start, end));
  }

  return result;

  function getMinFactor(start, end) {
    const bigDNA = DNAs[end + 1];
    const smallDNA = DNAs[start];
    for (let index = 0; index < 4; index++) {
      const restFactor = bigDNA[index] - smallDNA[index];
      if (restFactor !== 0) {
        return index + 1;
      }
    }
  }
}
