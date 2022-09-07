// 프로그래머스 / 42576 / 완주하지 못한 선수
// https://school.programmers.co.kr/learn/courses/30/lessons/42576
// solve: 5분

function solution(participant, completion) {
  const sortedParticipant = participant.sort();
  const sortedCompletion = completion.sort();

  for (let index = 0; index < completion.length; index++) {
    if (sortedParticipant[index] !== sortedCompletion[index]) {
      return sortedParticipant[index];
    }
  }

  return sortedParticipant[sortedParticipant.length - 1];
}
