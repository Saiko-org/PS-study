// 프로그래머스 / 118666 / 성격 유형 검사하기
// https://school.programmers.co.kr/learn/courses/30/lessons/118666
// solve: 15분

const getScore = (score) => {
  return Math.abs(score - 4);
};

// 점수에 따라 survey의 원소 중 앞캐릭터인지 뒷캐릭터인지 알아내는 함수
const getTypeIndex = (score) => {
  if (score < 4) {
    return 0;
  }

  return 1;
};

// map에 있는 지표 인덱스 알아내는 함수
const getIndicatorIndex = (type) => {
  switch (type) {
    case "R":
    case "T":
      return 0;
    case "C":
    case "F":
      return 1;
    case "J":
    case "M":
      return 2;
    case "A":
    case "N":
      return 3;
  }
};

function solution(survey, choices) {
  const board = Array.from({ length: 4 }, () => new Map());
  // 초기화
  board[0].set("R", 0);
  board[0].set("T", 0);
  board[1].set("C", 0);
  board[1].set("F", 0);
  board[2].set("J", 0);
  board[2].set("M", 0);
  board[3].set("A", 0);
  board[3].set("N", 0);

  for (let index = 0; index < survey.length; index++) {
    const key = survey[index][getTypeIndex(choices[index])];
    const nextScore =
      board[getIndicatorIndex(key)].get(key) + getScore(choices[index]);
    board[getIndicatorIndex(key)].set(key, nextScore);
  }

  const firstType = board[0].get("R") < board[0].get("T") ? "T" : "R";
  const secondType = board[1].get("C") < board[1].get("F") ? "F" : "C";
  const thirdType = board[2].get("J") < board[2].get("M") ? "M" : "J";
  const fourthType = board[3].get("A") < board[3].get("N") ? "N" : "A";

  return firstType + secondType + thirdType + fourthType;
}
