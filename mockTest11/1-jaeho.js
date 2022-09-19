// 프로그래머스 / 모의테스트10-1 / 팰린드롬
// 문제를 찾을 수 없습니다..
// solve: 4분

const isPalindrome = (num) => {
  const digitStringArray = num.toString().split("");
  const half = digitStringArray.length / 2;

  for (let index = 0; index < half; index++) {
    if (
      digitStringArray[index] !==
      digitStringArray[digitStringArray.length - 1 - index]
    ) {
      return false;
    }
  }
  return true;
};

function solution(n, m) {
  let answer = 0;

  for (let num = n; num <= m; num++) {
    if (isPalindrome(num)) {
      answer += 1;
    }
  }

  return answer;
}
