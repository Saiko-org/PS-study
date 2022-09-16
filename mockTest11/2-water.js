// 프로그래머스 / 1845 / 폰켓몬
// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// solve: 15분

function solution(nums) {
  let animals = [...new Set(nums)];
  let countOfHaveAnimal = nums.length / 2;

  return animals.length > countOfHaveAnimal ? countOfHaveAnimal : animals.length;
}

console.log(solution([3, 1, 2, 3]));
console.log(solution([3, 3, 3, 2, 2, 4]));
