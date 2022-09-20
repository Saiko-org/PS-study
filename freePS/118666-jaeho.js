// 프로그래머스 / 118666 / 성격 유형 검사하기
// https://school.programmers.co.kr/learn/courses/30/lessons/118666
// solve: 15분
// add: 다른 사람의 풀이로 대체 (훨씬 간결하고 함수형으로 작성되어있어서)

function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => type.split("").forEach((char) => (MBTI[char] = 0)));

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}
