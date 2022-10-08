// 프로그래머스 / 131130 / 혼자 놀기의 달인 (Lv2)
// https://school.programmers.co.kr/learn/courses/30/lessons/131130
// solve: 15분

function solution(cards) {
  const cycles = []; // 각 그룹의 갯수 저장
  const board = Array.from({ length: cards.length }, () => false); // 방문 여부 확인

  while (board.includes(false)) {
    let count = 0; // 이번 그룹에 들어갈 박스 갯수 세기
    let index = board.indexOf(false);

    while (board[index] === false) {
      // 현재 박스 방문 -> 다음 index로 이동
      board[index] = true;
      index = cards[index] - 1;
      count += 1;
    }

    cycles.push(count);
  }

  if (cycles.length === 1) {
    // 상자 그룹이 1개인 경우
    return 0;
  }

  cycles.sort((a, b) => b - a); // 내림차순

  return cycles[0] * cycles[1];
}
