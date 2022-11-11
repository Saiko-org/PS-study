// 프로그래머스 / 12904 / 가장 긴 팰린드롬 (Lv3)
// https://school.programmers.co.kr/learn/courses/30/lessons/12904
// solve: 20분

function solution(s) {
  let answer = 1;
  const isPalindrome = (word) => {
    const LEN = word.length;
    for (let left = 0; left < LEN / 2; left++) {
      const right = LEN - 1 - left;
      if (word[left] !== word[right]) {
        return false;
      }
    }
    return true;
  };

  for (let index = 0; index < s.length; index++) {
    for (let plus = answer; index + plus < s.length; plus++) {
      const word = s.substring(index, index + plus + 1);
      if (isPalindrome(word)) {
        answer = plus + 1;
      }
    }
  }

  return answer;
}
