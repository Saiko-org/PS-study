// 프로그래머스 / 42862 / 체육복
// https://school.programmers.co.kr/learn/courses/30/lessons/42862
// solve: 스터디 시작 전에 풀어 시간 X

function solution(n, lost, reserve) {
  const trainingClothes = Array(n).fill(1);

  lost.map((clothes) => {
    trainingClothes[clothes - 1] = 0;
  });

  reserve.map((clothes) => {
    trainingClothes[clothes - 1] += 1;
  });

  for (let i = 0; i < n; i++) {
    if (trainingClothes[i] === 0 && trainingClothes[i - 1] === 2) {
      trainingClothes[i] = 1;
      trainingClothes[i - 1] = 1;
    } else if (trainingClothes[i] === 0 && trainingClothes[i + 1] === 2) {
      trainingClothes[i] = 1;
      trainingClothes[i + 1] = 1;
    }
  }

  return trainingClothes.filter((clothesCount) => clothesCount > 0).length;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
